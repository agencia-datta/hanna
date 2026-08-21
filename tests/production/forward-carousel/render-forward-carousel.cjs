const assert = require("assert");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");
const { chromium } = require("playwright");
const playwrightVersion = require("playwright/package.json").version;

const sourceDir = __dirname;
const repositoryRoot = path.resolve(sourceDir, "..", "..", "..");
const fixturePath = path.join(sourceDir, "forward-carousel.fixture.json");
const htmlPath = path.join(sourceDir, "forward-carousel.html");
const provenancePath = path.join(sourceDir, "provenance.json");
const promptsPath = path.join(sourceDir, "generation-prompts.md");
const readmePath = path.join(sourceDir, "README.md");
const rendererPath = __filename;
const artifactsDir = path.join(repositoryRoot, "tests", "artifacts", "forward-carousel");
const manifestPath = path.join(artifactsDir, "forward-carousel-manifest.json");

const fixture = JSON.parse(fs.readFileSync(fixturePath, "utf8"));
const passedAssertions = [];

function sha256(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function sha256Buffer(buffer) {
  return crypto.createHash("sha256").update(buffer).digest("hex");
}

function normalize(value) {
  return value.replace(/\s+/g, " ").trim();
}

function verify(name, operation) {
  try {
    operation();
    passedAssertions.push(name);
  } catch (error) {
    error.message = `${name}: ${error.message}`;
    throw error;
  }
}

function relativeToRepository(filePath) {
  return path.relative(repositoryRoot, filePath).replace(/\\/g, "/");
}

function pngDimensions(filePath) {
  const buffer = fs.readFileSync(filePath);
  assert.strictEqual(buffer.toString("ascii", 1, 4), "PNG", `${filePath} is not a PNG`);
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

function sourceAssetPath(asset) {
  return path.resolve(sourceDir, asset.path);
}

function expectedAssetUrl(assetPath) {
  return new URL(assetPath.replace(/\\/g, "/"), pathToFileURL(htmlPath).href).href;
}

(async () => {
  verify("fixture declares exactly seven slides", () => {
    assert.strictEqual(fixture.slides.length, 7);
  });
  verify("HTML implementation exists", () => {
    assert.ok(fs.existsSync(htmlPath), `Missing ${htmlPath}`);
  });
  verify("provenance record exists", () => {
    assert.ok(fs.existsSync(provenancePath), `Missing ${provenancePath}`);
  });
  verify("exact generation prompt record exists", () => {
    assert.ok(fs.existsSync(promptsPath), `Missing ${promptsPath}`);
  });
  verify("README exists", () => {
    assert.ok(fs.existsSync(readmePath), `Missing ${readmePath}`);
  });
  verify("source assets match approved hashes", () => {
    for (const asset of fixture.sourceAssets) {
      const absolutePath = sourceAssetPath(asset);
      assert.ok(fs.existsSync(absolutePath), `Missing source asset ${asset.path}`);
      assert.strictEqual(sha256(absolutePath), asset.sha256, `Hash drift for ${asset.path}`);
    }
  });

  const provenance = JSON.parse(fs.readFileSync(provenancePath, "utf8"));
  verify("provenance covers every fixture source asset", () => {
    const fixturePaths = fixture.sourceAssets.map((asset) => asset.path).sort();
    const provenancePaths = provenance.assets.map((asset) => asset.path).sort();
    assert.deepStrictEqual(provenancePaths, fixturePaths);
  });
  verify("generated assets link to exact prompt records", () => {
    const generated = provenance.assets.filter((asset) => asset.class === "generated");
    assert.strictEqual(generated.length, 2);
    for (const asset of generated) {
      assert.strictEqual(asset.promptRecord.exactPromptAvailable, true);
      assert.ok(asset.promptRecord.path.startsWith("generation-prompts.md#"));
      assert.match(asset.rawOutputSha256, /^[a-f0-9]{64}$/);
    }
  });

  fs.mkdirSync(artifactsDir, { recursive: true });

  let browser;
  const pageErrors = [];
  const consoleErrors = [];
  try {
    browser = await chromium.launch({
      channel: "msedge",
      headless: true,
      args: [
        "--disable-gpu",
        "--disable-lcd-text",
        "--disable-font-subpixel-positioning",
        "--font-render-hinting=none"
      ]
    });
    const browserVersion = browser.version();
    const page = await browser.newPage({
      viewport: { width: 1280, height: 1600 },
      deviceScaleFactor: 1,
      colorScheme: "light",
      reducedMotion: "reduce"
    });
    page.on("pageerror", (error) => pageErrors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });

    await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForFunction(() => Array.from(document.images).every((image) => image.complete && image.naturalWidth > 0));

    const inspection = await page.evaluate(({ fixture }) => {
      const normalizeText = (value) => value.replace(/\s+/g, " ").trim();
      const relativeRect = (element, parent) => {
        const box = element.getBoundingClientRect();
        const parentBox = parent.getBoundingClientRect();
        return {
          left: box.left - parentBox.left,
          top: box.top - parentBox.top,
          right: box.right - parentBox.left,
          bottom: box.bottom - parentBox.top,
          width: box.width,
          height: box.height
        };
      };
      const contentRect = (element, parent) => {
        const range = document.createRange();
        range.selectNodeContents(element);
        const box = range.getBoundingClientRect();
        const parentBox = parent.getBoundingClientRect();
        return {
          left: box.left - parentBox.left,
          top: box.top - parentBox.top,
          right: box.right - parentBox.left,
          bottom: box.bottom - parentBox.top,
          width: box.width,
          height: box.height
        };
      };
      const slides = Array.from(document.querySelectorAll(".slides-source > .slide"), (slide) => {
        const copy = Object.fromEntries(
          Array.from(slide.querySelectorAll("[data-copy-key]"), (element) => [
            element.dataset.copyKey,
            normalizeText(element.innerText)
          ])
        );
        return {
          id: slide.dataset.slideId,
          mode: slide.dataset.mode,
          composition: slide.dataset.composition,
          anchor: slide.dataset.anchor || null,
          rect: relativeRect(slide, slide.parentElement),
          scroll: { width: slide.scrollWidth, height: slide.scrollHeight },
          copy,
          copyRects: Array.from(slide.querySelectorAll("[data-copy-key]"), (element) => ({
            key: element.dataset.copyKey,
            ...relativeRect(element, slide),
            content: contentRect(element, slide),
            scrollWidth: element.scrollWidth,
            scrollHeight: element.scrollHeight,
            clientWidth: element.clientWidth,
            clientHeight: element.clientHeight,
            overflowX: getComputedStyle(element).overflowX,
            overflowY: getComputedStyle(element).overflowY
          })),
          safeRects: Array.from(slide.querySelectorAll("[data-safe]"), (element) => ({
            name: element.dataset.safe || element.className,
            ...relativeRect(element, slide)
          })),
          overflowChecks: Array.from(slide.querySelectorAll("[data-overflow-check]"), (element) => ({
            name: element.dataset.overflowCheck || element.className,
            scrollWidth: element.scrollWidth,
            scrollHeight: element.scrollHeight,
            clientWidth: element.clientWidth,
            clientHeight: element.clientHeight,
            overflowX: getComputedStyle(element).overflowX,
            overflowY: getComputedStyle(element).overflowY
          })),
          images: Array.from(slide.querySelectorAll("img"), (image) => ({
            key: image.dataset.assetKey || null,
            srcAttribute: image.getAttribute("src"),
            src: image.src,
            complete: image.complete,
            naturalWidth: image.naturalWidth,
            naturalHeight: image.naturalHeight,
            altPresent: image.hasAttribute("alt")
          }))
        };
      });

      const rootStyles = getComputedStyle(document.documentElement);
      const tokens = Object.fromEntries(
        Object.keys(fixture.tokens).map((name) => [name, rootStyles.getPropertyValue(`--${name}`).trim().toUpperCase()])
      );

      const canvas = document.createElement("canvas").getContext("2d");
      const sample = "Handoff 012345 — MWim";
      const fonts = fixture.typography.map((font) => {
        canvas.font = `32px "${font.family}", ${font.fallback}`;
        const targetWidth = canvas.measureText(sample).width;
        canvas.font = `32px ${font.fallback}`;
        const fallbackWidth = canvas.measureText(sample).width;
        return {
          family: font.family,
          check: document.fonts.check(font.query),
          targetWidth,
          fallbackWidth,
          widthDifference: Math.abs(targetWidth - fallbackWidth)
        };
      });

      const fontUsage = Object.fromEntries(
        Array.from(document.querySelectorAll("[data-font-role]"), (element) => [
          element.dataset.fontRole,
          getComputedStyle(element).fontFamily
        ])
      );

      const artifacts = Array.from(
        document.querySelectorAll(".slides-source [data-artifact-key]"),
        (artifact) => {
          const ticket = artifact.querySelector(".ticket-shape");
          const ticketBox = ticket.getBoundingClientRect();
          const notchRects = Array.from(ticket.querySelectorAll(".ticket-notch"), (notch) => {
            const box = notch.getBoundingClientRect();
            return {
              left: box.left - ticketBox.left,
              top: box.top - ticketBox.top,
              right: box.right - ticketBox.left,
              bottom: box.bottom - ticketBox.top,
              width: box.width,
              height: box.height
            };
          });
          const clamp = artifact.querySelector(".ticket-clamp");
          const clockCue = artifact.querySelector(".clock-cue");
          return {
            key: artifact.dataset.artifactKey,
            slideId: artifact.closest(".slide").dataset.slideId,
            status: artifact.dataset.provenanceStatus,
            backgroundColor: getComputedStyle(ticket).backgroundColor,
            ticketWidth: ticketBox.width,
            ticketHeight: ticketBox.height,
            notchCount: notchRects.length,
            notchRects,
            clampCount: clamp ? 1 : 0,
            clampBackground: clamp ? getComputedStyle(clamp).backgroundColor : null,
            clockCueCount: clockCue ? 1 : 0,
            clockFilter: clockCue ? getComputedStyle(clockCue).filter : null
          };
        }
      );

      const preview = document.querySelector(".preview-surface");
      const previewRect = preview.getBoundingClientRect();
      const previewCardRect = preview.querySelector(":scope > .preview-card").getBoundingClientRect();
      return {
        slides,
        tokens,
        fonts,
        fontUsage,
        artifacts,
        preview: {
          cards: preview.querySelectorAll(":scope > .preview-card").length,
          width: Math.round(previewRect.width),
          height: Math.round(previewRect.height),
          cardWidth: Math.round(previewCardRect.width),
          cardHeight: Math.round(previewCardRect.height)
        },
        interactiveElements: document.querySelectorAll(
          "a, button, input, select, textarea, [role=button], [contenteditable=true]"
        ).length,
        symbolCount: document.querySelectorAll(
          '.slides-source img[src="../../../assets/datta/datta-simbolo.svg"]'
        ).length,
        lockupCount: document.querySelectorAll(
          '.slides-source img[src="../../../assets/datta/datta-lockup-mono.svg"]'
        ).length
      };
    }, { fixture });

    verify("page and console stay error-free", () => {
      assert.deepStrictEqual(pageErrors, []);
      assert.deepStrictEqual(consoleErrors, []);
    });
    verify("DOM contains exactly seven source slides", () => {
      assert.strictEqual(inspection.slides.length, 7);
    });
    verify("slide ids, modes, compositions, anchors, assets, and visible copy match fixture", () => {
      for (let index = 0; index < fixture.slides.length; index += 1) {
        const expected = fixture.slides[index];
        const actual = inspection.slides[index];
        assert.strictEqual(actual.id, expected.id, `Slide id mismatch at index ${index}`);
        assert.strictEqual(actual.mode, expected.mode, `${expected.id} mode mismatch`);
        assert.strictEqual(actual.composition, expected.composition, `${expected.id} composition mismatch`);
        assert.strictEqual(actual.anchor, expected.anchor, `${expected.id} anchor mismatch`);
        assert.deepStrictEqual(actual.copy, expected.copy, `${expected.id} visible copy mismatch`);
        assert.deepStrictEqual(
          actual.images.map((image) => image.srcAttribute).sort(),
          expected.assetPaths.slice().sort(),
          `${expected.id} asset paths mismatch`
        );
      }
    });
    verify("every slide is exactly 1080 by 1350", () => {
      for (const slide of inspection.slides) {
        assert.deepStrictEqual(
          [Math.round(slide.rect.width), Math.round(slide.rect.height)],
          [fixture.canvas.width, fixture.canvas.height],
          `${slide.id} dimensions drifted`
        );
      }
    });
    verify("all copy remains inside the declared safe area", () => {
      const { left, right, top, bottom } = fixture.safeArea;
      for (const slide of inspection.slides) {
        for (const copy of slide.copyRects) {
          assert.ok(copy.content.left >= left - 2, `${slide.id}/${copy.key} crosses left safe area`);
          assert.ok(copy.content.right <= fixture.canvas.width - right + 2, `${slide.id}/${copy.key} crosses right safe area`);
          assert.ok(copy.content.top >= top - 2, `${slide.id}/${copy.key} crosses top safe area`);
          assert.ok(copy.content.bottom <= fixture.canvas.height - bottom + 2, `${slide.id}/${copy.key} crosses bottom safe area`);
        }
        for (const safe of slide.safeRects) {
          assert.ok(safe.left >= left - 1, `${slide.id}/${safe.name} crosses left safe area`);
          assert.ok(safe.right <= fixture.canvas.width - right + 1, `${slide.id}/${safe.name} crosses right safe area`);
          assert.ok(safe.top >= top - 1, `${slide.id}/${safe.name} crosses top safe area`);
          assert.ok(safe.bottom <= fixture.canvas.height - bottom + 1, `${slide.id}/${safe.name} crosses bottom safe area`);
        }
      }
    });
    verify("slides and checked regions have no overflow", () => {
      for (const slide of inspection.slides) {
        assert.ok(slide.scroll.width <= fixture.canvas.width, `${slide.id} horizontal overflow`);
        assert.ok(slide.scroll.height <= fixture.canvas.height, `${slide.id} vertical overflow`);
        for (const region of [...slide.copyRects, ...slide.overflowChecks]) {
          if (region.overflowX !== "visible") {
            assert.ok(region.scrollWidth <= region.clientWidth + 1, `${slide.id}/${region.name || region.key} clips horizontally`);
          }
          if (region.overflowY !== "visible") {
            assert.ok(region.scrollHeight <= region.clientHeight + 1, `${slide.id}/${region.name || region.key} clips vertically`);
          }
        }
      }
    });
    verify("all referenced images load and expose alt attributes", () => {
      for (const slide of inspection.slides) {
        for (const image of slide.images) {
          assert.ok(image.complete && image.naturalWidth > 0 && image.naturalHeight > 0, `${slide.id}/${image.srcAttribute} did not load`);
          assert.ok(image.altPresent, `${slide.id}/${image.srcAttribute} lacks alt attribute`);
          assert.strictEqual(image.src, expectedAssetUrl(image.srcAttribute), `${slide.id}/${image.srcAttribute} resolved unexpectedly`);
        }
      }
    });
    verify("required primary assets and exact Datta SVGs occur on the assigned slides", () => {
      const byId = Object.fromEntries(inspection.slides.map((slide) => [slide.id, slide]));
      const required = [
        ["S01", "s1-open", "assets/reception-open.jpg"],
        ["S01", "s1-symbol", "../../../assets/datta/datta-simbolo.svg"],
        ["S07", "s7-resolved", "assets/reception-resolved.jpg"],
        ["S07", "s7-lockup", "../../../assets/datta/datta-lockup-mono.svg"]
      ];
      for (const [slideId, key, srcAttribute] of required) {
        assert.ok(
          byId[slideId].images.some((image) => image.key === key && image.srcAttribute === srcAttribute),
          `${slideId} is missing ${key}`
        );
      }
      assert.strictEqual(inspection.symbolCount, 1, "Exact symbol must occur once in source slides");
      assert.strictEqual(inspection.lockupCount, 1, "Exact mono lockup must occur once in source slides");
    });
    verify("S04 uses the owned stopped-ticket CSS artifact", () => {
      const artifact = inspection.artifacts.find((item) => item.key === "s4-ticket-stopped-css");
      assert.ok(artifact, "S04 stopped-ticket artifact is missing");
      assert.strictEqual(artifact.slideId, "S04");
      assert.strictEqual(artifact.status, "owned · illustrative");
      assert.strictEqual(artifact.backgroundColor, "rgb(40, 71, 215)");
      assert.strictEqual(artifact.notchCount, 2, "Ticket must expose two symmetric side notches");
      const [leftNotch, rightNotch] = artifact.notchRects;
      assert.deepStrictEqual(
        [leftNotch.width, leftNotch.height, leftNotch.top],
        [rightNotch.width, rightNotch.height, rightNotch.top],
        "Ticket side notches are not symmetric"
      );
      assert.ok(leftNotch.left <= 1, "Left notch does not cut the ticket edge");
      assert.ok(rightNotch.right >= artifact.ticketWidth - 1, "Right notch does not cut the ticket edge");
      assert.ok(leftNotch.width <= artifact.ticketWidth * 0.12, "Ticket notches are not small");
      assert.strictEqual(artifact.clampCount, 1, "Ticket must stop under one transparent clamp");
      assert.ok(artifact.clampBackground.startsWith("rgba"), "Clamp is not transparent");
      assert.strictEqual(artifact.clockCueCount, 1, "Ticket macro needs one blurred clock cue");
      assert.ok(artifact.clockFilter.includes("blur"), "Clock cue is not blurred");
    });
    verify("three required semantic anchors occur on distinct slides", () => {
      const anchored = inspection.slides.filter((slide) => slide.anchor);
      assert.deepStrictEqual(
        anchored.map((slide) => slide.anchor).sort(),
        ["artifact-evidence-led", "contextual-transformation", "image-led"]
      );
      assert.strictEqual(new Set(anchored.map((slide) => slide.id)).size, 3);
    });
    verify("all seven silhouettes use unique composition ids", () => {
      const compositions = inspection.slides.map((slide) => slide.composition);
      assert.strictEqual(new Set(compositions).size, 7);
      assert.ok(new Set(compositions).size >= 3);
    });
    verify("concept tokens are exact and do not default to official Datta colors", () => {
      assert.deepStrictEqual(inspection.tokens, fixture.tokens);
      assert.strictEqual(fixture.officialColorsSelected, false);
      const official = new Set(["#091105", "#00392F", "#C89C4F", "#F1F1F1", "#000000", "#7D5F28"]);
      for (const color of Object.values(inspection.tokens)) assert.ok(!official.has(color), `${color} is an official default`);
    });
    verify("all four nonofficial system fonts are available in Edge", () => {
      for (const font of inspection.fonts) {
        assert.strictEqual(font.check, true, `${font.family} failed document.fonts.check`);
        assert.ok(font.widthDifference >= 0.5, `${font.family} appears to have fallen back`);
      }
      assert.ok(inspection.fontUsage["display-primary"].includes("Bahnschrift SemiCondensed"));
      assert.ok(inspection.fontUsage["display-secondary"].includes("Bahnschrift"));
      assert.ok(inspection.fontUsage.body.includes("Segoe UI"));
      assert.ok(inspection.fontUsage["evidence-label"].includes("Cascadia Mono"));
      assert.ok(fixture.typography.every((font) => font.official === false));
    });
    verify("no interactive CTA or control exists", () => {
      assert.strictEqual(fixture.interactiveCta, false);
      assert.strictEqual(inspection.interactiveElements, 0);
    });
    verify("preview surface contains one phone-size card per slide", () => {
      assert.strictEqual(inspection.preview.cards, 7);
      assert.ok(inspection.preview.width > 0 && inspection.preview.height > 0);
      assert.deepStrictEqual(
        [inspection.preview.cardWidth, inspection.preview.cardHeight],
        [fixture.canvas.width * fixture.previewScale, fixture.canvas.height * fixture.previewScale]
      );
    });

    const outputRecords = [];
    await page.addStyleTag({ content: `
      body.capture-mode { margin: 0 !important; min-width: 1080px !important; overflow: hidden !important; }
      body.capture-mode > .production-page { display: none !important; }
      #capture-stage {
        position: fixed;
        inset: 0 auto auto 0;
        width: 1080px;
        height: 1350px;
        overflow: hidden;
        background: #171A20;
      }
      #capture-stage > .slide { position: absolute; inset: 0; }
    ` });
    for (let index = 0; index < fixture.slides.length; index += 1) {
      const slide = fixture.slides[index];
      const outputPath = path.join(artifactsDir, `forward-carousel-${slide.id.toLowerCase()}-1080x1350.png`);
      await page.evaluate((slideId) => {
        document.body.classList.add("capture-mode");
        window.scrollTo(0, 0);
        let stage = document.getElementById("capture-stage");
        if (!stage) {
          stage = document.createElement("div");
          stage.id = "capture-stage";
          document.body.appendChild(stage);
        }
        const source = document.querySelector(`.slides-source > .slide[data-slide-id="${slideId}"]`);
        stage.replaceChildren(source.cloneNode(true));
      }, slide.id);
      await page.waitForFunction(() => Array.from(document.querySelectorAll("#capture-stage img")).every(
        (image) => image.complete && image.naturalWidth > 0
      ));
      const captureOptions = {
        animations: "disabled",
        caret: "hide",
        clip: { x: 0, y: 0, width: fixture.canvas.width, height: fixture.canvas.height }
      };
      const firstCapture = await page.screenshot({ ...captureOptions, path: outputPath });
      const repeatedCapture = await page.screenshot(captureOptions);
      verify(`${slide.id} export is byte-stable in a repeated capture`, () => {
        assert.strictEqual(sha256Buffer(repeatedCapture), sha256Buffer(firstCapture));
      });
      const dimensions = pngDimensions(outputPath);
      verify(`${slide.id} export is 1080 by 1350`, () => {
        assert.deepStrictEqual(dimensions, fixture.canvas);
      });
      outputRecords.push({
        role: `${slide.id} full-resolution slide`,
        path: relativeToRepository(outputPath),
        bytes: fs.statSync(outputPath).size,
        sha256: sha256(outputPath),
        dimensions
      });
    }
    await page.evaluate(() => {
      document.getElementById("capture-stage")?.remove();
      document.body.classList.remove("capture-mode");
      window.scrollTo(0, 0);
    });

    const previewPath = path.join(artifactsDir, "forward-carousel-phone-preview.png");
    await page.locator(".preview-surface").screenshot({ path: previewPath, animations: "disabled" });
    const previewDimensions = pngDimensions(previewPath);
    verify("phone preview dimensions match its rendered surface", () => {
      assert.deepStrictEqual(previewDimensions, {
        width: inspection.preview.width,
        height: inspection.preview.height
      });
    });
    outputRecords.push({
      role: "phone-size seven-slide contact sheet",
      path: relativeToRepository(previewPath),
      bytes: fs.statSync(previewPath).size,
      sha256: sha256(previewPath),
      dimensions: previewDimensions,
      slideScale: fixture.previewScale
    });

    const sourceFiles = [
      fixturePath,
      htmlPath,
      rendererPath,
      provenancePath,
      promptsPath,
      readmePath,
      ...fixture.sourceAssets.map(sourceAssetPath)
    ];
    const manifest = {
      schemaVersion: 1,
      fixture: fixture.id,
      verdict: "passed",
      engine: {
        browser: "Microsoft Edge",
        browserVersion,
        playwrightVersion,
        deviceScaleFactor: 1,
        reducedMotion: true
      },
      canvas: fixture.canvas,
      preview: { scale: fixture.previewScale, dimensions: previewDimensions },
      assertions: {
        passed: passedAssertions.length,
        names: passedAssertions
      },
      sources: sourceFiles.map((filePath) => ({
        path: relativeToRepository(filePath),
        bytes: fs.statSync(filePath).size,
        sha256: sha256(filePath)
      })),
      outputs: outputRecords
    };
    fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

    console.log(JSON.stringify({
      verdict: manifest.verdict,
      assertions: manifest.assertions.passed,
      browser: manifest.engine,
      manifest: {
        path: relativeToRepository(manifestPath),
        bytes: fs.statSync(manifestPath).size,
        sha256: sha256(manifestPath)
      },
      outputs: outputRecords
    }, null, 2));
  } finally {
    if (browser) await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
