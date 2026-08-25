#!/usr/bin/env node
/**
 * Hanna — sourcing de banco de imagem com registro de proveniência.
 *
 * Executa a rota de banco do `references/asset-sourcing.md`: busca em no máximo
 * dois provedores, baixa os candidatos em resolução cheia, calcula SHA-256 e
 * grava o registro de proveniência que os gates exigem — página direta do
 * ativo, autor, URL oficial da licença, data de acesso e uso pretendido.
 *
 * Rode onde a rede alcança os provedores. No ambiente remoto do Claude Code os
 * bancos respondem 403 no CONNECT por política; ali este script informa isso e
 * cai para o modo `--manual`.
 *
 * Uso:
 *   node scripts/fetch-stock.cjs --query "recepção de clínica vazia" --out peca/assets
 *
 * Opções:
 *   --query <texto>        obrigatório: descreva a RELAÇÃO, não a categoria
 *   --out <dir>            onde gravar (padrão: ./stock)
 *   --provider <nome>      pexels | unsplash | pixabay (padrão: pexels,unsplash)
 *   --limit <n>            candidatos por provedor (padrão: 3, máximo 5)
 *   --orientation <o>      portrait | landscape | square
 *   --use <uso>            organic | paid | both (padrão: organic)
 *   --manual               não baixa: imprime as URLs de busca e o gabarito
 *   --select <ids>         marca candidatos como selecionados num registro já
 *                          gravado em --out e dispara o endpoint de download do
 *                          Unsplash, exigido pelas API Guidelines quando a foto
 *                          é de fato usada. Aceita id do ativo ou nome do
 *                          arquivo, separados por vírgula. Os demais viram
 *                          `rejected`.
 *   --json                 imprime só o registro em JSON
 *
 * Chaves (gratuitas, variáveis de ambiente):
 *   PEXELS_API_KEY · UNSPLASH_ACCESS_KEY · PIXABAY_API_KEY
 * Sem chave, o provedor entra em modo manual automaticamente.
 */

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const LICENSES = {
  pexels:   { url: "https://www.pexels.com/license/",                  note: "Confirme na página: uso comercial e restrições de pessoas identificáveis." },
  unsplash: { url: "https://unsplash.com/license",                     note: "Rejeite resultados Unsplash+ — licença separada em https://unsplash.com/plus/license." },
  pixabay:  { url: "https://pixabay.com/service/license-summary/",     note: "Confirme o resumo e os termos completos ligados nele." }
};

/* O Unsplash exige atribuição com UTM e o disparo de `download_location` quando
   a foto é de fato usada; Pexels e Pixabay exigem crédito ao autor. Os dois
   entram no registro para que a peça credite sem voltar ao provedor. */
const APP_NAME = process.env.HANNA_APP_NAME || "hanna-agencia-datta";

function utm(url) {
  if (!url) return url;
  return `${url}${url.includes("?") ? "&" : "?"}utm_source=${APP_NAME}&utm_medium=referral`;
}

const PROVIDER_LABEL = { pexels: "Pexels", unsplash: "Unsplash", pixabay: "Pixabay" };

const attributionFor = (provider, c) =>
  `Foto de ${c.creator || "autor não identificado"} no ${PROVIDER_LABEL[provider]} — ${c.assetPage}`;

const SEARCH_PAGE = {
  pexels:   (q, o) => `https://www.pexels.com/search/${encodeURIComponent(q)}/${o ? `?orientation=${o}` : ""}`,
  unsplash: (q, o) => `https://unsplash.com/s/photos/${encodeURIComponent(q)}${o ? `?orientation=${o}` : ""}`,
  pixabay:  (q, o) => `https://pixabay.com/images/search/${encodeURIComponent(q)}/${o ? `?orientation=${o}` : ""}`
};

function parseArgs(argv) {
  const o = { query: null, out: "stock", providers: ["pexels", "unsplash"], limit: 3,
              orientation: null, use: "organic", manual: false, json: false, select: [] };
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === "--query") o.query = argv[++i];
    else if (a === "--out") o.out = argv[++i];
    else if (a === "--provider") o.providers = argv[++i].split(",").map((s) => s.trim().toLowerCase());
    else if (a === "--limit") o.limit = Math.min(5, Math.max(1, Number(argv[++i])));
    else if (a === "--orientation") o.orientation = argv[++i];
    else if (a === "--use") o.use = argv[++i];
    else if (a === "--manual") o.manual = true;
    else if (a === "--json") o.json = true;
    else if (a === "--select") o.select = argv[++i].split(",").map((x) => x.trim()).filter(Boolean);
    else throw new Error(`Opção desconhecida: ${a}`);
  }
  if (!o.query && !o.select.length) throw new Error('Informe --query. Descreva a relação, não a categoria: "recepção de clínica vazia com telefone", não "saúde".');
  for (const p of o.providers) if (!LICENSES[p]) throw new Error(`Provedor desconhecido: ${p}`);
  if (o.providers.length > 2) throw new Error("A rota permite no máximo dois provedores por trabalho.");
  return o;
}

