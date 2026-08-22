# Paid ads

An ad is not an organic post with a button. It is bought attention pointed at a
destination, and every part of it is accountable to one decision metric. This
reference replaces the short paid section in
[Copy and formats](copy-and-formats.md) whenever a Meta or Instagram ad is the
deliverable.

Placement specs, policy wording, and delivery behaviour change. The working
values here are production starting points. Anything quoted to a client, used to
sign off a launch, or presented as a platform rule must be verified against
current Meta documentation and cited.

## Campaign contract

Return this before any creative. Missing launch-critical fields stay
`[PENDENTE: ...]` and become launch blockers; they are never invented.

```text
CAMPAIGN CONTRACT
- Objective:                    [PENDENTE if not supplied]
- Audience and awareness stage:
- Offer / commercial condition: [PENDENTE if not supplied]
- Proof available:              supplied evidence | mechanism | none
- Destination:                  [PENDENTE: URL, form, WhatsApp, or real direct]
- Message match after click:    what the first screen must repeat
- Primary decision metric:
- Diagnostic metrics:
- Attribution caveat:
- Launch blockers:
```

A cold audience and a remarketing audience are not the same ad with a different
budget. State which one the creative is written for; the promise, the proof
burden, and the CTA all change with it.

| Stage | Creative job | CTA pressure |
| --- | --- | --- |
| Unaware / problem-aware | Name the costly symptom in their language | Low: read, learn, view |
| Solution-aware | Show the mechanism and why it is different | Medium: compare, see how |
| Product-aware | Show proof, scope, and fit criteria | High: talk, schedule, request |
| Remarketing | Remove the specific objection that stopped them | Direct: the action they abandoned |

## Placement set

Decide the placements before designing. Composing one 4:5 piece and letting the
platform crop it into Stories is how a headline ends up under the interface.

| Placement | Working canvas | Design consequence |
| --- | --- | --- |
| Feed (IG/FB) | 1080 × 1350 | Primary; the piece must work with the caption collapsed |
| Feed square | 1080 × 1080 | When the account's grid or a catalogue requires it |
| Stories / Reels | 1080 × 1920 | Keep essential copy clear of the top ~14% and bottom ~20%; interface and CTA sit there |
| Explore | inherits feed asset | Encountered with no profile context: the piece must identify its subject alone |
| Carousel cards | 1080 × 1080 or 1080 × 1350 | Cards can be shown out of order in some surfaces; each must stand alone |

Verify the current safe-area figures before a launch sign-off. Never place the
offer, the price, the destination, or the brand mark inside a band you have not
verified.

## Creative craft for paid

What changes relative to organic:

- **One promise per creative.** An ad with two arguments tests neither.
- **Brand within the first beat.** Paid attention is not owed; the viewer will
  not scroll back to find out who is speaking.
- **The creative stands without the copy.** Primary text is often collapsed.
  If the image needs the caption to make sense, the ad does not work.
- **Bigger type, less of it.** Ad canvases are seen smaller and faster than
  organic. Cut the support line before shrinking it.
- **No dependence on a swipe.** Assume the first frame is the only frame.
- Craft standards are the same: [Visual craft](visual-craft.md) applies in full.
  A rushed ad is a paid rushed ad.

Carousel ads: each card carries one complete idea and one reason to advance.
Sequence-dependent storytelling is weaker here than in organic, because delivery
does not guarantee the reader starts at card one.

## Ad copy

```text
AD COPY
- Primary text:   consequence first; the strongest line before the truncation
- Headline:       the offer or the promise, not a slogan
- Description:    only when it removes a real objection
- Platform CTA:   one approved action that matches the destination
```

- The first line of primary text is the second hook. It is truncated in feed;
  do not open with context.
- `Saiba mais` requires a page whose first screen continues the same claim and
  offer. `Fale conosco` requires a real, staffed contact destination.
- Never use a CTA whose destination has not been confirmed.

## Variant matrix

Test one variable at a time. Three variants that differ in everything teach
nothing.

```text
VARIANTS — one axis, held constant across the others
- Problem-led:    the symptom the audience already feels
- Mechanism-led:  how the work actually operates
- Proof-led:      only if supplied evidence exists
```

Extend the matrix deliberately: `hook × angle × format`. Name the axis under
test in the deliverable, and use a naming convention that survives the ads
manager:

```text
[objective]_[audience]_[angle]_[format]_[variant]
ex.: LEADS_frio_mecanismo_4x5_v2
```

Do not present a proof-led variant when no proof was supplied. Do not vary the
offer between variants unless offer is the axis under test.

## Claims and policy self-check

Run this before delivery. It is a self-check that flags risk, not a legal
clearance; escalate anything uncertain and verify against current Meta
advertising policies.

- **Performance numbers** require the underlying case: baseline, period, metric
  definition, scope, attribution limit. A generated or illustrative number never
  becomes paid proof.
- **Superiority** — "melhor", "número 1", "garantido" — needs verifiable
  substantiation and is almost always unnecessary.
- **Urgency** comes from a real deadline, capacity limit, price condition, or
  operational cost. Missing urgency is not permission to fabricate scarcity.
- **Personal attributes.** Meta restricts ads that assert or imply the viewer's
  personal characteristics. "Você, dono de clínica endividado" is a risk;
  "Clínicas que perdem lead no WhatsApp" is not.
- **Health, financial, and sensitive categories** carry extra restrictions,
  including before/after imagery and implied outcomes. Datta's own ads are
  usually B2B services, but a client-context creative can inherit these rules.
- **Depicted rights.** Paid use requires owned, client-cleared, commercially
  licensed, or generated assets. A recognisable person in a negative or
  sensitive framing needs a documented release. Editorial-reference imagery is
  never allowed in paid.
- **Implied endorsement.** No photographed person, clinic, or brand may appear
  to endorse Datta or to have failed at the behaviour being discussed.

## Measurement

```text
MEASUREMENT
- Primary decision metric:   the one number that decides keep/kill
- Diagnostic metrics:        what explains a bad primary metric
- Attribution caveat:        what this setup cannot establish
- Read conditions:           what has to be true before the metric is readable
```

Do not invent thresholds, benchmarks, or budgets. If the account's own history
is not supplied, say that the decision threshold has to come from it and mark it
pending.

CTR, CPL, and reach are media outcomes. They do not prove revenue or lead
quality. Say so in the caveat rather than letting the client infer it.

## Launch blockers

A paid piece stays at `APROVADO PARA RASCUNHO` or `REPROVADO` while any of these
holds:

- missing campaign objective;
- missing offer or commercial condition;
- missing proof behind a proof-led claim;
- missing or unconfirmed destination;
- post-click message does not continue the creative's promise;
- unknown image license or client permission;
- fabricated scarcity, superiority, result, or attribution;
- placement safe areas not verified for the placement set in use;
- no primary decision metric.

## Deliverable shape

```text
CAMPAIGN CONTRACT      (above)
CONCEPT                selected territory + kill tests — see Concept generation
CREATIVE               per placement: canvas, safe area, art copy, composition,
                       Datta spine, expressive world, image program, provenance
AD COPY                primary text, headline, description, platform CTA
VARIANTS               axis under test, naming convention
MEASUREMENT
POLICY SELF-CHECK
QA VERDICT
```
