# Art direction and image system

This reference decides what a piece shows and where its assets come from. The
idea it expresses comes from [Concept generation](concept-generation.md); how
well it is executed is governed by [Visual craft](visual-craft.md). Neither is
optional: an unexecuted good idea and a well-set empty one both fail.

## Visual thesis first

Before choosing color, type, or layout, answer:

> What will the audience see that the copy alone cannot show?

The answer must name a scene, object, artifact, contrast, transformation, or
spatial relationship. “Impact”, “premium”, “clean”, “modern”, and “Datta style”
are not visual theses.

Datta makes invisible decision infrastructure observable. That behavior can
live inside photography, illustration, collage, typography, artifacts, or a
completely new palette. The official brand system is one expressive option, not
a skin to apply over every idea.

## Composition modes

Choose a mode per static or per carousel slide. A carousel may have a coherent
world while moving deliberately between image-led, artifact/evidence-led, and
type-led moments.

### Image-led

Use when a scene, person, place, or object carries meaning the copy cannot.

- Crop for one semantic focal point and one clean text-safe zone.
- Let the scene or concept determine color. Apply an overlay only when it serves
  readability or the idea, never merely to make the asset look branded.
- Add at most one evidence label or signal device.
- Choose the source through [Asset sourcing](asset-sourcing.md). Use supplied or
  already licensed material when it fits, otherwise run the bounded free-bank
  search before generating an original.

### Artifact/evidence-led

Use when a real artifact, qualified evidence, or clearly labeled teaching
artifact is the visual anchor.

- Lead with one real metric, screenshot, ad, page, event map, or trace when it
  exists. Without proof, use an original artifact labeled `illustrative` or
  `mockup`; do not make it look documentary.
- Annotate the evidence; do not use a screenshot as an unexplained wallpaper.
- Show source, period, unit, and any attribution boundary.
- Preserve sensitive-data redaction and client permission.

### Type-led

Use when type itself is the concept, not as the cheapest way to avoid producing
an image.

- Choose a licensed type system that expresses the idea. Clash Display and
  General Sans are safe official options, not mandatory defaults.
- Make rhythm through scale, orientation, crop, density, field, or spatial
  contrast. Changing only the background or one highlighted word is not a new
  macro-composition.
- Abstract geometry remains a supporting device, not a substitute for context
  or a claimed proprietary icon.

## Image program for carousels

For a carousel with five or more slides, use this program when the user did not
explicitly request a pure-type piece:

| Anchor | Required job | Examples |
| --- | --- | --- |
| Image-led | Establish a protagonist, place, object, or concrete situation | documentary scene, generated original, object study, conceptual illustration |
| Artifact/evidence-led | Make a claim inspectable | real screenshot, annotated source, client-cleared artifact, labeled teaching mockup |
| Contextual recurrence/transformation | Create continuity and reveal change | return to the opening scene, progressive crop, object changing function, image becoming a map |

These anchors occur on different slides. They may come from one carefully
planned asset family rather than unrelated images. For each one, state its
narrative role, framing, provenance, and documentary/illustrative/mockup status.
If removing the asset leaves the argument unchanged, it is decoration and does
not count.

## Expressive world

Declare the art system for the piece:

```text
Concept palette: exact values and relationship to the images
Typography: family, source/license, roles, and contrast
Image/material language: photography, illustration, collage, artifacts, texture
Macro-compositions: the distinct silhouettes used across the sequence
Datta spine: exact mark plus observation/evidence/decision behavior
Official elements selected: exact assets/tokens, or none beyond the mark
```

The image may lead to colors outside the brand palette. Typography may change
between pieces or campaign systems. Keep the system coherent within the piece
without turning coherence into seven copies of one template.

## Grid and hierarchy

- Primary feed canvas: 1080 × 1350.
- Base safe area: 80 px sides and 96 px top/bottom.
- Choose a grid that serves the asset and concept: full bleed, split, asymmetric,
  modular, collage, object study, or another deliberate structure.
- Maintain phone-size readability. If support text needs zooming, shorten or
  split it rather than shrinking the type.
- Take type scale, tracking, line breaks, colour roles, contrast targets, scrim
  treatment, and the macro-composition vocabulary from
  [Visual craft](visual-craft.md). Grid choice without craft discipline produces
  a correct layout that still looks amateur.
- Use the exact symbol or lockup at least once, with clear space and legible
  authorship. It need not occupy the same position or appear on every slide.

For a multi-slide preview, identify at least three genuinely different
macro-compositions. Alternating dark/light fields, moving a card, or changing
only type size does not count.

## Recognizable Datta devices

Choose only devices that explain or organize something:

| Device | Function |
| --- | --- |
| Signal line with sparse nodes | Connect stages or show continuity |
| Marked endpoint in brass | Identify the decision or verified outcome |
| Observation label in mono | Name source, period, status, or confidence |
| Measurement bracket | Compare two values or scopes |
| One-pixel brass rule | Separate claim from evidence |
| Evidence card | Hold a real artifact without pretending it is the whole canvas |

Do not use all devices in every piece. Select one observation/evidence/decision
behavior for the Datta spine and let it recur only where it explains something.

