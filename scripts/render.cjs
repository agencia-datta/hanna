#!/usr/bin/env node
/**
 * Hanna — renderizador e preflight de peças sociais.
 *
 * Converte um HTML de produção em PNGs 1080 × 1350 (ou outro canvas), roda uma
 * bateria de checagens automáticas (safe area, contraste, overflow, fontes,
 * resolução de imagem, tipo mínimo) e grava um manifest com SHA-256.
 *
 * Uso:
 *   node scripts/render.cjs <arquivo.html> [opções]
 *
 * Opções:
 *   --out <dir>            diretório de saída (padrão: ./exports)
 *   --prefix <nome>        prefixo dos arquivos (padrão: nome do HTML)
 *   --scale <n>            deviceScaleFactor da exportação (padrão: 1)
 *   --preview-scale <n>    escala da prévia de celular (padrão: 0.4)
 *   --no-contact-sheet     não gerar a folha de contato
 *   --guides               exportar também uma versão com as guias de safe area
 *   --safe-x <px>          safe area lateral (padrão: 80)
 *   --safe-top <px>        safe area superior (padrão: 96)
 *   --safe-bottom <px>     safe area inferior (padrão: 96)
 *   --min-body-px <n>      corpo mínimo em px no canvas 1080 (padrão: 27)
 *   --min-fine-px <n>      piso absoluto para rótulo/fonte/ID (padrão: 16)
 *   --min-contrast <n>     contraste WCAG mínimo para texto (padrão: 4.5)
 *   --check-only           roda o preflight sem exportar PNG
 *   --warn-only            nunca sai com código de erro
 *   --json                 imprime só o manifest em JSON
 *
 * Convenções no HTML:
 *   [data-slide]            elemento-canvas de cada lâmina (fallback: .canvas)
 *   data-composition="..."  id da macro-composição, usado no manifest e na
 *                           checagem de ritmo de silhueta
 *   data-bleed              elemento autorizado a sangrar fora da safe area
 *   data-fine               texto fino autorizado abaixo do corpo mínimo
 *   data-over-image         texto sobre foto: contraste vai para inspeção visual
 *   ?guides=1               o template do starter mostra as guias de safe area
 */

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execSync } = require("child_process");
const { pathToFileURL } = require("url");

/* ── resolução do playwright ────────────────────────────────────────────── */

