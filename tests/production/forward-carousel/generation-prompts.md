# Generation prompts

These are the exact built-in ImageGen prompts used for the two selected
project-bound fixture assets. Both outputs are illustrative, contain no client
data, and are not documentary evidence.

## Opening reception v1

Generated on `2026-08-20` with the built-in ImageGen tool. Raw PNG SHA-256:
`8dde207c50decaebaa634e6daf1cc5018b044fbfd29ed2d763356f40db9a262c`.

```text
Use case: ads-marketing
Asset type: semantic image for a 4:5 Instagram carousel
Primary request: Create a highly directed photorealistic editorial photograph of an empty, ordinary Brazilian outpatient clinic reception before opening. A single vivid cobalt-blue paper ticket sits at the near edge of a worn light-laminate reception desk beside a dark unbranded landline phone. An empty staff chair is pulled slightly away, making an absent handoff owner visible as a situation rather than an abstract concept.
Scene/backdrop: small urban clinic reception with frosted glass, modest painted walls, believable waiting chairs and a blank wall area; operational and lived-in, never luxurious.
Subject: the cobalt ticket, unanswered phone, empty chair, and vacant reception.
Style/medium: natural editorial photography, documentary restraint, tactile realism, not stock advertising and not glossy AI imagery.
Composition/framing: portrait 4:5; eye-level camera; ticket and phone in lower right third; empty chair behind them; generous uncluttered negative space in upper-left for later layout copy; clear depth and asymmetric composition.
Lighting/mood: diffuse cool morning window light mixed with a slightly warm practical light; quiet operational tension, no melodrama.
Color palette: warm porcelain, graphite, muted sage, with cobalt ticket as the only saturated accent.
Materials/textures: visible paper fibers, slight laminate scuffs, frosted glass, brushed metal, plausible object placement and controlled natural imperfection.
Text (verbatim): none.
Constraints: no person, no patient, no medical record, no private information, no symbols, no logos, no readable signage, no generated text, no UI, no watermark. Leave the ticket entirely blank. Keep all objects anatomically and physically plausible.
Avoid: luxury clinic, hospital drama, generic corporate lifestyle, smiling stock subject, pristine 3D render, floating icons, gradient blobs, excessive symmetry, fake depth of field, surreal objects.
```

## Resolved reception edit v1

Edited on `2026-08-20` with the opening raw PNG as the sole image input. Raw
edited PNG SHA-256:
`ad42c8adabe66e5ffe0908e0217d5d255e5ea7cc67cddab027b16b3c34c46001`.

```text
Use case: precise-object-edit
Asset type: resolved closing scene for the same 4:5 Instagram carousel
Primary request: Edit the provided clinic reception image to show the handoff resolved. Change only the cobalt paper ticket interaction: move the same blank cobalt ticket from the desk into one natural adult staff hand entering from the right edge, as if the staff member has just taken responsibility for it. Pull the black staff chair slightly closer to the desk. Preserve the exact room, desk, phone, waiting chairs, frosted glass, camera position, lens, crop, lighting, colors, surface wear, and all other objects.
Input images: Image 1 is the edit target and continuity source.
Style/medium: preserve the original natural editorial photograph and documentary restraint.
Composition/framing: preserve portrait 4:5 and the upper-left negative space; the hand and ticket remain in the lower-right third.
Text (verbatim): none.
Constraints: change only the ticket position, add one anatomically plausible neutral adult hand/forearm from the right, and move the chair slightly. Ticket remains entirely blank. No face, body, patient, private information, logo, text, UI, watermark, jewelry, sleeve branding, or extra object. Preserve exact visual continuity.
Avoid: regenerated room, altered architecture, different phone, changed materials, different time of day, dramatic pose, malformed fingers, duplicate ticket, hospital drama, luxury styling, glossy stock look.
```

## Project conversion

The selected raw PNGs were converted to RGB JPEG with Pillow `12.3.0`, quality
`90`, optimized and progressive. The layout then applies deterministic crops and
overlays only. Project-asset hashes are recorded in `provenance.json` and the
render manifest.
