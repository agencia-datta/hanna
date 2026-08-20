# Art direction and image system

## Datta visual thesis

Datta makes invisible decision infrastructure visible. The visual system should
feel like a precise observation surface, not a dashboard skin and not a luxury
brand. Use calm fields, disciplined hierarchy, real artifacts, and sparse
measurement marks.

## Composition modes

Choose one dominant mode per piece.

### Image-led

Use when a scene, person, place, or object carries meaning the copy cannot.

- Crop for one semantic focal point and one clean text-safe zone.
- Apply controlled color balance or a deep-green overlay only when readability
  needs it; do not erase documentary meaning.
- Add at most one evidence label or signal device.
- Use a real photo, licensed source, client asset, or generated original.

### Evidence-led

Use when the proof is the visual anchor.

- Lead with one real metric, screenshot, ad, page, event map, or trace.
- Annotate the evidence; do not use a screenshot as an unexplained wallpaper.
- Show source, period, unit, and any attribution boundary.
- Preserve sensitive-data redaction and client permission.

### Type-led

Use when the tension is strong enough without a hero image.

- Use Clash Display in sentence case and General Sans for explanation.
- Build hierarchy through scale, spacing, rule, and alignment — not a condensed
  shout font.
- One brass signal is enough. Keep the rest quiet.
- Abstract geometry remains a supporting device, not a claimed proprietary icon.

## Grid and hierarchy

- Primary feed canvas: 1080 × 1350.
- Base safe area: 80 px sides and 96 px top/bottom.
- Use a 12-column mental grid or a simpler 4-column grid when it improves
  alignment; do not expose a decorative grid by default.
- Keep one dominant block, one explanatory block, and optional source microcopy.
- Maintain phone-size readability. If support text needs zooming, shorten or
  split it rather than shrinking the type.
- Put the approved symbol near the bottom-left safe area on ordinary pieces.

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

Do not use all devices in every piece. Recognition comes from a consistent
logic of evidence, not decorative accumulation.

## Image routes and provenance

Every visual asset receives one class in the production output.

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

### Provenance manifest

Return this with image-based production:

```text
Asset: [role in piece]
Class: [owned | client-supplied | licensed | generated | editorial-reference]
Source: [file, provider + asset ID, or generation tool]
Rights: [permission/license status]
Edits: [crop, grade, composite, retouch]
Evidence status: [documentary | illustrative | mockup]
```

A mockup demonstrates a design in context. It does not prove that media ran,
that a placement existed, or that a result occurred.

## Generated-image brief

Generate the image without copy or brand marks, then apply exact typography and
logo in layout. Define:

```text
Purpose: what argument the image must support
Subject: concrete person/object/scene, without celebrity likeness
Environment: place, era, materials, operational details
Composition: focal point, camera height, crop, text-safe zone
Light: direction, quality, time of day, contrast
Color: neutral base with optional deep-green relationship; brass only if natural
Surface: clean documentary detail or subtle sensor noise, never torn-paper grunge
Format: aspect ratio and minimum resolution
Negative constraints: text, logos, watermarks, fake UI, extra objects, visual cliches
Provenance record: tool, prompt, generation date, edits
```

Avoid prompts made only of taste adjectives such as “premium”, “sophisticated”,
or “impactful”. Describe observable camera, material, composition, and lighting
decisions.

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
- correct tokens and brass proportion;
- hierarchy readable in two seconds;
- no accidental crop of source labels or CTA;
- no generated text, malformed UI, fake metric, or unintended trademark;
- visual evidence labeled as documentary, illustrative, or mockup;
- square/story adaptation does not lose the argument.
