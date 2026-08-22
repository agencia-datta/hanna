# Quality gates

Run every applicable gate before presenting a final Datta deliverable. A failed
rights, evidence, brand-asset, readability, or paid-launch gate cannot be
balanced out by attractive design.

## Gate matrix

| Gate | Pass condition | Failure response |
| --- | --- | --- |
| Strategy | One objective, audience/stage, message, and action agree | Reframe the brief |
| Concept | Three territories differing in kind were written, scored, and one selected; kill tests pass | Diverge again; do not proceed on the first idea |
| Copy | Hook is proven by the body; voice is Datta; one idea dominates | Rewrite, do not add decoration |
| Evidence | Client/performance claims use supplied evidence; material technical facts use a primary source; hypotheses and illustrations are labeled | Remove, qualify, source, or request proof |
| Rights | Every image has provenance; paid-use permission is clear | Replace the asset |
| Sourcing | External images follow the source route; bank search is concept-specific, quality-gated, and bounded before generation | Search, reject, generate, or reconcept according to the failed criterion |
| Brand | Datta spine declares exact authorship plus observation/evidence/decision behavior; any official element selected uses its exact file/value | Restore recognition or correct the selected official element |
| Originality | Source-similarity cluster stays below three traits and no wording/layout is copied | Redesign the cluster |
| Distinctiveness | Visual thesis is topic-specific; assets are semantic; niche-swap requires recomposition; sequence has real silhouette rhythm | Re-concept, do not add decoration |
| Visual | Phone-readable hierarchy, required image program, safe areas, adequate contrast, and inspected assets | Produce, recompose, or shorten |
| Craft | The eight-point craft floor holds: dominant element, authored type, named colour roles, measured contrast, intentional edges, nothing unmissed | Fix the execution; a good idea badly set still fails |
| Attention | Cover legible at thumbnail and in the 1:1 crop; slide 2 pays the cover; caption's first line earns the expand | Recompose the cover or re-sequence |
| Preflight | `scripts/render.cjs` reports zero `FALHA`; every `INSPEÇÃO` item confirmed by eye | Correct the layout and re-render |
| Funnel | CTA and destination match the reached awareness stage | Change the action or mark pending |
| Accessibility | Alt text, legibility, contrast, and non-color meaning pass | Fix before approval |
| Production | Requested files/specs, dimensions, adaptations, and inspection are complete | Finish the artifact |

## Craft audit

Answer for every finished piece. Taste words are not answers.

```text
Dominant element and why it wins:
Display-to-body size ratio:                    (target 2.5x or more)
Display tracking:                              (target -0.03em to -0.045em above 72px)
Authored line breaks:                          yes | browser decided
Widows on display copy:                        none | fix required
Colour roles named (ground/ink/support/accent):
Accent share of canvas:
Measured contrast, worst text on the piece:    (target 4.5:1 body, 3:1 large)
Scrim treatment under text on image:           directional and measured | none
Macro-compositions used, from the vocabulary:
Thumbnail read at ~12%:
1:1 centre-crop survival:
Preflight verdict and cleared findings:
```

Fail the gate on any of: default tracking on display copy, a widow on the cover,
unnamed colour roles, two competing accents, unmeasured text over photography,
an element within 20 px of the safe-area edge without being fully bled, or a
piece approved without looking at the export.

## Evidence audit

For each number or factual claim, answer:

```text
Claim:
Source:
Period:
Definition/unit:
Scope:
Attribution limit:
Allowed use: [case | education | organic | paid]
```

If an answer is unknown, the claim is not ready. A hypothetical teaching
scenario must say `EXEMPLO HIPOTÉTICO` on the same canvas as the numbers and in
the caption. It cannot become a testimonial, case, guarantee, or paid proof.

For a material technical definition or statement about a platform, record the
primary documentation URL and its access date. “Mechanism” describes the role
of a claim; it does not waive sourcing. Operational hypotheses remain labeled
until account or client data confirms them.

## Similarity audit

Check copy shell, layout structure, typography roles, color relationship, image
role, texture, micro-branding, and CTA pattern. Count traits by source cluster as
defined in [Art direction and images](art-direction-and-images.md).

- `0–2`: continue if no individual element is copied.
- `3+`: redesign before showing the concept as final.
- Exact or near-exact wording, layout, or image: fail regardless of count.

Do not rationalize that changed colors make a copied system original.

## Distinctiveness and image-program audit

For every static or carousel, answer:

```text
Visual thesis:
Datta spine:
Expressive world:
What becomes weaker if each image/artifact is removed:
Niche-swap result:
Macro-compositions in the preview:
```

For a carousel with five or more slides, when the user did not explicitly
request pure type, identify on different slides:

1. one image-led scene/person/place/object;
2. one artifact/evidence-led moment; and
3. one contextual recurrence or transformation.

Fail the gate if any slot is decorative, unproduced in a deliverable described
as final, or interchangeable across unrelated industries. A fake search box,
generic dashboard card, or row of rectangles may support an explanation, but it
does not count as evidence or as the image-led anchor.

