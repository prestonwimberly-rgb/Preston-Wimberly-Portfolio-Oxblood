# Final portfolio audit

Audited August 8, 2026 against the supplied Netlify deploy and the canonical
`prestonwimberly-rgb/Preston-Wimberly-Portfolio-Oxblood` checkout on `main`.
The governing direction remains: a modern editorial portfolio for hiring
leaders and collaborators that feels field-tested, tactile, and exacting and
shows what Preston owned, made, and changed.

## Audit summary

The page is already operating at a high level. The first screen is distinctive,
the oxblood-and-paper system feels authored rather than themed, the selected
work avoids conventional cards, and the sequence makes aviation, music, craft,
writing, photography, and digital production feel like one practice. It reads
as a creative director's portfolio before it reads as a developer's portfolio.

The remaining work is finish work. It should make the documentary evidence more
useful, correct one marginal contrast failure, improve the hero at tablet widths,
and remove the few places where language becomes either atmospheric or
repetitive instead of exact.

| Category | Score | Finding |
| --- | ---: | --- |
| Authenticity | 5/5 | Real places, objects, records, and unresolved rights questions keep the work credible. |
| Editorial hierarchy | 5/5 | The opening, four chapters, method, writing, About, and contact form a clear publication-like sequence. |
| Material character | 5/5 | Type, rules, paper, oxblood, black, and documentary imagery carry the character without costume. |
| Evidence | 4/5 | The work is specific, but two homepage captions and one project premise can do more evidentiary work. |
| Restraint | 5/5 | No decorative system is competing with the work; motion is brief and functional. |
| Usability | 5/5 | Navigation, reading order, touch targets, links, and responsive behavior are clear. |
| Performance | 5/5 | Lighthouse performance is 100 desktop and mobile; LCP is 0.3s desktop and 1.5s mobile. |
| Accessibility | 4/5 | Semantics and keyboard affordances are strong; one muted-text pairing measures just under AA. |

## Critical

### Muted text on the deeper paper surface falls just below WCAG AA

- **Issue:** `--ink-soft` (`#5f5a52`) on `--paper-deep` (`#d8d0c3`)
  measures approximately 4.47:1. The combination appears in small supporting
  copy on deeper-paper case-study surfaces.
- **Why it matters:** The difference is small but real. Normal-size text needs
  4.5:1, and an otherwise disciplined accessibility system should not rely on
  rounding.
- **Exact location:** `app/globals.css`, the `--ink-soft` token and supporting
  copy such as `.case-evidence-intro > p:last-child` when the field theme uses
  `--paper-deep`.
- **Recommended correction:** Move `--ink-soft` one step darker to `#5e5951`.
  This reaches approximately 4.54:1 on deeper paper while preserving the visual
  difference between primary and secondary text.

## High Impact

### The hero photograph loses authority at tablet and small-laptop widths

- **Issue:** At 1024px the hero photograph renders at roughly 358×239px; at
  768px it falls to roughly 269×179px. The image begins to read like a thumbnail
  beside the typography.
- **Why it matters:** The opening photograph is proof of authorship and field
  access. At these widths it becomes decoration precisely when the page needs it
  to establish documentary credibility.
- **Exact location:** Homepage hero, `app/globals.css` selectors `.hero`,
  `.hero-copy`, and `.hero-visual`, especially the `max-width: 1050px` behavior.
- **Recommended correction:** Rebalance the 761–1050px grid so the image receives
  nearly half the width, then stack the hero at narrow tablet widths where a
  full-width photograph has more authority than a small sidecar image. Preserve
  the current desktop and mobile compositions.

### The opening and About photographs identify the author but not the evidence

- **Issue:** Both overlay captions say only “Photograph by Preston Wimberly.”
- **Why it matters:** A credit establishes authorship, but a documentary caption
  should also tell the visitor what the image records. The site explicitly
  claims reporting and field work; the caption should support that claim.
- **Exact location:** Homepage `.hero-visual` and `.about-section > figure` in
  `app/page.tsx`.
- **Recommended correction:** Add the already-supported factual descriptions
  “A tractor works across an airport runway” and “A surveyor works on an airport
  runway,” then retain the authorship credit as secondary interface text. Do not
  add an unverified location or date.

### One selected-work premise carries atmosphere but not the problem

- **Issue:** “Objects meant to acquire history” is memorable, but in the
  homepage scan it does not explain the Wimberly Guitars assignment as clearly
  as the other three premises explain theirs.
- **Why it matters:** A hiring manager should understand the decision behind each
  chapter without opening all four case studies. The current line risks making
  the guitar chapter feel like product mood rather than brand direction.
- **Exact location:** Wimberly Guitars row in Selected Work; `data/projects.ts`
  as consumed by `app/page.tsx`.
- **Recommended correction:** Preserve “Objects meant to acquire history” on the
  case-study opening, but give the homepage an optional, problem-led premise
  about building a guitar brand from real materials without generic vintage
  language. Also change the homepage label “Result” to “What changed” so the
  four observable outcomes are described accurately rather than presented as
  unverified business results.

### About repeats the method instead of closing the argument

- **Issue:** The About copy repeats “interview the people,” “find the useful
  facts,” and “finish with words, images, and a working system” soon after the
  Working Method section makes the same point.
- **Why it matters:** The repetition makes the close feel longer and more
  explanatory than the rest of the page. About should synthesize the breadth,
  point of view, location, and usefulness in one final statement.
- **Exact location:** Homepage `#about`, paragraphs in `app/page.tsx`.
- **Recommended correction:** Keep the heading and factual lead, then consolidate
  the remaining two paragraphs into one concise synthesis covering aviation,
  handcrafted products, publishing, sales, live production, field reporting,
  physical materials, and the consistent method.

