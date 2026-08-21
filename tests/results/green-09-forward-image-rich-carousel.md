# GREEN 09 — finished image-rich carousel production

Evaluation: **pass**.

## Scenario

> Produza e exporte o carrossel final de sete slides definido em
> `tests/production/forward-carousel/forward-carousel.fixture.json`. Use os
> ativos e a proveniência preservados nessa pasta, mantenha as três âncoras
> semânticas em lâminas diferentes e inspecione cada canvas 1080 × 1350 e a
> prévia de celular. Não abra o Instagram.

## Preserved production

- [Source and renderer](../production/forward-carousel/README.md)
- [Exact ImageGen prompts](../production/forward-carousel/generation-prompts.md)
- [Asset provenance](../production/forward-carousel/provenance.json)
- [Seven-slide phone preview](../artifacts/forward-carousel/forward-carousel-phone-preview.png)
- [Render manifest](../artifacts/forward-carousel/forward-carousel-manifest.json)

The selected project assets are two generated, visually inspected bookend
images. The opening scene shows a blank cobalt ticket beside an unanswered
phone and empty staff chair; the resolved edit returns to the same reception
with a plausible hand receiving that ticket. Their exact prompts, raw hashes,
JPEG conversion, project hashes, illustrative status, and edit relationship are
preserved.

S03, S04, and S06 are owned layout artifacts. S04 replaced two rejected image
attempts: independent visual QA found inconsistent ticket geometry and
ambiguous acrylic mechanisms, so neither rejected bitmap is preserved or
referenced. The final stopped-ticket macro is deterministic HTML/CSS with two
symmetric side notches, one transparent clamp, and a deliberately illegible
clock cue.

## Automated evidence

Microsoft Edge `151.0.4129.93` with Playwright `1.62.1` passed 38 assertions:

- seven source slides and seven exports at exactly 1080 × 1350;
- exact visible-copy, mode, composition, anchor, and asset parity with fixture;
- safe areas, region overflow, image loading, alt attributes, and font use;
- exact Datta symbol on S01 and exact mono lockup on S07, each used once;
- image-led S01, artifact/evidence-led S03, and contextual-transformation S07
  on three different slides;
- seven unique composition IDs;
- concept palette outside the official Datta colors and four available
  nonofficial system-font roles;
- no interactive CTA or control;
- byte-stable repeated capture for every slide, including a run concurrent with
  the separate static renderer;
- complete source, output, and SHA-256 manifest.

## Output hashes

| Output | SHA-256 |
| --- | --- |
| S01 | `0e49f3107aae40be19af797836d08998b58d0ab3772bb00e6efd4f6f612f31cf` |
| S02 | `64cb4d7da9c482d24cf12ba1f46b026836f490e55ff34c88c6f2e0fb06fd8ba6` |
| S03 | `c5473567d4777e128d2b4d63137aaf0415575e7b2a3edb91386a6900da412021` |
| S04 | `b03f9a817266bbb930d0fcc6635ba4267f1db5c75372db8264518513177a1cd3` |
| S05 | `1a2b0533f5b2414060ac9458fd7f61c4216c437ef38605add56a583bb5a4d42b` |
| S06 | `4346c9106f2cf277f90c0efd2c32ac67b1a6fdf52181949ce5d6e67cbf288007` |
| S07 | `0a808f0eb11906d4c19dc59d03199c62bfcb927fc667792112e7b4e9cd79604e` |
| Phone preview | `b26ee463d9e460e09dfaffc964653b0ecec47aa8a7ea49fb4d732a1ded1479ef` |

## Visual verdict

The full canvases and the 40% seven-slide contact sheet were inspected. The
cobalt ticket changes function across photographic scenes, a handoff sheet, a
stopped-object macro, a contact strip, a route, and the resolved return. The
sequence cannot be reduced to the old eyebrow/headline/card/footer template,
and removing the opening or closing images destroys the handoff narrative.
Independent visual QA passed every requested criterion. Its only non-blocking
caution is to preserve the current size of the tertiary red notes on S03/S04
and the S06 footer in future adaptations.

`PASS — FINAL REGRESSION ARTIFACT`

This is a test fixture, not a client case or publication-rights record.
