# Forward carousel regression

This directory contains a deterministic seven-slide Hanna production fixture
for the clinic lead-handoff scenario. It is a test-only artifact, not a client
case or a publish-rights record.

## Visual contract

- Canvas: 1080 × 1350 for every slide.
- Preview: seven phone-size slides at 40% scale in one contact sheet.
- Nonofficial palette: ink `#171A20`, porcelain `#F3F0E7`, cobalt
  `#2847D7`, coral `#E45D4F`, accessible coral `#B54A3F`, and sage `#B6C9B6`.
  `coral` carries rules, borders, and the ticket; `coral-text` is the text-safe
  variant used for 19 px mono labels on porcelain, which the display coral
  cannot reach at 4.5:1.
- Nonofficial system fonts: Bahnschrift SemiCondensed/Bahnschrift, Segoe UI,
  and Cascadia Mono. The renderer verifies availability in Microsoft Edge.
- Exact Datta assets: the repository symbol appears once on S01 and the mono
  lockup appears once on S07.
- Semantic anchors: image-led S01, artifact/evidence-led S03, and contextual
  transformation S07.
- S04 is an owned HTML/CSS artifact: a cobalt ticket with two symmetric side
  notches stopped under a transparent bar, with a blurred non-legible clock cue.
- `generation-prompts.md` preserves the exact built-in ImageGen prompts, raw
  output hashes, and project conversion record for the two selected images.

The blank cobalt ticket changes function on every slide. The sequence uses
seven separate silhouettes rather than a repeated eyebrow/headline/footer
template.

## Run

Playwright is resolved from `tests/production/node_modules`; the renderer uses
the locally installed stable Microsoft Edge and never downloads a browser.
The launch disables GPU-dependent and subpixel font rendering so byte-level
captures remain stable even when another Edge screenshot job runs concurrently.

From `tests/production`:

```powershell
node .\forward-carousel\render-forward-carousel.cjs
```

## Assertions

The renderer exercises the actual HTML and fails on slide-count or dimension
drift, visible-copy mismatch, missing or unloaded images, unavailable fonts,
safe-area violations, overflow, repeated composition IDs, missing or colocated
semantic anchors, incorrect primary asset placement, altered Datta asset
hashes, an invalid stopped-ticket artifact, or any interactive CTA/control.

## Pending re-render — read before trusting `tests/artifacts/`

The source in this directory was corrected for accessibility after the recorded
run. Three changes were made, all of which move pixels:

| Change | Reason |
| --- | --- |
| `--coral-text: #B54A3F` on the S03/S04 mono labels | `#E45D4F` on porcelain measured 3.08:1, below the 4.5:1 required for 19 px text |
| S06 labels from `--ink` to `--porcelain` | `#171A20` on cobalt measured 2.47:1; porcelain on cobalt measures 6.20:1 |
| `.s07-cta` from 26 px to 27 px | Below the brand's own 27–36 px support-copy floor |

The PNGs and `forward-carousel-manifest.json` under
`tests/artifacts/forward-carousel/` still correspond to the **pre-correction**
source and were deliberately left untouched: they are a signed record of a real
Microsoft Edge run, and this repository forbids substituting a renderer and
comparing hashes as if they were equivalent. Until the run below happens, treat
the artifacts as evidence of the assembly path, not as the current source's
output.

### Runbook

Requires Windows with stable Microsoft Edge installed and the four fixture
fonts present (Bahnschrift, Bahnschrift SemiCondensed, Segoe UI, Cascadia Mono
— all ship with Windows). Node 20+.

```powershell
cd tests\production
npm.cmd ci --ignore-scripts
node .\forward-carousel\render-forward-carousel.cjs
```

`--ignore-scripts` skips Playwright's browser download; the renderer launches
`channel: "msedge"` and never fetches a browser. The run rewrites the seven
PNGs, the phone preview, and `forward-carousel-manifest.json` with fresh
hashes. Commit those outputs and delete this section.

### Static audit of the renderer's assertions against the corrected source

Checked here before handing the run over, so it should pass first time. The
three corrections touch only colour values and one font size.

| Assertion | Effect of the corrections |
| --- | --- |
| `source assets match approved hashes` | Unaffected — `fixture.sourceAssets` covers only the two JPEGs and the two Datta SVGs, none of which changed |
| `slide ids, modes, compositions, anchors, assets, and visible copy match fixture` | Unaffected — no copy, id, mode, composition or anchor changed |
| `concept tokens are exact and do not default to official Datta colors` | Passes: `coral-text` was added to both the CSS and `fixture.tokens`, and `#B54A3F` is not in the official set |
| `all copy remains inside the declared safe area` | `.s07-cta` grows 2.5 px. At `top: 1010px` with `line-height: 1.25`, two lines end near y≈1078 against a 1254 px bottom bound; even a rewrap to three lines ends near y≈1111 |
| `slides and checked regions have no overflow` | Same margin as above; the canvas is 1350 px tall |
| `all four nonofficial system fonts are available in Edge` | Unaffected — no font family changed |
| Remaining 18 assertions | Unaffected — they cover slide count, dimensions, image loading, asset placement, the S04 ticket artifact, anchors, composition uniqueness, interactivity, and the preview surface |

The one thing this audit cannot settle is optical: confirm by eye that
`#B54A3F` reads as intended against porcelain in Bahnschrift/Cascadia Mono, and
that the S06 labels in porcelain on cobalt sit correctly against the vertical
route.

## Generic preflight

`scripts/render.cjs` reads this fixture without modification: it recognises the
`data-slide-id` / `data-composition` annotations already present here, excludes
the JS-cloned contact-sheet previews because they are scaled copies, and treats
monospace text as the brand's label/source/ID role instead of demanding the
27 px body minimum.

It cannot, however, judge geometry on a machine without the fixture's fonts.
Bahnschrift is condensed and its fallback is roughly 31% wider, which wraps
headlines onto extra lines and produces collisions that do not exist in the Edge
render. The preflight detects the fallback and downgrades every collision, safe
area, overflow, and type-size finding to `INSPEÇÃO` for that reason. Only the
font findings and colour-based findings are conclusive off-Windows.

## Outputs

The run writes only under `tests/artifacts/forward-carousel/`:

- seven `forward-carousel-s##-1080x1350.png` files;
- `forward-carousel-phone-preview.png`;
- `forward-carousel-manifest.json`, including SHA256 hashes for source files,
  approved source assets, and every rendered output.