## Refinement

### External writing links do not announce that they open a new tab

- **Issue:** The two external editorial links use `target="_blank"` and a visual
  arrow, but the behavior is not stated in the accessible name.
- **Why it matters:** The current treatment is understandable visually, but a
  screen-reader user does not receive the same warning.
- **Exact location:** `app/page.tsx`, `.writing-card` links for the guitar essay
  and airport article.
- **Recommended correction:** In a later accessibility pass, add concise
  screen-reader-only text such as “opens in a new tab,” without adding a visible
  badge or more interface chrome.

### Preview indexing signals are intentionally different from production

- **Issue:** The supplied immutable Netlify URL returns an `X-Robots-Tag:
  noindex` header while its exported production metadata and canonical point to
  `work.prestonwimberly.com`. Lighthouse therefore reports SEO 69 on the preview.
- **Why it matters:** This can look like an SEO failure if the deploy context is
  not understood, but it protects the review artifact from indexing.
- **Exact location:** Supplied Netlify deploy response headers and homepage head;
  deployment logic in `lib/site.ts` and `scripts/export-netlify.mjs`.
- **Recommended correction:** Do not change the page for this score. Continue to
  verify that the public custom domain is indexable and that previews and deploy
  permalinks remain blocked.

### Image-delivery diagnostics report theoretical savings despite excellent load behavior

- **Issue:** Lighthouse estimates image-byte savings, primarily on high-density
  mobile displays.
- **Why it matters:** The diagnostic is worth monitoring, but the current page
  has responsive AVIF/WebP sources, explicit dimensions, lazy loading below the
  fold, zero meaningful CLS, and a 1.5s mobile LCP.
- **Exact location:** `components/responsive-image.tsx`, `config/images.json`,
  and the generated responsive image sets.
- **Recommended correction:** Leave the pipeline intact. Revisit only if real
  field data shows slower LCP or image transfer becoming material; do not trade
  documentary detail for a theoretical score.

### The meta description is accurate but slightly more technical than the page

- **Issue:** The description ends with “web design,” while the page's stronger
  positioning is creative direction carried through digital production.
- **Why it matters:** Search and social copy should reinforce the same hierarchy
  as the visible page and avoid an accidental freelance-web-designer reading.
- **Exact location:** `config/site.json`, `description`.
- **Recommended correction:** On a future metadata-only pass, consider replacing
  “web design” with “digital production.” The current copy is accurate and does
  not justify expanding this implementation beyond the five priorities.

## Leave Alone

### Hero statement

“Clear words. Useful websites. Work people can understand.” is distinctive,
plainspoken, and memorable. In context, the eyebrow, supporting sentence, and
field photograph keep it from reading as a generic web-design offer. Do not
rewrite it.

### Selected Work architecture and order

The four chapters behave as one editorial composition without becoming four
cards. Alternating alignment, different image proportions, chapter names,
factual metadata, and observable outcomes create consistency without monotony.
Texas Aviation Partners should remain first while Wild Feathers rights and
fact-checking remain open.

### Working Method

Keep the section and its current sequence: Research, Position, Write,
Photograph, Design, Build. It is brief, memorable, and converts breadth into a
repeatable method. It strengthens rather than interrupts the narrative.

### Writing & Editorial Work

The section reads like an editorial index rather than a blog feed. Type, rules,
metadata, descriptions, and restrained arrows are correctly weighted. The
article mix proves reporting, craft writing, and case-study thinking without
overexplaining.

### Case-study structure and factual guardrails

The four openings identify problem, ownership, collaboration, constraint,
decision, artifacts, and observable change. Their sequence varies by subject:
the archive and workshop lead with evidence; aviation and the session practice
lead with the premise. Keep unresolved rights, authority, provenance, duration,
and outcome notes private and unchanged.

### Typography, color system, and motion

Bodoni Moda, Source Serif 4, Source Sans 3, square geometry, paper, black, and
selective oxblood create the right mix of editorial authority and material
character. Link and image transitions are fast, functional, and fully disabled
under reduced motion. Do not add texture, animation, rounded surfaces, or more
accent color.

### Static architecture and media pipeline

The generated site loads no application JavaScript, uses responsive AVIF/WebP
images with explicit dimensions, has no console errors or horizontal overflow,
and serves complete metadata, social cards, structured data, crawl files,
redirects, 404 behavior, and security headers. Preserve this architecture.

## Five highest-impact improvements

1. Correct the marginal `--ink-soft` contrast failure on deeper paper.
2. Give the hero photograph appropriate authority at 1024px and 768px.
3. Turn the hero and About credits into factual documentary captions.
4. Make the Wimberly Guitars homepage premise problem-led and relabel homepage
   outcomes as “What changed.”
5. Tighten About into a concise closing synthesis.

## Verification baseline

- Repository quality gate: 17/17 tests passed; zero production vulnerabilities.
- Lighthouse desktop: Performance 100, Accessibility 100, Best Practices 100;
  LCP 0.3s, CLS 0.005, TBT 0ms.
- Lighthouse mobile: Performance 100, Accessibility 100, Best Practices 100;
  LCP 1.5s, CLS 0, TBT 0ms.
- SEO on the supplied preview: 69 only because the deploy URL is intentionally
  blocked from indexing.
- Viewports inspected: 1440, 1024, 768, 430, and 390 pixels.
- Internal routes, legacy redirects, branded 404, and all homepage external
  links returned the expected status.
- Browser console: no warnings or errors.