## Image routes and provenance

Define the visual role before selecting the source. Follow
[Asset sourcing](asset-sourcing.md): supplied or already licensed material,
then a two-round quality-gated bank search, then generation only when no stock
candidate passes or an explicit source condition requires it. Every visual
asset receives one class in the production output.

| Class | Organic | Paid ad | Required record |
| --- | --- | --- | --- |
| Owned | Yes | Yes | File or shoot source |
| Client-supplied | With permission | With paid-use permission | Client and permission status |
| Licensed stock | Within license | Commercial/advertising license | Provider, asset ID, license |
| Generated | Yes | Yes, subject to platform/law | Tool, prompt, date, edit notes |
| Editorial-reference | Commentary with review | No | Source, author, link, intended context |

Do not download a public figure, film still, news photo, creator image, or brand
campaign and treat availability on the web as permission. Paid work uses owned,
client-cleared, commercially licensed, or generated assets only.

For licensed stock, the required record is the provider's direct asset page,
creator, asset ID or slug, current official license URL and access date,
intended organic/paid use, depicted-rights check, downloaded-file hash, and
edits. A provider license does not automatically clear recognizable people,
logos, artwork, property, private data, or implied endorsement.

### Provenance manifest

Return this with image-based production:

```text
Asset: [role in piece]
Class: [owned | client-supplied | licensed | generated | editorial-reference]
Source: [file; or provider + direct asset page + creator + asset ID; or generation tool]
Rights: [permission/license status]
License URL + access date: [required for licensed stock]
Intended use + depicted-rights check: [organic | paid | both; pass/fail notes]
Edits: [crop, grade, composite, retouch]
Evidence status: [documentary | illustrative | mockup]
```

A mockup demonstrates a design in context. It does not prove that media ran,
that a placement existed, or that a result occurred.

## Generated-image fallback

Use this route after the bounded bank search records `NO QUALIFYING STOCK`.
Bypass search only when the user explicitly requests generated imagery/editing
or a documented pre-search exception proves that stock cannot represent the
subject safely or truthfully. Exact continuity alone is not an exception; test
one bank asset family with crops, composites, or layout transformation first.
Generate without copy or brand marks, then apply exact typography and logo in
layout. Define:

```text
Purpose: what the image makes understandable that copy alone cannot
Subject: concrete person/object/scene, without celebrity likeness
Environment: place, era, materials, operational details
Composition: focal point, camera height, crop, text-safe zone
Light: direction, quality, time of day, contrast
Color: image-led palette and relationship to the rest of the piece
Surface: observable material detail, including controlled imperfection when natural
Format: aspect ratio and minimum resolution
Negative constraints: text, logos, watermarks, fake UI, extra objects, generic stock/AI cliches
Provenance record: tool, prompt, generation date, edits
```

Avoid prompts made only of taste adjectives such as “premium”, “sophisticated”,
or “impactful”. Describe observable camera, material, composition, and lighting
decisions.

Generated assets should feel directed, not generically synthetic. Prefer a
specific location, imperfect material, plausible object placement, motivated
light, and a camera position that carries the argument. Avoid glossy corporate
lifestyle, empty luxury interiors, floating icons, generic 3D, gradient blobs,
excessive symmetry, and devices with already-generated interface text.

## Source-similarity gate

Useful mechanisms may transfer; signature combinations may not.

Redesign if three or more traits from either cluster coexist:

**Cluster A**

- celebrity, film, or creator hero photo;
- very heavy condensed uppercase headline;
- white plus bright orange/red emphasis on a dark photograph;
- tiny “powered by” editorial header;
- hook shell such as “what X teaches about Y” or “the death of X”.

**Cluster B**

- acid lime as a dominant field;
- torn or wrinkled off-white paper on rough black;
- expanded or force-justified uppercase blocks;
- high-contrast italic serif used as the recurring emotional voice;
- provocative copy placed in street-poster, billboard, or transit mockups.

Changing only the colors does not create an original composition. If the
structure, type roles, image role, and copy shell remain recognizable, redesign.

## Final visual inspection

Inspect generated or assembled output at full canvas and phone-size preview.
Check:

- exact logo asset and clear space;
- declared Datta spine is visible without repeating a template;
- expressive palette/type match the concept; official values are exact only
  when selected;
- when the image program applies, its required image, artifact, and recurrence
  anchors are present and semantic; an explicitly pure-type carousel instead
  proves at least three genuinely different macro-compositions;
- at least three macro-compositions are visible in a five-plus-slide preview;
- hierarchy readable in two seconds;
- no accidental crop of source labels or CTA;
- no generated text, malformed UI, fake metric, or unintended trademark;
- visual evidence labeled as documentary, illustrative, or mockup;
- niche-swap test fails: changing the industry would require visual
  recomposition, not just replacing nouns;
- square/story adaptation does not lose the argument; the centred 1:1 crop still
  carries the cover's tension;
- the automated preflight in `scripts/render.cjs` reports zero `FALHA`, and each
  `INSPEÇÃO` item — text over image or gradient — was confirmed by eye.
