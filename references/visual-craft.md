# Visual craft

[Art direction and images](art-direction-and-images.md) decides *what* a piece
shows. This reference decides whether it is *well made*. Most social creative
fails here: the idea is fine and the execution reads as amateur — type set at
default tracking, a palette of unrelated colours, text floating in the middle of
nowhere, and a photograph darkened until nothing is legible.

Every rule below is a starting value for a 1080 px-wide canvas. Adjust
optically for the real words and the real image, and record deliberate
departures. The invariants are legibility, hierarchy, and intent.

## Craft floor

A piece is not finishable until all of these are true.

1. One element is unmistakably dominant. A viewer can say what to read first
   without hesitating.
2. Every position is a decision. Nothing sits somewhere because that is where it
   landed.
3. Type is set, not typed: tracking, line breaks, and line length are authored.
4. Colour has roles. Each colour in the piece can be named by its job.
5. Text over image is legible because of a measured treatment, not a hope.
6. The piece survives at thumbnail size and at arm's length on a phone.
7. Edges are intentional: nothing is accidentally 6 px from a margin.
8. Nothing is present that would not be missed.

## Typography

### Build a scale, not a pile

Pick a display size, then derive the rest. A single ratio keeps a page coherent.

```text
Display    96 px        (ratio 1.0)
Sub-display 62 px       (÷1.55)
Body       31 px        (÷2.0 from sub-display, or ÷3.1 from display)
Label/mono 19 px        (÷1.6 from body)
```

The display-to-body ratio should sit at **2.5× or more**. Below that the page
reads as one grey mass and hierarchy collapses. If a piece needs three sizes
between display and body, it has too much copy for the canvas — cut or split.

### Tracking

Optical spacing is the fastest tell between professional and default.

| Context | Starting tracking |
| --- | --- |
| Display 72 px and above | `-0.03em` to `-0.045em` |
| Sub-display 48–70 px | `-0.02em` to `-0.03em` |
| Body 27–36 px | `0` to `+0.005em` |
| Mono uppercase labels | `+0.06em` to `+0.10em` |

Large type set at `0` looks loose and unfinished. Uppercase labels set at `0`
look cramped. These two corrections alone lift most layouts.

### Line length and line breaks

- Display: 14–28 characters per line. Longer and the eye loses the return.
- Body: 34–52 characters per line. This is the readable band on a phone canvas.
- Break display lines on **meaning**, not on where the box happens to end.
  Author the breaks with explicit markup; never leave a three-line headline to
  the browser.
- No widows. A single trailing word on its own line is a defect, not a style.
- Hang punctuation and quotation marks outside the text edge at display sizes.

### Setting

- Sentence case by default for Datta display copy. Reserve all-caps for short
  mono labels; a full uppercase headline is a shout, and it costs word-shape
  recognition at thumbnail size.
- Line height: `0.90–1.08` for display, `1.35–1.55` for body. Tight display and
  loose body is the correct pairing; the reverse looks broken.
- One display family and one body family. A third family needs a stated job.
- Optical alignment: a quotation mark, a `T`, or a `W` at the margin looks
  indented. Nudge it out until the edge reads straight.
- Never fake a weight. Use the real cut; synthetic bold and oblique are visible.

## Colour

### Five roles

Build the palette by role, then choose values. A palette with unnamed roles is a
mood board, not a system.

```text
GROUND    the field the piece sits on
INK       primary reading colour on that ground
SUPPORT   secondary text, rules, quiet structure
ACCENT    one focus: the decision, the number, the endpoint
SIGNAL    optional semantic colour, only when meaning is being encoded
```

- Roughly **60/30/10**: ground dominates, ink and support carry the reading,
  accent stays scarce. When the official Datta system is selected, brass stays
  under 5% of the canvas.
- One accent per piece. Two accents means one of them is decoration.
- Deriving a palette from the chosen image beats importing an unrelated one:
  sample the photograph's real ground and its natural focal hue, then push
  contrast rather than replacing the temperature.
- Keep temperature coherent. A warm photograph under a cold blue text field
  reads as two pieces stapled together, unless the clash is the argument.

### Contrast targets

Measured, not eyeballed. `scripts/render.cjs` reports these automatically.

| Text | Minimum ratio |
| --- | --- |
| Body and support copy | 4.5:1 |
| Display 48 px and above | 3:1, and 4.5:1 whenever the ground is a photograph |
| Mono labels and source notes | 4.5:1 — small text has no large-text exemption |
| Decorative rules and devices | not a text target, but must stay visible at thumbnail |

Avoid pure `#000000` text on a bright photograph and pure `#FFFFFF` on a light
one; both vibrate. Move one step off pure and gain depth.

## Composition

### The three-moment read

Design for how the piece is actually consumed.