function loadPlaywright() {
  const candidates = ["playwright", "playwright-core"];
  for (const name of candidates) {
    try {
      return require(name);
    } catch (_) {
      /* continua */
    }
  }
  let globalRoot = "";
  try {
    globalRoot = execSync("npm root -g", { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
  } catch (_) {
    /* sem npm global */
  }
  for (const name of candidates) {
    if (!globalRoot) break;
    const candidate = path.join(globalRoot, name);
    if (fs.existsSync(candidate)) return require(candidate);
  }
  throw new Error(
    "playwright não encontrado. Instale com `npm i -D playwright` na pasta do projeto " +
      "ou `npm i -g playwright`, e informe o navegador em HANNA_BROWSER_PATH se necessário."
  );
}

/* ── resolução do navegador ─────────────────────────────────────────────── */

function findBrowser() {
  if (process.env.HANNA_BROWSER_PATH && fs.existsSync(process.env.HANNA_BROWSER_PATH)) {
    return { executablePath: process.env.HANNA_BROWSER_PATH, origin: "HANNA_BROWSER_PATH" };
  }
  const root = process.env.PLAYWRIGHT_BROWSERS_PATH;
  if (root && fs.existsSync(root)) {
    const relatives = [
      "chrome-linux/chrome",
      "chrome-mac/Chromium.app/Contents/MacOS/Chromium",
      "chrome-win/chrome.exe"
    ];
    const dirs = fs
      .readdirSync(root)
      .filter((entry) => entry.startsWith("chromium"))
      .sort()
      .reverse();
    for (const dir of dirs) {
      for (const relative of relatives) {
        const candidate = path.join(root, dir, relative);
        if (fs.existsSync(candidate)) return { executablePath: candidate, origin: `PLAYWRIGHT_BROWSERS_PATH/${dir}` };
      }
    }
  }
  const systemPaths = [
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "/usr/bin/google-chrome",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "C:/Program Files/Google/Chrome/Application/chrome.exe"
  ];
  for (const candidate of systemPaths) {
    if (fs.existsSync(candidate)) return { executablePath: candidate, origin: "sistema" };
  }
  return { executablePath: null, origin: "bundle do playwright" };
}

/* ── argumentos ─────────────────────────────────────────────────────────── */

function parseArgs(argv) {
  const options = {
    input: null,
    out: null,
    prefix: null,
    scale: 1,
    previewScale: 0.4,
    contactSheet: true,
    guides: false,
    safeX: 80,
    safeTop: 96,
    safeBottom: 96,
    minBodyPx: 27,
    minFinePx: 16,
    minContrast: 4.5,
    checkOnly: false,
    warnOnly: false,
    json: false
  };
  const numeric = {
    "--scale": "scale",
    "--preview-scale": "previewScale",
    "--safe-x": "safeX",
    "--safe-top": "safeTop",
    "--safe-bottom": "safeBottom",
    "--min-body-px": "minBodyPx",
    "--min-fine-px": "minFinePx",
    "--min-contrast": "minContrast"
  };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (numeric[arg]) {
      options[numeric[arg]] = Number(argv[++index]);
    } else if (arg === "--out") {
      options.out = argv[++index];
    } else if (arg === "--prefix") {
      options.prefix = argv[++index];
    } else if (arg === "--no-contact-sheet") {
      options.contactSheet = false;
    } else if (arg === "--guides") {
      options.guides = true;
    } else if (arg === "--check-only") {
      options.checkOnly = true;
    } else if (arg === "--warn-only") {
      options.warnOnly = true;
    } else if (arg === "--json") {
      options.json = true;
    } else if (arg.startsWith("--")) {
      throw new Error(`Opção desconhecida: ${arg}`);
    } else if (!options.input) {
      options.input = arg;
    }
  }
  if (!options.input) throw new Error("Informe o HTML de produção. Ex.: node scripts/render.cjs peca.html");
  options.input = path.resolve(options.input);
  if (!fs.existsSync(options.input)) throw new Error(`Arquivo não encontrado: ${options.input}`);
  options.out = path.resolve(options.out || path.join(path.dirname(options.input), "exports"));
  options.prefix = options.prefix || path.basename(options.input, path.extname(options.input));
  return options;
}

const sha256 = (file) => crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");

/* ── auditoria executada dentro da página ───────────────────────────────── */

function auditInPage(config) {
  const SAFE_X = config.safeX;
  const SAFE_TOP = config.safeTop;
  const SAFE_BOTTOM = config.safeBottom;
  const MIN_BODY = config.minBodyPx;
  const MIN_FINE = config.minFinePx;
  const MIN_CONTRAST = config.minContrast;

  /* Aceita as duas convenções: `data-slide` e o `data-slide-id` que já existia
     nos fixtures do repositório. `.canvas` continua como último recurso, mas
     em arquivos que usam a mesma classe para canvas e prévia ela captura as
     duas coisas — por isso os atributos têm precedência. */
  const annotated = Array.from(document.querySelectorAll("[data-slide], [data-slide-id]"));
  const nodes = annotated.length ? annotated : Array.from(document.querySelectorAll(".canvas"));

  /* Folhas de contato costumam clonar as lâminas e reduzi-las por transform.
     A cópia escalada tem largura de layout igual à original e largura pintada
     menor: descartamos essas, e qualquer lâmina aninhada em outra. */
  const isScaledCopy = (element) => {
    const painted = element.getBoundingClientRect().width;
    const layout = element.offsetWidth;
    return layout > 0 && Math.abs(painted - layout) > 1;
  };
  const deduped = nodes.filter(
    (element) => !isScaledCopy(element) && !nodes.some((other) => other !== element && other.contains(element))
  );
  const targets = (deduped.length ? deduped : nodes.length ? nodes : [document.body]);

  const parseColor = (value) => {
    const match = String(value).match(/rgba?\(([^)]+)\)/);
    if (!match) return null;
    const parts = match[1].split(",").map((piece) => parseFloat(piece.trim()));
    return { r: parts[0], g: parts[1], b: parts[2], a: parts.length > 3 ? parts[3] : 1 };
  };
  const channel = (value) => {
    const ratio = value / 255;
    return ratio <= 0.03928 ? ratio / 12.92 : Math.pow((ratio + 0.055) / 1.055, 2.4);
  };
  const luminance = (color) => 0.2126 * channel(color.r) + 0.7152 * channel(color.g) + 0.0722 * channel(color.b);
  const contrast = (fg, bg) => {
    const a = luminance(fg);
    const b = luminance(bg);
    return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
  };
  const blend = (fg, bg) => ({
    r: fg.r * fg.a + bg.r * (1 - fg.a),
    g: fg.g * fg.a + bg.g * (1 - fg.a),
    b: fg.b * fg.a + bg.b * (1 - fg.a),
    a: 1
  });
  const contains = (outer, inner) =>
    outer.left <= inner.left + 0.5 &&
    outer.right >= inner.right - 0.5 &&
    outer.top <= inner.top + 0.5 &&
    outer.bottom >= inner.bottom - 0.5;

  /* O fundo efetivo de um texto pode vir de um ancestral OU de uma camada irmã
     posicionada atrás dele (faixa, painel, cartão, mídia sangrada). Reunimos as
     duas fontes, empilhamos na ordem de pintura e compomos o alfa. */
  const backdropOf = (element, root) => {
    const box = element.getBoundingClientRect();
    const layers = [];
    let uncertain = false;

    for (let current = element.parentElement; current; current = current.parentElement) {
      layers.push(current);
      if (current === root) break;
    }
    layers.reverse();

    const painted = Array.from(root.querySelectorAll("*")).filter((candidate) => {
      if (candidate === element || candidate.contains(element) || element.contains(candidate)) return false;
      const position = element.compareDocumentPosition(candidate);
      if (!(position & Node.DOCUMENT_POSITION_PRECEDING)) return false;
      const style = getComputedStyle(candidate);
      if (style.display === "none" || style.visibility === "hidden") return false;
      /* Grão, scrim leve e camadas em blend são tratamento, não fundo efetivo.
         Entram na inspeção visual, não no cálculo de contraste. */
      if (parseFloat(style.opacity) < 0.5) return false;
      if (style.mixBlendMode && style.mixBlendMode !== "normal") return false;
      const color = parseColor(style.backgroundColor);
      const hasImage = style.backgroundImage && style.backgroundImage !== "none";
      if (!hasImage && (!color || color.a === 0)) return false;
      return contains(candidate.getBoundingClientRect(), box);
    });
    layers.push(...painted);

    let accumulated = { r: 255, g: 255, b: 255, a: 1 };
    let sawOpaque = false;
    for (const layer of layers) {
      const style = getComputedStyle(layer);
      if (style.backgroundImage && style.backgroundImage !== "none") uncertain = true;
      const color = parseColor(style.backgroundColor);
      if (!color || color.a === 0) continue;
      accumulated = blend(color, accumulated);
      if (color.a >= 0.999) {
        sawOpaque = true;
        uncertain = false;
      }
    }
    const media = Array.from(root.querySelectorAll("img, video, canvas")).some(
      (node) => contains(node.getBoundingClientRect(), box) && !node.contains(element)
    );
    if (media) uncertain = true;
    return { color: sawOpaque || accumulated.a >= 0.999 ? accumulated : null, uncertain: uncertain || !sawOpaque };
  };

  /* document.fonts.check() só é confiável para faces declaradas em @font-face:
     para fontes locais ele responde `true` a qualquer nome, inclusive
     inexistente. Medimos a largura de uma sonda com dois genéricos diferentes
     de fallback; se a família existe, as duas medidas coincidem. */
  const GENERIC_FAMILIES = new Set([
    "serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui",
    "ui-serif", "ui-sans-serif", "ui-monospace", "ui-rounded", "math", "emoji", "fangsong"
  ]);
  const probeContext = document.createElement("canvas").getContext("2d");
  const fontResolves = (family, weight) => {
    if (GENERIC_FAMILIES.has(family.toLowerCase())) return true;
    const probe = "mmmwwwiiilll0123 Handgloves";
    const widthWith = (generic) => {
      probeContext.font = `${weight} 48px "${family}", ${generic}`;
      return probeContext.measureText(probe).width;
    };
    return Math.abs(widthWith("serif") - widthWith("monospace")) < 0.01;
  };

  const isVisible = (element) => {
    const style = getComputedStyle(element);
    if (style.display === "none" || style.visibility === "hidden" || parseFloat(style.opacity) === 0) return false;
    const box = element.getBoundingClientRect();
    return box.width > 0 && box.height > 0;
  };
  const ownText = (element) =>
    Array.from(element.childNodes)
      .filter((node) => node.nodeType === Node.TEXT_NODE)
      .map((node) => node.textContent.replace(/\s+/g, " ").trim())
      .join(" ")
      .trim();

  targets.forEach((slide) => slide.setAttribute("data-hanna-export", ""));

  return targets.map((slide, index) => {
    const slideBox = slide.getBoundingClientRect();
    const findings = [];
    const add = (level, check, message, detail) => findings.push({ level, check, message, detail });

    const width = Math.round(slideBox.width);
    const height = Math.round(slideBox.height);
    const knownCanvases = ["1080x1350", "1080x1080", "1080x1920", "1200x628"];
    if (!knownCanvases.includes(`${width}x${height}`)) {
      add("warn", "canvas", `Canvas ${width} × ${height} fora dos formatos usuais`, knownCanvases.join(", "));
    }

    const scale = width / 1080;
    const minBody = MIN_BODY * scale;
    const safe = {
      left: slideBox.left + SAFE_X * scale,
      right: slideBox.right - SAFE_X * scale,
      top: slideBox.top + SAFE_TOP * scale,
      bottom: slideBox.bottom - SAFE_BOTTOM * scale
    };

    const textElements = Array.from(slide.querySelectorAll("*")).filter(
      (element) => isVisible(element) && ownText(element).length > 0
    );

    const fontsInUse = new Map();
    const textInventory = [];
    let smallestBody = Infinity;
    let worstContrast = Infinity;
    let contrastUncertain = 0;

    textElements.forEach((element) => {
      const style = getComputedStyle(element);
      const box = element.getBoundingClientRect();
      const text = ownText(element);
      const size = parseFloat(style.fontSize);
      const family = style.fontFamily.split(",")[0].replace(/["']/g, "").trim();
      const key = `${family}|${style.fontWeight}`;
      if (!fontsInUse.has(key)) {
        fontsInUse.set(key, {
          family,
          weight: style.fontWeight,
          available: fontResolves(family, style.fontWeight)
        });
      }
      textInventory.push({ text, sizePx: Math.round(size / scale), family });

      /* A marca define o mono como papel de rótulo, fonte, período e ID — a
         faixa legítima é 18–22 px. Texto em mono conta como rótulo sem precisar
         de anotação, mas continua preso ao piso absoluto. */
      const monoRole = /mono|consol|courier|menlo/i.test(style.fontFamily);
      const fine = monoRole || element.closest("[data-fine]") !== null;
      if (fine) {
        if (size < MIN_FINE * scale - 0.5) {
          add("fail", "tipo-minimo", `Rótulo a ${Math.round(size / scale)} px abaixo do piso absoluto de ${MIN_FINE} px`, text.slice(0, 60));
        }
      } else {
        smallestBody = Math.min(smallestBody, size);
        if (size < minBody - 0.5) {
          add(
            "fail",
            "tipo-minimo",
            `Texto a ${Math.round(size / scale)} px no canvas 1080 (mínimo ${MIN_BODY}). Se for rótulo, fonte, período ou ID, marque com data-fine`,
            text.slice(0, 60)
          );
        }
      }

      const bleeding = element.closest("[data-bleed]") !== null;
      if (!bleeding) {
        const out = [];
        if (box.left < safe.left - 0.5) out.push("esquerda");
        if (box.right > safe.right + 0.5) out.push("direita");
        if (box.top < safe.top - 0.5) out.push("topo");
        if (box.bottom > safe.bottom + 0.5) out.push("base");
        if (out.length) {
          add("fail", "safe-area", `Texto fora da safe area (${out.join(", ")})`, text.slice(0, 60));
        }
      }

      if (box.right > slideBox.right + 1 || box.left < slideBox.left - 1 || box.bottom > slideBox.bottom + 1) {
        add("fail", "overflow", "Elemento de texto ultrapassa o canvas", text.slice(0, 60));
      }
      if (element.scrollWidth > element.clientWidth + 1 && getComputedStyle(element).overflow !== "visible") {
        add("fail", "overflow", "Texto cortado pelo próprio contêiner", text.slice(0, 60));
      }

      const overImage = element.closest("[data-over-image]") !== null;
      const foreground = parseColor(style.color);
      const backdrop = backdropOf(element, slide);
      if (overImage || backdrop.uncertain || !backdrop.color) {
        contrastUncertain += 1;
        add("inspect", "contraste", "Contraste sobre imagem/gradiente: confirmar na inspeção visual", text.slice(0, 60));
      } else if (foreground) {
        const ratio = contrast(foreground, backdrop.color);
        worstContrast = Math.min(worstContrast, ratio);
        const large = size >= 24 * scale * 1.5 || (size >= 24 * scale && Number(style.fontWeight) >= 700);
        const threshold = large ? 3 : MIN_CONTRAST;
        if (ratio < threshold) {
          add("fail", "contraste", `Contraste ${ratio.toFixed(2)}:1 abaixo de ${threshold}:1`, text.slice(0, 60));
        }
      }
    });

    /* Colisão entre blocos de texto: o caso mais comum de peça exportada com
       defeito é manchete e apoio se sobrepondo depois de uma troca de copy. */
    const boxes = textElements.map((element) => ({ element, box: element.getBoundingClientRect(), text: ownText(element) }));
    for (let a = 0; a < boxes.length; a += 1) {
      for (let b = a + 1; b < boxes.length; b += 1) {
        const first = boxes[a];
        const second = boxes[b];
        if (first.element.contains(second.element) || second.element.contains(first.element)) continue;
        const overlapX = Math.min(first.box.right, second.box.right) - Math.max(first.box.left, second.box.left);
        const overlapY = Math.min(first.box.bottom, second.box.bottom) - Math.max(first.box.top, second.box.top);
        if (overlapX > 2 && overlapY > 2) {
          add(
            "fail",
            "colisao",
            `Blocos de texto se sobrepõem em ${Math.round(overlapX)} × ${Math.round(overlapY)} px`,
            `"${first.text.slice(0, 30)}" × "${second.text.slice(0, 30)}"`
          );
        }
      }
    }

    let fontsFellBack = false;
    fontsInUse.forEach((entry) => {
      if (!entry.available) {
        fontsFellBack = true;
        add(
          "fail",
          "fonte",
          `Família "${entry.family}" ${entry.weight} não existe nesta máquina; o navegador usou fallback`,
          "declare um @font-face com o arquivo licenciado, ou renderize onde a fonte está instalada"
        );
      }
    });
    /* Sem a fonte real, todo texto muda de largura e de número de linhas. As
       medidas geométricas desta lâmina passam a descrever o fallback, não a
       peça: reportamos, mas sem tratá-las como defeito do layout. */
    if (fontsFellBack) {
      findings.forEach((finding) => {
        if (["colisao", "safe-area", "overflow", "tipo-minimo"].includes(finding.check) && finding.level === "fail") {
          finding.level = "inspect";
          finding.message += " — medido com fonte de fallback, reconfirmar com a fonte real";
        }
      });
      add("warn", "fonte", "Geometria desta lâmina medida com fonte de fallback: colisão, safe area, overflow e corpo mínimo não são conclusivos", null);
    }

    const images = Array.from(slide.querySelectorAll("img")).filter(isVisible);
    const imageRecords = images.map((image) => {
      const box = image.getBoundingClientRect();
      const record = {
        src: image.getAttribute("src"),
        natural: [image.naturalWidth, image.naturalHeight],
        rendered: [Math.round(box.width), Math.round(box.height)]
      };
      if (!image.complete || image.naturalWidth === 0) {
        add("fail", "imagem", "Imagem não carregou", record.src);
      } else if (!/\.svg($|\?)/i.test(record.src || "") && image.naturalWidth < box.width * 0.95) {
        add("fail", "imagem", `Resolução insuficiente: ${image.naturalWidth}px nativos para ${Math.round(box.width)}px renderizados`, record.src);
      }
      return record;
    });

    const interactive = slide.querySelectorAll("a, button, input, [role=button]").length;
    if (interactive > 0) {
      add("warn", "interativo", `${interactive} elemento(s) interativo(s) em uma peça de imagem estática`, null);
    }

    return {
      index: index + 1,
      id: slide.getAttribute("data-slide") || slide.getAttribute("data-slide-id") || slide.id || `s${String(index + 1).padStart(2, "0")}`,
      composition: slide.getAttribute("data-composition") || null,
      job: slide.getAttribute("data-job") || null,
      mode: slide.getAttribute("data-mode") || null,
      canvas: { width, height },
      text: textInventory,
      fonts: Array.from(fontsInUse.values()),
      images: imageRecords,
      smallestBodyPx: Number.isFinite(smallestBody) ? Math.round(smallestBody / scale) : null,
      worstContrast: Number.isFinite(worstContrast) ? Number(worstContrast.toFixed(2)) : null,
      contrastPendingVisualCheck: contrastUncertain,
      findings
    };
  });
}

/* ── execução ───────────────────────────────────────────────────────────── */

(async () => {
  const options = parseArgs(process.argv.slice(2));
  const { chromium } = loadPlaywright();
  const browserPath = findBrowser();

  const launchOptions = { headless: true, args: ["--font-render-hinting=none", "--force-color-profile=srgb"] };
  if (browserPath.executablePath) launchOptions.executablePath = browserPath.executablePath;
  const browser = await chromium.launch(launchOptions);

  const url = pathToFileURL(options.input).href;
  const page = await browser.newPage({
    viewport: { width: 1400, height: 1600 },
    deviceScaleFactor: options.scale
  });
  const consoleErrors = [];
  page.on("pageerror", (error) => consoleErrors.push(String(error)));
  page.on("requestfailed", (request) => consoleErrors.push(`request falhou: ${request.url()}`));
  await page.goto(url, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(async () => {
    const images = Array.from(document.images);
    await Promise.all(
      images.map((image) =>
        image.complete ? Promise.resolve() : new Promise((resolve) => {
          image.addEventListener("load", resolve, { once: true });
          image.addEventListener("error", resolve, { once: true });
        })
      )
    );
  });

  const slides = await page.evaluate(auditInPage, {
    safeX: options.safeX,
    safeTop: options.safeTop,
    safeBottom: options.safeBottom,
    minBodyPx: options.minBodyPx,
    minFinePx: options.minFinePx,
    minContrast: options.minContrast
  });

  if (!slides.length) throw new Error("Nenhuma lâmina encontrada. Marque cada canvas com [data-slide] ou .canvas.");

  const compositions = slides.map((slide) => slide.composition).filter(Boolean);
  const distinctCompositions = new Set(compositions).size;
  const rhythm = {
    declared: compositions.length,
    distinct: distinctCompositions,
    slides: slides.length
  };
  if (slides.length >= 5 && compositions.length === slides.length && distinctCompositions < 3) {
    slides[0].findings.push({
      level: "fail",
      check: "ritmo",
      message: `Apenas ${distinctCompositions} macro-composição(ões) distinta(s) em ${slides.length} lâminas (mínimo 3)`,
      detail: compositions.join(", ")
    });
  }
  if (slides.length > 1 && compositions.length !== slides.length) {
    slides[0].findings.push({
      level: "warn",
      check: "ritmo",
      message: "Lâminas sem data-composition: o ritmo de silhueta não pôde ser verificado automaticamente",
      detail: null
    });
  }

  const exports = [];
  if (!options.checkOnly) {
    fs.mkdirSync(options.out, { recursive: true });
    /* A auditoria marcou exatamente as lâminas reais; exportamos esse conjunto
       para que prévias clonadas nunca virem entregável. */
    const locators = page.locator("[data-hanna-export]");
    for (let index = 0; index < slides.length; index += 1) {
      const slide = slides[index];
      const file = path.join(
        options.out,
        slides.length > 1
          ? `${options.prefix}-${slide.id}-${slide.canvas.width}x${slide.canvas.height}.png`
          : `${options.prefix}-${slide.canvas.width}x${slide.canvas.height}.png`
      );
      await locators.nth(index).screenshot({ path: file, scale: "css" });
      exports.push({ slide: slide.id, path: file, sha256: sha256(file) });
    }

    if (options.guides) {
      await page.evaluate((safe) => {
        document.querySelectorAll("[data-hanna-export]").forEach((slide) => {
          const overlay = document.createElement("div");
          const scale = slide.getBoundingClientRect().width / 1080;
          overlay.setAttribute("data-guide-overlay", "");
          overlay.style.cssText = `position:absolute;pointer-events:none;z-index:9999;left:${safe.x * scale}px;right:${safe.x * scale}px;top:${safe.top * scale}px;bottom:${safe.bottom * scale}px;outline:2px dashed rgba(255,0,110,.85);`;
          if (getComputedStyle(slide).position === "static") slide.style.position = "relative";
          slide.appendChild(overlay);
        });
      }, { x: options.safeX, top: options.safeTop, bottom: options.safeBottom });
      for (let index = 0; index < slides.length; index += 1) {
        const file = path.join(options.out, `${options.prefix}-${slides[index].id}-guides.png`);
        await locators.nth(index).screenshot({ path: file, scale: "css" });
        exports.push({ slide: `${slides[index].id}-guides`, path: file, sha256: sha256(file) });
      }
      await page.evaluate(() => document.querySelectorAll("[data-guide-overlay]").forEach((node) => node.remove()));
    }

    if (options.contactSheet && exports.length) {
      const sheetFiles = exports.filter((entry) => !entry.slide.endsWith("-guides"));
      const width = Math.round(slides[0].canvas.width * options.previewScale);
      const columns = Math.min(sheetFiles.length, 5);
      const sheetHtml = `<!doctype html><meta charset="utf-8"><style>
        body{margin:0;padding:24px;background:#0E1014;display:grid;grid-template-columns:repeat(${columns},max-content);gap:18px;align-items:start;width:max-content}
        figure{margin:0;display:flex;flex-direction:column;gap:6px}
        img{display:block;width:${width}px;height:auto}
        figcaption{font:500 11px/1.2 ui-monospace,monospace;color:#8A928C;letter-spacing:.06em;text-transform:uppercase}
      </style>${sheetFiles
        .map((entry) => `<figure><img src="${pathToFileURL(entry.path).href}"><figcaption>${entry.slide}</figcaption></figure>`)
        .join("")}`;
      /* A folha precisa ser carregada de file:// para que o navegador aceite as
         PNGs locais; setContent roda em about:blank e bloqueia os ativos. */
      const sheetSource = path.join(options.out, `.${options.prefix}-contact-sheet.html`);
      fs.writeFileSync(sheetSource, sheetHtml);
      const sheetPage = await browser.newPage({ viewport: { width: 1200, height: 900 } });
      await sheetPage.goto(pathToFileURL(sheetSource).href, { waitUntil: "networkidle" });
      await sheetPage.evaluate(async () => {
        await Promise.all(
          Array.from(document.images).map((image) =>
            image.complete ? Promise.resolve() : new Promise((resolve) => image.addEventListener("load", resolve, { once: true }))
          )
        );
      });
      const sheetPath = path.join(options.out, `${options.prefix}-contact-sheet.png`);
      await sheetPage.locator("body").screenshot({ path: sheetPath });
      await sheetPage.close();
      fs.unlinkSync(sheetSource);
      exports.push({ slide: "contact-sheet", path: sheetPath, sha256: sha256(sheetPath) });
    }
  }

  const version = browser.version();
  await browser.close();

  const allFindings = slides.flatMap((slide) => slide.findings.map((finding) => ({ slide: slide.id, ...finding })));
  const counts = {
    fail: allFindings.filter((finding) => finding.level === "fail").length,
    warn: allFindings.filter((finding) => finding.level === "warn").length,
    inspect: allFindings.filter((finding) => finding.level === "inspect").length
  };

  const manifest = {
    tool: "hanna/scripts/render.cjs",
    generatedAt: new Date().toISOString(),
    input: { path: options.input, sha256: sha256(options.input) },
    browser: { version, executablePath: browserPath.executablePath, origin: browserPath.origin },
    settings: {
      safeArea: { x: options.safeX, top: options.safeTop, bottom: options.safeBottom },
      minBodyPx: options.minBodyPx,
      minFinePx: options.minFinePx,
      minContrast: options.minContrast,
      exportScale: options.scale,
      previewScale: options.previewScale
    },
    rhythm,
    slides,
    exports,
    pageErrors: consoleErrors,
    summary: counts,
    verdict: counts.fail > 0 ? "REPROVADO NO PREFLIGHT" : counts.inspect > 0 ? "PENDENTE DE INSPEÇÃO VISUAL" : "PREFLIGHT OK"
  };

  if (!options.checkOnly) {
    const manifestPath = path.join(options.out, `${options.prefix}-manifest.json`);
    fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
    manifest.manifestPath = manifestPath;
  }

  if (options.json) {
    process.stdout.write(`${JSON.stringify(manifest, null, 2)}\n`);
  } else {
    console.log(`\nHanna preflight — ${path.basename(options.input)}`);
    console.log(`Navegador: ${version} (${browserPath.origin})`);
    console.log(`Lâminas: ${slides.length} · macro-composições distintas: ${rhythm.distinct || "não declaradas"}`);
    for (const slide of slides) {
      const marks = slide.findings.length ? "" : "  sem apontamentos";
      console.log(
        `\n  ${slide.id}${slide.composition ? ` [${slide.composition}]` : ""} — ${slide.canvas.width}×${slide.canvas.height}` +
          `${slide.worstContrast ? ` · contraste mínimo ${slide.worstContrast}:1` : ""}` +
          `${slide.smallestBodyPx ? ` · menor corpo ${slide.smallestBodyPx}px` : ""}${marks}`
      );
      for (const finding of slide.findings) {
        const tag = { fail: "FALHA  ", warn: "ATENÇÃO", inspect: "INSPEÇ." }[finding.level];
        console.log(`    ${tag} ${finding.check}: ${finding.message}${finding.detail ? ` — "${finding.detail}"` : ""}`);
      }
    }
    if (consoleErrors.length) {
      console.log("\n  Erros de página:");
      consoleErrors.forEach((error) => console.log(`    ${error}`));
    }
    if (exports.length) {
      console.log(`\n  Exportados em ${options.out}:`);
      exports.forEach((entry) => console.log(`    ${path.basename(entry.path)}  ${entry.sha256.slice(0, 16)}…`));
      console.log(`    ${options.prefix}-manifest.json`);
    }
    console.log(`\n  ${manifest.verdict} — ${counts.fail} falha(s), ${counts.warn} atenção(ões), ${counts.inspect} item(ns) para inspeção visual.\n`);
  }

  if (counts.fail > 0 && !options.warnOnly) process.exitCode = 1;
})().catch((error) => {
  console.error(`\n[hanna/render] ${error.message}\n`);
  process.exitCode = 2;
});
