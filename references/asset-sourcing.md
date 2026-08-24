# Asset sourcing: quality first, bounded search

Use this reference whenever a post, carousel, or ad needs photography,
illustration, texture, or another external visual asset. The default is not
"generate an image" and it is not "use any attractive stock photo." Select the
least costly rights-safe route that can carry the visual thesis without becoming
generic.

## Source route

Choose in this order unless the user explicitly requests a different source:

1. **Materials supplied or already licensed** — user/client files, approved
   photography, licensed library assets, or artifacts the team is authorized to
   use. Use them only when they fit the concept; availability is not relevance.
2. **Free licensed banks** — search for a concept-specific asset when photography
   or illustration can express the visual thesis.
3. **Generated original** — use when the bounded bank search finds no qualifying
   asset. Bypass search only when the user explicitly asks for generation/editing
   or a documented pre-search exception proves that stock cannot represent the
   subject safely or truthfully.
4. **Original layout artifact** — build diagrams, evidence mockups, annotations,
   crops, textures, or composites in the layout when those are the semantic job.

Skip external search when the user explicitly requests pure type or the visual
thesis can be completed entirely with authorized artifacts. Do not force stock
into a piece merely to satisfy an image count.

A preference for exact continuity is not, by itself, a pre-search exception.
First test whether one bank asset family can recur through crops, overlays,
composites, grading, or layout transformation. A valid pre-search exception is
observable: for example, editing a supplied image; depicting an inherently
fictional/metaphorical scene that cannot be documentary; or avoiding an
identifiable person in a sensitive accusation that the concept cannot reframe
as object-led stock. Record the exception before generation.

## Define the image before searching

For each asset family, write a compact source brief:

```text
Narrative role: what becomes weaker if this asset is removed
Subject/context: concrete person, place, object, action, or material
Composition: focal point, crop, camera angle, and text-safe zone
Continuity: where the asset recurs, transforms, or supplies derived crops
Avoid: generic category shorthand, trademarks, private data, visual cliches
Minimum: resolution, aspect-ratio tolerance, organic or paid use
```

Search the described relationship, not the broad industry. `empty clinic
reception desk phone negative space` is useful; `healthcare business` is not.
Prefer one strong asset family with meaningful crops or transformations over
unrelated photos on every slide.

## Bounded search loop

Quality is the selection threshold; the bounds prevent endless browsing.

`scripts/fetch-stock.cjs` runs this loop mechanically and produces the record
the gates require — direct asset page, creator, license URL, access date,
downloaded file and its SHA-256 — so the judgement stays with you and the
bookkeeping does not:

```bash
node scripts/fetch-stock.cjs --query "recepção de clínica vazia com telefone" \
     --orientation portrait --out peca/assets
```

It enforces the bounds by construction: at most two providers, at most five
candidates each, Unsplash+ results filtered out. Free API keys go in
`PEXELS_API_KEY`, `UNSPLASH_ACCESS_KEY`, `PIXABAY_API_KEY`; without a key, or
with `--manual`, it prints the exact search and licence pages to work through by
hand. It never marks a candidate as selected — the five gates below are yours to
apply.

### Round 1 — literal scene

- Use no more than two appropriate providers.
- Try up to three query families derived from the source brief.
- Keep at most three candidates. A search-results page is not a candidate
  record.

### Candidate gate

Every selected asset must pass all five checks:

| Check | Pass condition |
| --- | --- |
| Semantic necessity | The image changes what the reader understands and is specific to the topic |
| Composition | The required crop, focal point, text-safe zone, and recurrence are feasible |
| Technical quality | Resolution and file quality survive the final canvas and adaptations |
| Distinctiveness/continuity | The asset avoids stock cliches and belongs to the piece's expressive world |
| Rights | Provider license and depicted people, brands, art, property, privacy, and endorsement risk are acceptable for the intended use |

Rights are a hard gate. Visual quality cannot compensate for unclear permission.

### Round 2 — repair the failed criterion

Run one refined search round only if Round 1 has no full pass. Change the query
to address the actual failure: viewpoint, negative space, subject action,
location specificity, absence of people, or material detail. Use one refined
query family and keep at most three candidates. Do not repeat the same broad
query with synonyms.

After Round 2:

- select the strongest passing asset family and stop; or
- record `NO QUALIFYING STOCK` with the failed criteria, then generate or
  reconcept the asset.

### When the bank route is blocked, not exhausted

An environment can deny the providers outright — a proxy or network policy
answering `403` on connect, an offline runner, or a session with no web access.
That is **not** `NO QUALIFYING STOCK`, and it does not authorise generation as a
fallback: nothing was searched, so nothing failed a quality gate.

**The Claude Code remote environment is one of these.** Its egress proxy
allowlists code infrastructure only — GitHub, GitLab, npm, PyPI reach; every
image provider, CDN and placeholder service answers `403` on CONNECT, and no
image-generation tool is exposed. Do not spend the session probing for an
opening, and do not retry the denial: the proxy README forbids it. The same
skill run on an ordinary machine has no such proxy and the bank route works
normally, so the fastest fix is usually to run the sourcing where the network
is — `scripts/fetch-stock.cjs` exists for exactly that handoff.

