# Copy and format contracts

## Normalize the brief

Start every production response with an internal brief. Do not burden the user
with questions that can be safely inferred, but do not silently invent fields
that determine whether an ad can launch.

| Field | If missing |
| --- | --- |
| Organic objective | Infer from the requested topic and state the assumption |
| Audience or awareness stage | Choose the broadest defensible stage and state it |
| Paid objective | Mark `[PENDENTE: objetivo de campanha]` |
| Offer or commercial condition | Mark `[PENDENTE: oferta]` |
| Proof | Use mechanism, implementation evidence, or a labeled illustration; never invent a case |
| Destination | Mark `[PENDENTE: URL, formulário, WhatsApp ou direct real]` |
| Organic action or CTA | Omit when unnecessary, or mark an inferred action as `PROPOSTA DE CTA`; do not present it as user-approved |
| Official brand element | Select only when useful; if selected, use the exact file/value and never approximate |
| Art direction | Infer a concept-specific expressive world; do not default automatically to the entire official palette/type bundle |
| Format | Use 1080 × 1350 feed portrait by default |

If any paid launch-critical field is pending, deliver a draft plus an explicit
launch-blocker list. Do not call it publish-ready.

## Evidence categories

Do not use “mechanism” as an evidence bypass. Classify the claim before writing:

| Claim type | Requirement |
| --- | --- |
| Client, performance, commercial, testimonial, or comparative claim | Evidence supplied by the user or an approved internal source, with period, definition, scope, and attribution limit |
| Material technical definition or platform behavior | Current primary authoritative source; cite it in the caption, source note, or production record |
| Operational hypothesis | Mark as hypothesis; describe what data would confirm or reject it |
| Logical explanation derived from cited facts | State the boundary and do not present it as observed client proof |
| Hypothetical teaching example | Label visibly in art and caption; never reuse as proof or paid claim |

If authoritative verification is unavailable, remove the technical assertion,
qualify it as pending, or reframe the piece around a question. Source-profile
restrictions do not prohibit consulting primary technical documentation.

## Copy layers

Build copy in four layers and keep each layer in its job:

1. **Hook:** the tension or consequence that earns attention.
2. **Argument:** enough context to make the hook true rather than theatrical.
3. **Proof:** source, artifact, mechanism, or visibly hypothetical example.
4. **Action:** one next step appropriate to the achieved awareness stage.

Use concrete nouns and verbs. Replace “otimize sua performance” with the actual
event: “ligue o lead recebido no CRM ao anúncio que o gerou.”

## Static post contract

Return all slots below when creating a static post:

```text
ROLE + OBJECTIVE
VISUAL THESIS
DATTA SPINE
- exact authorship mark
- observation/evidence/decision anchor
EXPRESSIVE WORLD
- palette, licensed typography, image/material language, composition
ART COPY
- label, if used
- headline
- support line, if needed
- source/period, if evidence appears
- CTA, only when the objective needs one
COMPOSITION
- image-led, artifact/evidence-led, or deliberately type-led mode
- hierarchy and exact logo asset/placement selected for this piece
- color and type roles
ASSET PLAN
- source route: supplied/already licensed → bounded free-bank search → generated fallback
- source criteria, selection gate, provenance class, and generation brief only if triggered
CAPTION
ALT TEXT
ADAPTATIONS
- only those requested or operationally necessary
QA VERDICT
```

A static insight must contain a specific consequence in the art or caption. Do
not publish an isolated motivational phrase and expect the caption to rescue it.

## Carousel contract

Choose the shortest sequence that completes the argument. Do not pad to ten
slides. Each slide has one dominant job.

### Visual preflight

Return these slots before the slide list:

```text
VISUAL THESIS
- what the audience will see that copy alone cannot show
DATTA SPINE
- exact authorship mark and where it appears
- observation/evidence/decision anchor and where it recurs
EXPRESSIVE WORLD
- concept palette and licensed type
- image, artifact, texture, and material language
- official Datta elements selected, if any
IMAGE PROGRAM
- semantic anchors, provenance, narrative role, and recurrence
SOURCE ROUTE
- supplied/already licensed material available, or none
- bank search criteria and two-round stop rule
- selected direct asset pages, or generation fallback trigger
SILHOUETTE RHYTHM
- macro-composition assigned to each slide
```

### Narrative families

