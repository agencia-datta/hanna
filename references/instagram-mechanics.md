# Instagram mechanics

How the piece is actually encountered, and what that forces on the design. The
proportions and behaviours below are composition heuristics drawn from how the
surfaces render, not platform guarantees. Platform layouts change. If a claim
about Instagram behaviour becomes material to a deliverable — a stated
character limit, a placement spec quoted to a client, an ad safe area used to
sign off a launch — verify it against current Meta documentation and cite it,
under the evidence rules in [Copy and formats](copy-and-formats.md).

## Canvases

| Surface | Canvas | Safe area | Note |
| --- | --- | --- | --- |
| Feed portrait | 1080 × 1440 | 80 px sides, 96 px top/bottom | Primary format, 3:4 |
| Legacy portrait | 1080 × 1350 | 80 px sides, 96 px top/bottom | 4:5; older material only |
| Feed square | 1080 × 1080 | 80 px all sides | When a square is requested |
| Story / Reels | 1080 × 1920 | 80 px sides, 120 px top, 240 px bottom | Bottom band is interface |
| Profile grid cell | 3:4, the same ratio as the primary canvas | — | Not a separate export; a constraint on any piece not authored at 3:4 |

Author the piece at 3:4 and the grid shows it whole — that is the main reason
to prefer 1080 × 1440. **Any piece not authored at 3:4 is cropped by the grid**,
so a 4:5 or square post has to keep its argument inside the region the grid
actually keeps. Check it by cropping the export, not by assuming.

## Three moments, three jobs

A post is encountered three times and has to survive each one.

| Moment | Size | What must work |
| --- | --- | --- |
| Grid | very small square | Shape, colour relationship, one legible word cluster |
| Feed cover | phone width | The tension, in under a second |
| Swipe / read | full attention | The argument, the proof, the next step |

Verify by exporting and looking, not by assuming. `scripts/render.cjs` writes a
contact sheet at preview scale for exactly this.

## Cover contract

The cover is the only slide most people see.

- One tension. No paragraph, no stacked claims, no unsupported superlative.
- Legible at roughly 12% scale: that means display type and high contrast, not a
  cover full of body copy.
- If the piece is not authored at 3:4, the tension must survive the grid crop.
- A promise the rest of the piece actually pays. A cover that oversells is not a
  hook; it is the reason people stop trusting the account.
- Avoid burying the tension under the brand mark. Authorship is subordinate to
  the idea.

## Carousel mechanics

### The retention shape

Attention drops hardest between slide 1 and slide 2, and again after the
midpoint. Design against both.

- **Slide 2 pays the cover immediately.** If it restates the cover, or opens
  with throat-clearing context, the swipe is wasted and the reader leaves.
- Front-load the value. The most useful thing should not be on slide 7.
- Choose the shortest sequence that completes the argument. A padded ten-slide
  carousel performs worse than a complete five-slide one.
- Reserve one slide's worth of tension for the second half so the midpoint has a
  reason to continue.

### Swipe-tension devices

Use one at a time, and only where it is true.

| Device | How it works | Guardrail |
| --- | --- | --- |
| Opened question | The slide asks; the next answers | The piece must actually answer it |
| Incomplete enumeration | "Four passages" with one per slide | Deliver all four |
| Bleed across the seam | An image continues into the next slide's left edge | Needs real continuity, not a sliced rectangle |
| Interrupted state | An object stopped mid-action, resolved later | The resolution must arrive |
| Named but unshown | A term is used, then made inspectable | Do not defer past one slide |
| Counter | `1 / 6` in a mono label | Only when order genuinely matters |

Cliffhangers that are never paid are the fastest way to train an audience to
stop swiping.

### Seam continuity

Instagram shows a sliver of the next slide. An image that continues across the
seam turns that sliver into a reason to swipe. To build it: compose the asset at
`1080 × N` for the run of slides, then crop each 1080-wide window in order,
keeping the semantic focal point off-centre so each window has its own subject.
Do not simply slice one photo into equal strips — the middle windows end up with
no subject and the piece reads as a broken image.

### The last slide

Resolve the argument before asking for anything. One approved action, matched to
the awareness stage actually reached. If no action was approved, omit it or mark
an optional organic line as `PROPOSTA DE CTA`.

## Caption

The caption is a second hook, not a transcript.

- The feed truncates captions after a short preview. Treat roughly the **first
  line — about 120 characters** — as a headline that has to earn the expand, and
  verify the current behaviour before quoting a limit to anyone.
- Never open with "Você sabia que" or a restatement of the cover.
- Short paragraphs with real line breaks. A wall of text is not read on a phone.
- Extend or document: add the mechanism, the source, the period, the limits of
  attribution. Do not repeat every slide.
- Close with one action or one genuine question. A question you will not answer
  in the comments is decoration.
- No emoji in institutional copy by default. Titles end with a period.
- Hashtags: no generic block. A small deliberate set only when the distribution
  strategy calls for it. Volume does not substitute for relevance.

## Alt text

Required, and written for a person. Summarise the narrative and the visual
evidence — what the image shows, what the artifact contains, what changes across
the sequence. Not a keyword list, not a repetition of the headline.

## What actually earns each response

Design for the response the objective needs; do not ask for all of them.

| Response | What earns it |
| --- | --- |
| Save | Something reusable later: a checklist, an audit sequence, a definition |
| Share | Something that says what the reader could not say themselves |
| Comment | A real question, a genuine disagreement, or a stated position |
| Profile visit | An argument that implies there is more where it came from |
| Click | A promise the destination visibly continues |

Engagement bait — "comment X to receive Y", manufactured controversy, fake
polls — is outside Datta's voice and is not a substitute for a piece worth
saving.

## Adaptations

Produce an adaptation only when it is requested or operationally necessary.

- **Square:** confirm the argument survives the grid crop; re-set line breaks.
- **Story/Reels:** keep the bottom 240 px clear of essential copy; re-compose
  rather than scaling the 4:5 piece; a carousel becomes a sequence of frames,
  not one tall image.
- **Ad:** an organic post is not an ad. Go to [Paid ads](paid-ads.md).
