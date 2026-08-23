# Datta identity source and integrity reference

Use this file to identify official Agencia Datta assets and values when a piece
selects them. It is a library and integrity reference, not a mandatory visual
skin for every social post. Assets in `assets/datta/` are exact copies of the
approved brandbook files and take precedence over inferred geometry or legacy
profile graphics.

## Positioning

**Promise:** Dados que viram decisão. Decisão que vira resultado.

**Antagonist:** achismo — operar no escuro, no chute, com dado quebrado ou
métricas de vaidade.

**Brand behavior:** technical, contained, precise, and operational. Brass means
signal or focus; it must not make the brand look like generic luxury.

## Identity model: spine plus expressive world

Every Datta visual piece declares both layers before layout:

```text
DATTA SPINE
- exact authorship mark and where it appears
- observation/evidence/decision device and where it recurs
- behavioral anchor in the copy or claim handling

EXPRESSIVE WORLD
- concept-specific palette
- licensed typography
- image, artifact, texture, and material language
- macro-compositions and transitions
- official Datta elements selected, if any
```

The spine makes the source recognizable. The expressive world makes the piece
specific. Use the exact symbol or lockup at least once in visual artwork, then
let observation labels, evidence handling, a measured endpoint, or another
functional device provide continuity at selected moments. Do not stamp the
same header, footer, logo position, palette, or device onto every slide.

Hard invariants are evidence integrity, rights, legibility, exactness of any
official element selected, and the logo's original geometry. Palette, type,
crop, texture, illustration, photography, and grid remain concept decisions.

## Voice

Default to Brazilian Portuguese unless the user requests another language.
Keep established technical terms such as tracking, CRM, CAPI, dashboard, and
lead when they are clearer than forced translations.

| Use | Avoid |
| --- | --- |
| Short affirmative sentences | Exclamation marks and hype |
| Concrete consequence, period, and source | Empty superlatives or guarantees |
| `você` and `sua operação` | Regional imitation such as `tu` |
| Name GTM, CAPI, CRM, Meta, then explain the effect | Jargon used as status |
| Contrast such as `X, não Y` when it is true | False dichotomies and clickbait |
| Numbers with context and limitations | Unsupported percentages |

Institutional copy uses no emoji by default. Titles normally end with a period.
A question is allowed only when the piece genuinely answers it.

Preferred CTA language starts from the reader's desired action:

- Quero contratar a Datta.
- Quero um dashboard.
- Quero melhorar meu rastreamento.
- Falar com o time.

When the objective needs a CTA, use one approved action. Mark inferred organic
wording as `PROPOSTA DE CTA`. Confirm the real destination before declaring any
external or commercial CTA ready to publish.

## Official color options

| Role | Token | Use |
| --- | --- | --- |
| Deep ground | `#091105` | Primary dark field |
| Brand surface | `#00392F` | Cards and bands; not low-contrast dark text |
| Brass signal | `#C89C4F` | One focus, line, CTA, or measured detail |
| Official off-white | `#F1F1F1` | Light field and text on dark |
| Black | `#000000` | Controlled contrast |
| Accessible brass on light | `#7D5F28` | Brass text or fine detail on `#F1F1F1` |

These values are exact whenever the official palette is selected. In that mode,
keep brass below 5% of the canvas and do not place `#00392F` text on `#091105`.
The official palette does not prohibit other concept-led colors, gradients, or
image-derived palettes. Record non-official colors as part of the expressive
world rather than presenting them as Datta tokens.

Status colors are semantic, not decorative:

- Success `#3FB27F`
- Warning `#E8833C`
- Error `#E0574B`

For a deliberately brand-heavy institutional piece, the dark system is a safe
option and the approved light field is `#F1F1F1`. It is not the automatic
starting point for ordinary editorial posts, carousels, or ads.

## Official typography options

| Role | Family | Weights | Behavior |
| --- | --- | --- | --- |
| Display | Clash Display | 500, 600, 700 | Tight tracking, compact lines, sentence case by default |
| Body | General Sans | 400, 500, 600 | Direct explanatory copy and CTA |
| Data label | System mono | regular/medium | Sources, periods, IDs, sequence labels |

