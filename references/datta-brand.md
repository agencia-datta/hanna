# Datta brand system

Use this file as the canonical production constraint for Agencia Datta social
content. Assets in `assets/datta/` are exact copies of the approved brandbook
files and take precedence over inferred geometry or legacy profile graphics.

## Positioning

**Promise:** Dados que viram decisão. Decisão que vira resultado.

**Antagonist:** achismo — operar no escuro, no chute, com dado quebrado ou
métricas de vaidade.

**Brand behavior:** technical, contained, precise, and operational. Brass means
signal or focus; it must not make the brand look like generic luxury.

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

## Color tokens

| Role | Token | Use |
| --- | --- | --- |
| Deep ground | `#091105` | Primary dark field |
| Brand surface | `#00392F` | Cards and bands; not low-contrast dark text |
| Brass signal | `#C89C4F` | One focus, line, CTA, or measured detail |
| Official off-white | `#F1F1F1` | Light field and text on dark |
| Black | `#000000` | Controlled contrast |
| Accessible brass on light | `#7D5F28` | Brass text or fine detail on `#F1F1F1` |

Target distribution is approximately 70% ground, 20% text/surfaces, 7% green,
and 3% brass. Keep brass below 5% of the canvas. Do not use gradients. Do not
place `#00392F` text on `#091105`; that pairing is too low-contrast.

Status colors are semantic, not decorative:

- Success `#3FB27F`
- Warning `#E8833C`
- Error `#E0574B`

Use the dark system as the default for institutional social posts. The approved
light field is `#F1F1F1`, even if legacy token files contain nearby light grays.

## Typography

| Role | Family | Weights | Behavior |
| --- | --- | --- | --- |
| Display | Clash Display | 500, 600, 700 | Tight tracking, compact lines, sentence case by default |
| Body | General Sans | 400, 500, 600 | Direct explanatory copy and CTA |
| Data label | System mono | regular/medium | Sources, periods, IDs, sequence labels |

Anton is not part of the social system. Do not replace Clash Display with a
condensed shout font. Uppercase is reserved for small mono labels and data tags,
not entire headlines.

Starting ranges for 1080 px-wide work:

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

Those are technical minimums, not social recommendations. On a 1080 px-wide
feed canvas, use the symbol at 64 px and the lockup at 200 px unless optical
inspection documents a justified exception. Do not let minimum-size guidance
silently become the default production size.

Default social placement:

- Ordinary static or carousel slide: 64 px symbol near the bottom-left safe area.
- Final CTA slide: 200 px lockup near the bottom, subordinate to the action.
- Never use the logo as texture, diagram, frame, crop mask, or illustration.

An SVG loaded as an external `<img>` may not inherit CSS `currentColor`. Use an
approved raster variant or inline the exact SVG literally; never recreate its
path to solve color inheritance.

## Social canvas

| Format | Canvas | Safe area |
| --- | --- | --- |
| Feed portrait | 1080 × 1350 | 80 px sides, 96 px top/bottom |
| Square | 1080 × 1080 | 80 px all sides |
| Story/Reels adaptation | 1080 × 1920 | 120 px top, 240 px bottom, 80 px sides |

Portrait `4:5` is the primary feed format unless the user requests another.
Keep essential copy inside a centered 1080 × 1080 crop-safe region when a
square adaptation will be needed.

## Visual language that belongs to Datta

Use these as functional devices, never as mandatory decoration:

- A thin signal line with sparse nodes and one marked endpoint.
- A 1 px brass rule separating argument from evidence.
- Mono observation labels such as `FONTE`, `PERÍODO`, `SINAL`, `DECISÃO`.
- Measurement brackets, source notes, and quiet coordinate marks.
- Evidence panels with actual screenshots, numbers, or artifacts.

Do not reduce every post to green background + gold word. Recognition should
come from disciplined hierarchy, evidence handling, and recurring measurement
details across varied compositions.
