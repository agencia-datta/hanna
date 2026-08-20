# GREEN 06 — forward production

Evaluation: **pass**

This test validates assembly and inspection, which scenarios 1–5 intentionally
did not prove. It uses approved fixture copy, no CTA, no client metric, no case,
no external technical assertion, and only owned Datta assets.

## Preserved outputs

- Approved test fixture: [forward-static.fixture.json](../production/forward-static.fixture.json)
- Source: [forward-static.html](../production/forward-static.html)
- Reproducible renderer: [render-forward-static.cjs](../production/render-forward-static.cjs)
- Locked dependency manifest: [package.json](../production/package.json) and [package-lock.json](../production/package-lock.json)
- Reproduction instructions: [README.md](../production/README.md)
- Full canvas: [forward-static-1080x1350.png](../artifacts/forward-static-1080x1350.png)
- Phone preview at 40%: [forward-static-phone-432x540.png](../artifacts/forward-static-phone-432x540.png)

## Assets and provenance

| Asset | Class | Source | Use |
| --- | --- | --- | --- |
| Datta symbol | Owned | `assets/datta/datta-simbolo-branco.png` | Exact 64 px authorship mark at bottom-left |
| Clash Display 700 | Owned/licensed brand asset | `assets/datta/fonts/clash-display-700.woff2` | Headline |
| General Sans 500 | Owned/licensed brand asset | `assets/datta/fonts/general-sans-500.woff2` | Support copy |
| Signal line and nodes | Owned | Native HTML/CSS geometry | Conceptual relationship, explicitly labeled as non-client data |

No downloaded profile media, stock, public figure, generated UI, client data,
or third-party logo appears.

## SHA-256 manifest

```text
forward-static.fixture.json
db296a4e22b877ace1913e722ee4a99a9ec491fede96af03875aa656fa4932eb

forward-static.html
c124fb6fa4651c7fdf2a4fbf93d170df809d1a039abcaae9d5bbf60dfc234d18

render-forward-static.cjs
cc9645a1dae05254389b8a81fb636d9bf40ef9b6dbf2d98110308edc52c14c1b

package.json
ac22e627306e78ccf4ee0413dfb770c4071d8faf393587bcdac632f817772da4

package-lock.json
2b3c74abd41f3a8db2c311ab4fd39e18596096f68c0ca800680987ee5e569751

forward-static-1080x1350.png
68570c79161dc9ac70fdf2183ed67ff591a9f4af8f6fb20669e26a6377f1c6ac

forward-static-phone-432x540.png
6e058db77206141d2e54c0cbff285180c5580d18d093c33fed1a730fa07daac8

datta-simbolo-branco.png
6b650ada3f19f4f2b2519c2f9a7f58c971218d8d08513fb464b8289931a1760b

clash-display-700.woff2
532795f825c5a28b807c0323e27939c638e6289d5870c05b962b6c0916407476

general-sans-500.woff2
c30377df1de8444d07161725c751f458beec07c28034df2fd275d1aa587a239f
```

The checkout was reproduced with `npm.cmd ci --ignore-scripts` followed by
`npm.cmd run render`, using locked Playwright `1.62.1` and installed Microsoft
Edge. The output hashes remained identical. The renderer reads and asserts the
versioned fixture, including the absence of CTA, then asserts dimensions, font
loading, safe-area bounds, logo size, exact core colors, and absence of
headline/support overlap before writing the screenshots.

## Visual inspection

| Gate | Result | Observation |
| --- | --- | --- |
| Dimensions | Pass | Full output is 1080 × 1350; preview is 432 × 540 |
| Safe area | Pass | Essential copy, signal, fixture note, and mark remain inside 80 px sides and 96 px top/bottom on the full canvas |
| Typography | Pass | Clash Display and General Sans loaded from repository assets; hierarchy remains readable at 40% |
| Logo | Pass | Exact fixed-color Datta raster, displayed at 64 px with clear space and no transformation beyond proportional scale |
| Color | Pass | `#091105` ground, `#F1F1F1` copy, and sparse `#C89C4F`; no gradient and brass remains below 5% |
| Evidence | Pass | `MODELO CONCEITUAL / SEM DADOS DE CLIENTE` prevents the signal diagram from reading as account evidence |
| Rights | Pass | Only owned brand assets and native layout geometry |
| Similarity | Pass | No source-profile photo, palette cluster, texture, type pairing, hook shell, mockup, or micro-branding |
| Phone preview | Pass | No overlap, clipping, illegible support text, or lost authorship mark after the corrected render |

## Verdict

`APROVADO` for the forward-production fixture. It is test evidence, not a
scheduled social post or a claim that the user approved this exact creative for
publication.
