const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const assert = require("assert");
const { pathToFileURL } = require("url");
const { chromium } = require("playwright");

const productionDir = __dirname;
const repositoryRoot = path.resolve(productionDir, "..", "..");
const htmlPath = path.join(productionDir, "forward-static.html");
const fixturePath = path.join(productionDir, "forward-static.fixture.json");
const fixture = JSON.parse(fs.readFileSync(fixturePath, "utf8"));
const artifactsDir = path.join(repositoryRoot, "tests", "artifacts");
const fullPath = path.join(artifactsDir, "forward-static-1080x1350.png");
const phonePath = path.join(artifactsDir, "forward-static-phone-432x540.png");

function sha256(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

(async () => {
  fs.mkdirSync(artifactsDir, { recursive: true });
  const browser = await chromium.launch({ channel: "msedge", headless: true });
  const url = pathToFileURL(htmlPath).href;

  const fullPage = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
  await fullPage.goto(url, { waitUntil: "load" });
  await fullPage.evaluate(() => document.fonts.ready);
  const metrics = await fullPage.evaluate(() => {
    const rect = (selector) => {
      const box = document.querySelector(selector).getBoundingClientRect();
      return { left: box.left, top: box.top, right: box.right, bottom: box.bottom, width: box.width, height: box.height };
    };
    return {
      art: rect(".art"),
      label: rect(".label"),
      headline: rect("h1"),
      support: rect(".support"),
      signal: rect(".signal"),
      mark: rect(".mark"),
      fixtureNote: rect(".fixture-note"),
      fonts: {
        clash: document.fonts.check('700 96px "Clash Display"'),
        general: document.fonts.check('500 36px "General Sans"')
      },
      colors: {
        ground: getComputedStyle(document.querySelector(".art")).backgroundColor,
        copy: getComputedStyle(document.querySelector("h1")).color,
        brass: getComputedStyle(document.querySelector(".rule")).backgroundColor
      }
    };
  });
  const content = await fullPage.evaluate(() => {
    const normalize = (value) => value.replace(/\s+/g, " ").trim();
    return {
      label: normalize(document.querySelector(".label").innerText),
      headline: normalize(document.querySelector("h1").innerText),
      support: normalize(document.querySelector(".support").innerText),
      nodes: Array.from(document.querySelectorAll(".node-label"), (node) => normalize(node.innerText)),
      fixtureNote: normalize(document.querySelector(".fixture-note").innerText),
      interactiveElements: document.querySelectorAll("a, button, [role=button]").length
    };
  });
  assert.deepStrictEqual(content, { ...fixture.copy, interactiveElements: 0 });
  assert.strictEqual(fixture.cta, null, "Fixture unexpectedly contains a CTA");
  assert.deepStrictEqual([metrics.art.width, metrics.art.height], [fixture.canvas.width, fixture.canvas.height]);
  assert.strictEqual(metrics.headline.bottom < metrics.support.top, true, "Headline overlaps support copy");
  assert.deepStrictEqual([metrics.mark.width, metrics.mark.height], [64, 64]);
  assert.strictEqual(metrics.label.left >= 80 && metrics.label.top >= 96, true, "Top label leaves the safe area");
  assert.strictEqual(metrics.mark.left >= 80 && metrics.mark.bottom <= 1254, true, "Mark leaves the safe area");
  assert.strictEqual(metrics.fixtureNote.right <= 1000 && metrics.fixtureNote.bottom <= 1254, true, "Fixture note leaves the safe area");
  assert.strictEqual(metrics.fonts.clash && metrics.fonts.general, true, "Brand fonts did not load");
  assert.deepStrictEqual(metrics.colors, {
    ground: "rgb(9, 17, 5)",
    copy: "rgb(241, 241, 241)",
    brass: "rgb(200, 156, 79)"
  });
  await fullPage.locator(".art").screenshot({ path: fullPath });

  const phonePage = await browser.newPage({
    viewport: {
      width: fixture.canvas.width * fixture.phonePreviewScale,
      height: fixture.canvas.height * fixture.phonePreviewScale
    }
  });
  await phonePage.goto(url, { waitUntil: "load" });
  await phonePage.evaluate(() => document.fonts.ready);
  await phonePage.screenshot({ path: phonePath });

  await browser.close();
  console.log(JSON.stringify({
    fixture: { id: fixture.id, path: fixturePath, sha256: sha256(fixturePath) },
    content,
    metrics,
    full: { path: fullPath, sha256: sha256(fullPath) },
    phone: { path: phonePath, sha256: sha256(phonePath) }
  }, null, 2));
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
