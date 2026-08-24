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