const sha256 = (f) => crypto.createHash("sha256").update(fs.readFileSync(f)).digest("hex");

async function get(url, headers) {
  const res = await fetch(url, { headers: headers || {} });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res;
}

/* ── provedores: cada um devolve candidatos normalizados ─────────────────── */

async function searchPexels(o) {
  const key = process.env.PEXELS_API_KEY;
  if (!key) return { skipped: "PEXELS_API_KEY ausente" };
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(o.query)}&per_page=${o.limit}` +
              (o.orientation ? `&orientation=${o.orientation}` : "");
  const data = await (await get(url, { Authorization: key })).json();
  return {
    candidates: (data.photos || []).map((p) => ({
      assetPage: p.url, creator: p.photographer, creatorPage: p.photographer_url,
      id: String(p.id), width: p.width, height: p.height,
      download: p.src && (p.src.original || p.src.large2x), alt: p.alt || null
    }))
  };
}

async function searchUnsplash(o) {
  const key = process.env.UNSPLASH_ACCESS_KEY;
  if (!key) return { skipped: "UNSPLASH_ACCESS_KEY ausente" };
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(o.query)}&per_page=${o.limit}` +
              (o.orientation ? `&orientation=${o.orientation}` : "");
  const data = await (await get(url, { Authorization: `Client-ID ${key}` })).json();
  return {
    candidates: (data.results || [])
      .filter((p) => !p.premium && !p.plus)   /* Unsplash+ tem licença separada */
      .map((p) => ({
        assetPage: utm(p.links && p.links.html), creator: p.user && p.user.name,
        creatorPage: utm(p.user && p.user.links && p.user.links.html),
        downloadLocation: p.links && p.links.download_location,
        id: p.id, width: p.width, height: p.height,
        download: p.urls && p.urls.full, alt: p.alt_description || null
      }))
  };
}

async function searchPixabay(o) {
  const key = process.env.PIXABAY_API_KEY;
  if (!key) return { skipped: "PIXABAY_API_KEY ausente" };
  const url = `https://pixabay.com/api/?key=${key}&q=${encodeURIComponent(o.query)}&per_page=${Math.max(3, o.limit)}&image_type=photo`;
  const data = await (await get(url)).json();
  return {
    candidates: (data.hits || []).slice(0, o.limit).map((p) => ({
      assetPage: p.pageURL, creator: p.user, creatorPage: `https://pixabay.com/users/${p.user}-${p.user_id}/`,
      id: String(p.id), width: p.imageWidth, height: p.imageHeight,
      download: p.largeImageURL, alt: p.tags || null
    }))
  };
}

const SEARCHERS = { pexels: searchPexels, unsplash: searchUnsplash, pixabay: searchPixabay };

/* ── seleção ────────────────────────────────────────────────────────────── */

/* As API Guidelines do Unsplash exigem um GET em `download_location` quando a
   foto é de fato usada — não a cada resultado de busca. Como quem seleciona é
   uma pessoa, o disparo mora aqui, no momento da decisão, e não na busca. */
async function triggerUnsplashDownload(c) {
  if (!c.downloadLocation) return { skipped: "registro sem download_location: refaça a busca com esta versão do script" };
  const key = process.env.UNSPLASH_ACCESS_KEY;
  if (!key) return { skipped: "UNSPLASH_ACCESS_KEY ausente" };
  try {
    await get(c.downloadLocation, { Authorization: `Client-ID ${key}` });
    return { triggeredAt: new Date().toISOString() };
  } catch (err) {
    return { error: String(err.message) };
  }
}

async function runSelect(o) {
  const recordPath = path.join(o.out, "sourcing-record.json");
  if (!fs.existsSync(recordPath)) throw new Error(`Não há registro em ${recordPath}. Rode a busca antes de selecionar.`);
  const record = JSON.parse(fs.readFileSync(recordPath, "utf8"));
  const wanted = new Set(o.select);
  const hit = new Set();
  const all = [];

  for (const prov of record.providers) {
    for (const c of prov.candidates) {
      const names = [c.id, c.file && path.basename(c.file)].filter(Boolean);
      const chosen = names.some((n) => wanted.has(n));
      if (chosen) names.forEach((n) => { if (wanted.has(n)) hit.add(n); });
      c.decision = chosen ? "selected" : "rejected";
      all.push({ provider: prov.provider, c });
    }
  }

  const missing = [...wanted].filter((w) => !hit.has(w));
  if (missing.length) {
    throw new Error(`Não está no registro: ${missing.join(", ")}. Candidatos: ${all.map(({ c }) => c.id).join(", ")}`);
  }

  record.selectedAt = new Date().toISOString().slice(0, 10);
  for (const { provider, c } of all) {
    if (c.decision === "selected" && provider === "unsplash") {
      c.unsplashDownloadTrigger = await triggerUnsplashDownload(c);
    }
  }

  fs.writeFileSync(recordPath, `${JSON.stringify(record, null, 2)}
`);
  if (o.json) { process.stdout.write(`${JSON.stringify(record, null, 2)}
`); return; }

  console.log(`
Hanna — seleção registrada
`);
  for (const { provider, c } of all) {
    console.log(`  ${c.decision === "selected" ? "selected" : "rejected"}  ${provider}  ${c.id}`);
    if (c.decision !== "selected") continue;
    console.log(`    crédito: ${c.attribution || attributionFor(provider, c)}`);
    const t = c.unsplashDownloadTrigger;
    if (t && t.triggeredAt) console.log(`    download_location disparado: ${t.triggeredAt}`);
    if (t && (t.skipped || t.error)) console.log(`    download_location NÃO disparado: ${t.skipped || t.error}`);
  }
  console.log(`
  Direitos seguem gate rígido: a licença não libera pessoas identificáveis,`);
  console.log(`  marcas, obras nem propriedade. Credite o autor na entrega da peça.`);
  console.log(`
  Registro: ${recordPath}
`);
}