Record `BANK ROUTE BLOCKED` with what was attempted and the observed response,
then take the first route that is actually available:

| Available | Do |
| --- | --- |
| Material supplied by the user or client | Use it; this was always route 1 |
| An image-generation tool | Generate, and record tool, prompt, date and edits |
| Neither | Build the piece on owned layout artifacts, and carry the image-led anchor as a **named production blocker** |

A carousel of five or more slides that loses its image-led anchor this way
cannot be `APROVADO`. It is `APROVADO PARA RASCUNHO` with the anchor named, and
the user decides whether to supply photography, unblock the providers, or accept
the piece without it. Do not quietly redefine an owned diagram as the image-led
anchor to close the gap — the distinctiveness gate rejects that.

Do not continue browsing in the hope of an unspecified "better" image. Do not
accept a generic image merely because the search limit was reached.

## Provider starting points

Provider terms change. Open the current official license page during sourcing
and record its access date; these links are starting points, not a permanent
legal conclusion.

| Provider | Useful route | Official terms to verify |
| --- | --- | --- |
| Pexels | Photography/video for organic and advertising layouts | `https://www.pexels.com/legal-pages/license/` |
| Unsplash standard/free | Broad editorial-style photography | `https://unsplash.com/license` and `https://unsplash.com/terms`; confirm that the individual result is standard Unsplash, not Unsplash+ |
| Pixabay | Photography, illustration, vectors, and textures | `https://pixabay.com/service/license-summary/` and full terms linked there |
| Openverse | Secondary discovery for openly licensed media | Verify the original asset page, exact Creative Commons license, attribution, modification, and commercial-use conditions; Openverse is an index, not the licensor |

For a normal job, search at most two of these sources. Prefer the provider whose
media type and current license fit the intended use. Do not browse Instagram or
source-profile feeds as a substitute for a licensed bank.

Capture the access modality of every candidate: standard/free, premium,
subscription, sponsored, or third-party. In the free-bank route, reject
Unsplash+ results and sponsored third-party results. Use them only when the user
or team already holds the required subscription/license and that authorization
is recorded. The standard Unsplash license and Unsplash+ license are separate;
verify `https://unsplash.com/plus/license` and
`https://unsplash.com/plus/terms` for Plus assets. A provider name alone is not
proof that an individual asset is free.

## Depicted-rights check

A provider's copyright license does not automatically clear everything visible
inside an image.

- Do not imply that a recognizable person, clinic, professional, or brand
  endorses Datta or failed at the behavior discussed.
- Avoid recognizable people in negative, medical, financial, or otherwise
  sensitive claims unless a documented release and intended use allow it.
- Reject visible patient information, screens, forms, plates, artwork, logos,
  uniforms, signage, or distinctive property when permission is unclear.
- For paid ads, use a candidate only when both the provider license and depicted
  rights are compatible with advertising.

When this gate blocks otherwise strong stock, prefer an object-led crop,
authorized material, a controlled generated scene, or an original artifact.

## Selection and provenance record

Preserve this for every shortlisted asset and mark the final decision:

```text
Asset role:
Decision: [selected | rejected]
Reason:
Provider:
Access modality: [standard/free | premium | subscription | sponsored | third-party]
Direct asset-page URL:
Asset ID or slug:
Creator:
Direct official license URL:
License/access date:
Intended use: [organic | paid | both]
Depicted-rights check:
Downloaded file + SHA-256: [required when selected | not downloaded when rejected]
Edits: [crop, grade, composite, retouch]
Evidence status: [documentary | illustrative | mockup]
```

Record the direct asset page, not Google Images, a search-results URL, a CDN URL
alone, a repost, or a Pinterest board. A selected asset must include the local
download and SHA-256; a rejected candidate should say `not downloaded` rather
than imply that every shortlist item was fetched. Attribution may be added even
when the provider does not require it.

## Final-production rule

For a requested final creative:

1. download the chosen full-resolution asset from the verified source;
2. preserve the original and its source record;
3. assemble the actual asset into the layout, including planned crops and
   transformations;
4. inspect full canvas and phone-size output; and
5. deliver the provenance manifest with the exports.

A shortlist, moodboard, URL list, or generation prompt is not a finished post.
If search and generation tools are unavailable, identify the asset as a named
production blocker and do not call the piece final.

## Common mistakes

- Searching before defining what the image must communicate.
- Choosing the first polished photo instead of the first full quality-gate pass.
- Using smiling professionals, handshakes, dashboards, or phones as category
  shorthand with no narrative role.
- Treating “free,” “royalty-free,” or “found online” as complete rights review.
- Searching all available banks after a qualifying family has already passed.
- Treating a blocked provider as `NO QUALIFYING STOCK` and generating on that
  basis, or retrying a policy denial instead of reporting it.
- Generating by default because continuity might be difficult before testing a
  bank route.
- Forcing weak stock after two failed rounds instead of generating or changing
  the concept.