| Moment | What must land |
| --- | --- |
| 0.3 s — thumbnail in the grid | One shape, one colour relationship, one word cluster |
| 1 s — cover in the feed | The tension: what is wrong, or what is at stake |
| 3 s — decision to stop | The specific promise that makes a swipe or a read worth it |

If the piece only works at 3 s, it will never be given 3 s.

### Structure

- Choose one dominant tension per canvas: scale, position, colour, or density.
  Two competing tensions cancel out.
- Optical centre sits **above** geometric centre. Vertically centred text in a
  tall feed canvas looks like it is sliding down.
- Anchor to a real grid. A 6- or 12-column grid on 1080 px with an 80 px margin
  gives usable columns; snap to it, then break it deliberately once.
- Negative space is an active choice with a stated purpose: it isolates the
  focal point, it lets the image breathe, it carries silence. Filling every
  region is the most common amateur move; so is emptiness with no focus.
- Edge tension: an element is either clearly inside the safe area or clearly
  bleeding off-canvas. The failure state is "almost touching the edge".
- Group by proximity. A label belongs to its headline when it is nearer to it
  than to anything else, not because it is the same colour.

### Macro-composition vocabulary

Real options, so "different silhouette" is a choice rather than a hope. A
five-plus-slide sequence needs at least three genuinely different ones.

`full-bleed image` · `asymmetric split` · `horizontal band` · `stacked thirds` ·
`object study on field` · `annotated artifact` · `overhead flat-lay` ·
`extreme macro` · `contact strip` · `vertical route/timeline` ·
`type-as-image` · `edge-anchored corner` · `diptych comparison` ·
`framed inset` · `list ladder` · `single-number focus` · `bleed-across-seam`

Changing the background colour, moving a card, or resizing type does **not**
create a new macro-composition.

## Depth and material

Flat is fine; cheap is not. Depth comes from layer discipline, not from effects.

- Layer order, back to front: ground → image → grade → scrim → structure →
  type → mark. Skipping the grade or the scrim is what produces unreadable
  text over photos.
- **Scrim by luminance, not by habit.** Measure the region under the text: a
  bright area needs a stronger gradient than a dark one. Use a directional
  gradient that fades to zero over the image, never a flat wash across the whole
  frame — a full-canvas veil kills the photograph you chose.
- **Grain** at `0.06–0.14` opacity breaks the plastic look of a generated image
  and the deadness of a flat field. Visible grain is texture, not craft.
- Shadows obey one light direction and one blur logic across the whole piece.
  Mixed shadow physics is instantly readable as pasted-together.
- Skip the defaults that mark a piece as template work: gradient blobs, glassy
  cards, drop shadows on text, glows, bevels, and 3D icon sets.

## Image treatment

- Crop for the semantic focal point first, aspect ratio second. If the required
  crop destroys the subject, it is the wrong asset.
- Give the subject real scale in the frame. Tiny subjects in vast fields read as
  stock filler.
- One grade across every image in a sequence: same black point, same
  temperature, same contrast curve. Ungraded mixed sources look like a folder.
- Do not overlay a brand colour on a photograph to make it "on brand". A
  monochrome or duotone treatment needs a reason inside the idea.
- Generated images: motivated light, imperfect material, plausible object
  placement, one camera position that carries the argument. Perfect symmetry,
  glossy surfaces, and floating UI are the giveaways.

## Twelve signs a piece looks cheap — and the fix

| Sign | Fix |
| --- | --- |
| Headline set at default tracking | Tighten to `-0.03em` and author the line breaks |
| Everything centred | Choose a real alignment and one deliberate break |
| Text over an unreadable photo | Measure the region, add a directional scrim, re-check contrast |
| Five colours, none dominant | Assign the five roles; delete the rest |
| Type sized in three near-identical steps | Enforce a 2.5× display-to-body ratio |
| Elements 6 px from the margin | Snap to the safe area or bleed fully |
| Body copy filling the canvas | Cut it, or split the slide |
| Logo enlarged to "own" the piece | Return to 64 px symbol / 200 px lockup and place it subordinate |
| Icon set standing in for an idea | Replace with one real artifact or scene |
| Drop shadow under the headline | Fix the ground instead |
| Every slide the same skeleton | Assign macro-compositions from the vocabulary before layout |
| A number with no source line | Add source and period, or remove the number |

## Verification

Never approve from the layout view alone.

1. Export at full canvas and inspect.
2. Inspect at phone scale (≈40%) — support copy must read without zoom.
3. Inspect at thumbnail scale (≈12%) — the cover must still say something.
4. If the piece is not authored at the grid's 3:4 ratio, crop the export to
   that ratio and confirm the argument survives.
5. Run `node scripts/render.cjs <arquivo.html>` and clear every `FALHA`. Items
   marked `INSPEÇÃO` are text over image or gradient: confirm them by eye.