For an explicitly pure-type carousel, record that request and identify at least
three distinct macro-compositions. Background alternation alone does not count.

## Asset-sourcing audit

For every external image family, record:

```text
Visual role and source criteria:
Materials supplied/already licensed checked:
Round 1 providers + queries + candidates:
Round 2 refinement, or not needed:
Selected asset and five-gate result, or NO QUALIFYING STOCK:
Generation trigger, or not used:
Direct source/license/provenance record:
```

Pass only when the selected bank asset clears semantic necessity, composition,
technical quality, distinctiveness/continuity, and rights. Rights are a hard
gate. Search no more than two appropriate providers and two targeted rounds;
finding a full pass ends the search. Reaching the limit without a pass triggers
generation or reconception, not weak stock.

## Launch blockers

The following keep a paid piece at `APROVADO PARA RASCUNHO` or `REPROVADO`:

- missing campaign objective;
- missing offer or commercial condition;
- missing proof for a proof-led claim;
- missing landing/contact destination;
- message after the click does not continue the creative promise;
- unknown image license or client permission;
- fabricated scarcity, superiority, result, or attribution;
- no measurement decision metric.

Organic work can proceed with a stated assumption when that assumption does not
create a false factual claim or external action.

## Rationalizations observed in baseline tests

| Rationalization | Reality |
| --- | --- |
| “I used only general impact principles.” | A recognizable cluster can be derivative even when no single asset is copied. Run the trait count. |
| “The brief lacked an offer, so I chose a broad lead-generation approach.” | Missing paid strategy is a blocker, not authorization to invent campaign intent. |
| “The symbol is now a proprietary brand element.” | A generic shape becomes proprietary only through an approved maintained system, not one concept. |
| “The art is premium and clean.” | Taste labels do not define grid, hierarchy, source, rights, or production. |
| “The mockup shows what ran.” | A mockup shows a proposed context, not media placement or result. |
| “The number is plausible.” | Plausibility is not evidence. Label it hypothetical or remove it. |
| “Using all brand tokens makes it recognizably Datta.” | Recognition comes from the declared spine. Applying the complete official kit by default creates a template, not a concept. |
| “The diagram makes the carousel visual.” | Cards and lines can explain, but they do not replace a semantic image, artifact, or contextual transformation. |
| “The first idea was already strong, so divergence was unnecessary.” | The first idea is the category's idea. Write three territories and score them; that is the step, not a formality. |
| “The design is a matter of taste, so craft rules are optional.” | Tracking, contrast, hierarchy, and edge discipline are measurable. Taste begins after the floor is met. |
| “It looks fine in the layout view.” | Approval requires the exported canvas, a phone-scale preview, and a thumbnail check. Preflight is the floor, not the verdict. |
| “Generation gives me more control, so I can skip stock search.” | Control and continuity are not pre-search exceptions. First test one bank asset family with crops/composites; skip only for explicit generation/editing or a documented safe/truthful-representation exception. |
| “I should keep searching because a better stock image may exist.” | Two targeted rounds are the stopping condition. Select a full pass or move to generation/reconception. |

## Red flags — stop and correct

- An official color, font, size, or asset approximated or mislabeled as exact.
- Official green, off-white, brass, Clash Display, and General Sans applied
  together by default without a concept-specific reason.
- The same eyebrow/headline/card/footer silhouette repeated through a carousel.
- A five-plus-slide carousel with no image-led anchor, no artifact/evidence-led
  anchor, or no contextual recurrence/transformation, unless pure type was
  explicitly requested.
- A generated or stock image that can be removed without weakening the argument.
- Condensed uppercase used because the references look impactful.
- Three or more traits from a source-signature cluster.
- A CTA or destination added without a real route.
- A public image treated as free because it is easy to download.
- Generation used as the first external-image route without an explicit user
  request or documented safe/truthful-representation exception.
- A bank candidate selected from a search-results or CDN URL without its direct
  asset page, current official license, creator, access date, and depicted-rights check.
- More than two providers or two search rounds used without a new user request.
- A mockup, generated dashboard, or illustrative number presented as proof.
- “Ready to publish” while a launch-critical field is `[PENDENTE]`.
- A single concept taken to layout with no divergence step recorded.
- Display type at browser-default tracking, or line breaks left to the box.
- Text over a photograph approved without a measured contrast or a scrim.
- A cover that is unreadable at thumbnail size or dies in the 1:1 grid crop.
- A Meta safe area, character limit, or policy stated from memory as fact.
- A piece called final without a cleared preflight and an inspected export.
- Browsing BrandsDecoded or Medre without an explicit refresh request.
- Any Instagram like, comment, save, share, follow, or message during research.

## Delivery verdict

End production or review with one verdict and the evidence for it:

- `APROVADO`: every applicable gate passes.
- `APROVADO PARA RASCUNHO`: creative direction passes; named launch fields are
  pending and no publish-ready claim is made.
- `REPROVADO`: list failed gates and exact corrections.
