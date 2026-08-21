# RED 07 — image system and flexible brand spine

Evaluation: **fail** on baseline Hanna at commit
`f6ccf6467fe5d0217333d21b296e09bc4ffaf753`, before the image-system and
flexible-spine correction.

## Scenario

> Produza o contrato completo de um carrossel orgânico de sete slides para
> `@agenciadatta` sobre esta tensão: antes de escolher uma clínica, o paciente
> precisa encontrá-la. Quero impacto visual e identidade própria, mas não
> forneci fotos, dados, casos de cliente nem uma direção de arte. Use seu melhor
> julgamento e não abra o Instagram.

## Real production failure

The motivating seven-slide production is preserved as a repository-relative
fixture:

- [contact-sheet preview](../fixtures/red-07-zero-image-carousel/preview.png)
- [technical manifest](../fixtures/red-07-zero-image-carousel/manifest.json)
- [production record](../fixtures/red-07-zero-image-carousel/production-record.md)

The fixture was copied byte-for-byte from the original local output. SHA-256:

- preview: `8e54cd0f1a01df7454c0be9c748b7846030370b5a534e1f19742ad54ca56c338`
- manifest: `281c50328ebbb64b7c663d0e4b05219494e8c2490e3205f157e8a0019d39cda6`
- production record: `8505cdafbbf15c8f7915b93ee6cc9b5d0196af4e53cec9e13c29a7393c487247`

Its production record states verbatim:

> “Diagramas de busca e presença: composição vetorial original; sem interface
> copiada, imagem externa, fotografia ou conteúdo gerado.”

Observable result:

- zero photographic, generated, documentary, environmental, or object-led
  images across seven slides;
- the only `<img>` elements in the preserved HTML are Datta symbols/lockup;
- seven variations of the same silhouette: mono eyebrow, large left-aligned
  headline, cards/lines/fake UI, bottom-left mark, and bottom-right microcopy;
- alternating dark and light grounds provided color rhythm but no change of
  visual function;
- the preview manifest reported no technical violations because it checked
  dimensions and overflow, not image richness, specificity, or repetition.

## Revised control runs

An initial test prompt leaked the desired solution by explicitly requesting
optional brand colors and typography. The current guidance could follow that
direct request, so the test was revised before any skill edit. Five runs then
received only the ordinary scenario above.

| Run | Planned generated images | Owned artifacts | Macro-compositions | Official palette/type |
| --- | ---: | ---: | ---: | --- |
| C4 | 2 | 3 plus one derived montage | 7 | Used as defaults |
| C5 | 4 | 3 | 4 | Used as defaults |
| C6 | 2 | 2 | 6 | Used as defaults |
| C7 | 2 | 3 | 7 | Used as defaults |
| C8 | 4 | 3 | 5 | Used as defaults |

The planning runs were more image-aware than the real production, but their
variance confirms that imagery is optional rather than structural. All five
independently returned to the same official green/off-white/brass system,
Clash Display + General Sans, a 64 px symbol on ordinary slides, and a 200 px
lockup at the end.

## Verbatim baseline wording

- “Paleta e fontes oficiais foram usadas como defaults.”
- “Paleta e fontes oficiais foram adotadas como defaults.”
- “Fundo principal `#091105`.”
- “Clash Display 600/700 nos títulos. General Sans 400/500 nos apoios.”
- “Símbolo exato `assets/datta/datta-simbolo.svg`, 64 px, nos slides 1–6.”

## Root cause demonstrated

1. Hanna asks for one dominant composition mode per piece, so type-led can
   legally govern an entire carousel.
2. The carousel contract has no required visual thesis, image program, brand
   spine, expressive world, or per-slide asset role.
3. Provenance is enforced only after an image exists; zero images pass the
   rights gate vacuously.
4. The only complete example approves a type/evidence-led carousel and states
   “No external or generated image.”
5. The brand gate requires exact tokens and type roles instead of requiring
   exactness only when official elements are selected.

## Guidance form selected

This is an output-shape and omission failure, not a discipline failure.

- Add required structural slots for `VISUAL THESIS`, `DATTA SPINE`,
  `EXPRESSIVE WORLD`, and `IMAGE PROGRAM`.
- Key the image-program requirement to an observable predicate: carousel with
  five or more slides and no explicit request for pure type.
- Define a positive mixed visual rhythm: image-led, artifact/evidence-led, and
  contextual recurrence/transformation on distinct slides.
- Make official color and typography optional choices; require exact files and
  values only when selected.
- Replace the image-free normative example with an expressive mixed example.

No source profile was opened during these controls.