Clash Display and General Sans are safe official choices, not mandatory social
defaults. A piece may use another licensed family or pairing when its concept
benefits, provided the production record names the family, source/license, and
role. Anton is not an official Datta font; if any non-official family is used,
do not describe it as official. Avoid choosing a condensed shout font merely
to imitate a source profile.

Starting ranges for 1080 px-wide work when the official pairing is selected:

- Cover/display: 72–104 px
- Interior title: 52–68 px
- Support/body: 27–36 px
- Source/label: 18–22 px
- Display line height: 0.96–1.08
- Body line height: 1.35–1.55

Adjust optically for the actual words; readable hierarchy is the invariant.

## Logo assets and placement

| Asset | Path | Use |
| --- | --- | --- |
| Symbol | `assets/datta/datta-simbolo.svg` | Small authorship mark on ordinary slides |
| Standard lockup | `assets/datta/datta-lockup.svg` | Approved dark/light contexts where its brass dot remains legible |
| Mono lockup | `assets/datta/datta-lockup-mono.svg` | Single-color contexts and brass backgrounds |
| Raster variants | `assets/datta/*.png` | Tools that cannot preserve inline SVG color behavior |
| Fixed-color app icons | `assets/datta/datta-favicon-32.png`, `assets/datta/datta-favicon-512.png` | Skill and app chrome on light or dark interfaces |

The symbol is a single closed path with intentional negative spaces. Never
rebuild, clean, stretch, rotate, stack, outline, mask, filter, or complete its
gaps. Preserve approximately 12% of its width as clear space. Minimum digital
sizes are 24 px for the symbol and 120 px for the lockup.

Those are technical minimums, not social defaults. On a 1080 px-wide feed
canvas, 64 px for the symbol and 200 px for the lockup are safe reference sizes
for a conventional official-mark treatment. Choose another size when optical
inspection supports it and record that decision; neither reference size dictates
placement or repetition. Use an exact mark at least once per visual piece.
Place it where authorship is legible and subordinate to the idea; a carousel
does not need a symbol on every slide.
Never use the logo as texture, diagram, frame, crop mask, or illustration.

An SVG loaded as an external `<img>` may not inherit CSS `currentColor`. Use an
approved raster variant or inline the exact SVG literally; never recreate its
path to solve color inheritance.

## Social canvas

| Format | Canvas | Safe area |
| --- | --- | --- |
| Feed portrait | 1080 × 1440 | 80 px sides, 96 px top/bottom |
| Legacy portrait | 1080 × 1350 | 80 px sides, 96 px top/bottom |
| Square | 1080 × 1080 | 80 px all sides |
| Story/Reels adaptation | 1080 × 1920 | 120 px top, 240 px bottom, 80 px sides |

Portrait `3:4` at 1080 × 1440 is the primary feed format unless the user
requests another. It matches the profile grid's own ratio, so a piece authored
at 3:4 appears in the grid without being cropped.

`4:5` at 1080 × 1350 remains valid for older material and for accounts that
standardised on it, but it is no longer the default. A 4:5 piece placed in a
3:4 grid cell is cropped; keep its essential copy inside the crop-safe region
when that happens.

Confirm both the current feed ratio and the grid ratio against Meta's own
documentation before quoting either to a client or using it to sign off a
launch. These figures change.

## Visual language that belongs to Datta

Use these as optional functional anchors, never as mandatory decoration:

- A thin signal line with sparse nodes and one marked endpoint.
- A 1 px brass rule separating argument from evidence.
- Mono observation labels such as `FONTE`, `PERÍODO`, `SINAL`, `DECISÃO`.
- Measurement brackets, source notes, and quiet coordinate marks.
- Evidence panels with actual screenshots, numbers, or artifacts.

Do not reduce every post to green background + gold word, or to Clash Display +
the same signal line. Recognition should come from the declared Datta spine and
evidence behavior across varied colors, type, imagery, and compositions.