| Family | Useful sequence |
| --- | --- |
| Diagnostic | Tension → symptom → missing context → diagnosis → action |
| Case | Outcome with scope → starting context → intervention → artifacts → metric ladder → attribution limit → next step |
| Method | Problem → principle → ordered stages → quality criteria → decision |
| Comparison | Shared situation → option A → option B → consequence → selection rule |
| Objection | Objection → why it feels true → what it misses → proof/mechanism → fit CTA |

For every slide, provide:

```text
S## — job
Art copy: exact visible text
Mode: image-led | artifact/evidence-led | type-led
Visual: macro-composition and semantic asset
Asset role: what this visual makes understandable
Provenance/status: class + documentary | illustrative | mockup
Continuity: what makes the next swipe necessary
Evidence: source/period or none
```

### Carousel rules

- Cover: one tension, no paragraph, no unsupported superlative.
- For five or more slides, when the user did not explicitly request pure type,
  use at least three semantic anchors on different slides: one image-led scene,
  one artifact/evidence-led moment, and one contextual recurrence or
  transformation. Reusing a meaningful crop or evolving one scene can be
  stronger than generating a different image for every slide.
- When the user explicitly requests pure type, state that predicate and use at
  least three distinct macro-compositions. Font-size changes and background
  alternation alone do not create rhythm.
- A visual asset counts only when removing it would weaken context, evidence, or
  narrative progression. Decorative stock, generic 3D, floating UI, and a
  dashboard-looking card do not satisfy the image program.
- When external images are needed, define the semantic role first and use
  [Asset sourcing](asset-sourcing.md). Do not generate before the bounded bank
  route unless the user explicitly requests generation/editing or a documented
  pre-search exception proves that stock cannot represent the subject safely or
  truthfully. Continuity alone does not qualify; first test a reusable bank
  asset family.
- If a protagonist, place, object, or situation drives the copy, make it visible
  and evolve it through the sequence.
- Interior: one argument per slide; support copy must remain readable at phone
  size without zoom.
- Data: period and source live on the same slide as the claim.
- Sequence numbers: use mono labels only when order matters; do not make giant
  numbering a default visual motif.
- Final slide: resolve the argument before presenting one approved CTA. If no
  action was approved, omit it or label an optional organic line as
  `PROPOSTA DE CTA`.
- Caption: extend the carousel or document sources; do not merely repeat every
  slide.
- Alt text: summarize the narrative and important visual evidence.

## Organic caption contract

Use this shape when a caption is requested:

1. Opening consequence in one or two sentences.
2. Context or mechanism in short paragraphs.
3. Evidence qualification or source when relevant.
4. One action or concluding question.

No generic hashtag block by default. Add a small, deliberate set only when the
user's distribution strategy calls for it.

## Paid social ad contract

An ad is not an organic post with a button added. Return the following:

```text
CAMPAIGN CONTRACT
- objective
- audience and awareness stage
- offer
- proof
- destination
- message match after click
- launch blockers

CREATIVE
- format and safe area
- art copy
- visual thesis, Datta spine, and expressive world
- composition, image program, and asset provenance
- exact logo or official element use when selected

AD COPY
- primary text
- headline
- description, if useful
- platform CTA

VARIANTS
- problem-led
- mechanism-led
- proof-led, only if proof exists

MEASUREMENT
- primary decision metric
- diagnostic metrics
- attribution caveat

QA VERDICT
```

Use one promise and one action per variant. “Fale conosco” requires a real
contact destination. “Saiba mais” requires a page whose first screen continues
the same claim and offer.

### Claims and urgency

- A performance percentage requires the underlying case, baseline, period,
  metric definition, and attribution scope.
- “Melhor”, “número 1”, “garantido”, or equivalent superiority needs verifiable
  substantiation and is usually unnecessary.
- Urgency comes from a real deadline, capacity, price condition, or operational
  cost. Missing urgency is not permission to fabricate scarcity.
- A generated or hypothetical number never becomes paid-ad proof.

## Review contract

Lead with the verdict:

- `APROVADO`: all applicable gates pass.
- `APROVADO PARA RASCUNHO`: direction is usable; named launch fields remain.
- `REPROVADO`: brand, evidence, rights, readability, or funnel gate fails.

Then list only material failures with exact corrections. Do not praise a piece
before identifying a launch blocker.