/* ── execução ───────────────────────────────────────────────────────────── */

(async () => {
  const o = parseArgs(process.argv.slice(2));
  if (o.select.length) { await runSelect(o); return; }
  const accessDate = new Date().toISOString().slice(0, 10);
  const record = { tool: "hanna/scripts/fetch-stock.cjs", query: o.query, intendedUse: o.use,
                   accessDate, providers: [], gateReminder: null };

  fs.mkdirSync(o.out, { recursive: true });

  for (const provider of o.providers) {
    const entry = { provider, licenseUrl: LICENSES[provider].url, licenseNote: LICENSES[provider].note,
                    searchPage: SEARCH_PAGE[provider](o.query, o.orientation), candidates: [] };
    if (o.manual) {
      entry.mode = "manual";
      record.providers.push(entry);
      continue;
    }
    try {
      const result = await SEARCHERS[provider](o);
      if (result.skipped) { entry.mode = "manual"; entry.reason = result.skipped; record.providers.push(entry); continue; }
      entry.mode = "api";
      for (const c of result.candidates) {
        const file = path.join(o.out, `${provider}-${c.id}.jpg`);
        try {
          const res = await get(c.download);
          fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
          entry.candidates.push({ ...c, file, bytes: fs.statSync(file).size, sha256: sha256(file),
                                  attribution: attributionFor(provider, c), decision: null });
        } catch (err) {
          entry.candidates.push({ ...c, downloadError: String(err.message),
                                  attribution: attributionFor(provider, c), decision: null });
        }
      }
    } catch (err) {
      entry.mode = "failed";
      entry.error = String(err.message);
      if (/fetch failed|ENOTFOUND|ECONNREFUSED|403/.test(entry.error)) {
        entry.hint = "Provedor inalcançável. No ambiente remoto do Claude Code isso é política de rede (403 no CONNECT): rode este script onde a rede alcança os provedores, ou use --manual.";
      }
    }
    record.providers.push(entry);
  }

  record.gateReminder = [
    "Nenhum candidato está selecionado ainda. Aplique os cinco gates de asset-sourcing.md:",
    "1 necessidade semântica · 2 composição e área segura de texto · 3 qualidade técnica",
    "4 distinção e continuidade · 5 direitos — os direitos são gate rígido, não nota.",
    "A licença do provedor NÃO libera pessoas identificáveis, marcas, obras, propriedade",
    "nem endosso implícito. Para uso pago, confirme os dois: licença e direitos retratados.",
    "Registre a decisão de cada candidato antes de montar a peça: --select <ids> grava",
    "selected/rejected e dispara o endpoint de download que o Unsplash exige no uso."
  ];

  const recordPath = path.join(o.out, "sourcing-record.json");
  fs.writeFileSync(recordPath, `${JSON.stringify(record, null, 2)}\n`);

  if (o.json) { process.stdout.write(`${JSON.stringify(record, null, 2)}\n`); return; }

  console.log(`\nHanna — sourcing de banco`);
  console.log(`Busca: "${o.query}" · uso: ${o.use} · acesso: ${accessDate}\n`);
  for (const p of record.providers) {
    console.log(`  ${p.provider} [${p.mode}]`);
    console.log(`    licença : ${p.licenseUrl}`);
    console.log(`    busca   : ${p.searchPage}`);
    if (p.reason) console.log(`    modo manual: ${p.reason}`);
    if (p.error) console.log(`    erro    : ${p.error}`);
    if (p.hint) console.log(`    nota    : ${p.hint}`);
    for (const c of p.candidates) {
      console.log(`    · ${c.creator || "autor?"} — ${c.width}×${c.height}`);
      console.log(`      página: ${c.assetPage}`);
      if (c.file) console.log(`      arquivo: ${path.basename(c.file)}  ${c.sha256.slice(0, 16)}…`);
      if (c.downloadError) console.log(`      falha no download: ${c.downloadError}`);
    }
    console.log("");
  }
  record.gateReminder.forEach((l) => console.log(`  ${l}`));
  console.log(`\n  Registro: ${recordPath}\n`);
})().catch((e) => { console.error(`\n[hanna/fetch-stock] ${e.message}\n`); process.exitCode = 1; });
