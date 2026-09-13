# Portfolio creative review — September 12, 2026

## Scope and intent

Refine the portfolio for hiring leaders who need to understand the idea,
Preston’s contribution, the finished work, and the next step. Preston authorized
implementation of the seven recommendations from the creative-director review.

The work leads with real airport photography, the launched TAP website, the
existing guitar product photograph, the cleared archive, and original writing.
The references are GSD&M’s emphasis on a distinct campaign idea and Texas Monthly’s
editorial specificity. Target qualities: authentic, honest, and capable.

- Preserve the homepage order: TAP, Wimberly Custom Guitars, The Wild Feathers,
  and SANDPAPER. The session-musician case remains supporting independent work.
- Move TAP’s “Operate. Develop. Advise.” decision directly after the before-and-after
  comparison. Three annotations explain scope, the operating record, and photography.
- Give the confirmed TAP collaboration example explicit “The request” and “My response”
  labels. Existing authority, ownership, founder, and offer language is preserved.
- Replace the guitar campaign with “The mark you’d never fix.” The print concept,
  30-second film treatment, player-story social sequence, and email have distinct roles.
  The campaign is speculative and unlaunched. The film and social passages describe
  planned production; they do not claim that interviews or performances exist.
- Add original archive and manuscript excerpts to the homepage. The archive’s case
  uses a dark reading panel; the manuscript excerpt keeps its own prose and cadence.
- Keep Work, Résumé, and Contact visible in the mobile header. Use a 3:2 tractor
  photograph at phone widths so the complete vehicle remains visible in a shorter opening.
- Update the archive to the cleared 410 performance records, 209 archive records,
  125 source records, seven flagship stories, one supporting road record, and six
  chapters. Link the case, homepage, and essay to the owned domain. Historical
  screenshots retain their August 2026 capture dates.

## Evidence and remaining source needs

`docs/launch-checklist.md` and `data/projects.ts` provide the factual record.
The archive homepage and “Willie in Las Vegas” URL returned HTTP 200 during this
review. The public launch and updated counts were already cleared September 12.
The unverified TAP traffic claim remains excluded.

A second concrete feedback or disagreement example was requested from Preston;
none has been supplied in this turn. The confirmed TAP example is presented more
clearly, and no second anecdote, team size, testimonial, or business result was
invented. Producing the proposed guitar stories will require participants, real
photographs, recorded answers, and cleared music.

## Manuscript and résumé sources

The source is Preston's existing `SANDPAPER_best .pdf`, verified as 141 pages,
432 × 648 points per page. The original is unchanged and is not copied into
the public directory.

- The HTML excerpt is a continuous selection from “Four Hundred,” printed pages
  115–116, ending before the paragraph beginning “I learned…”. Only extraction
  artifacts such as line-end hyphenation and lost spaces/apostrophes were repaired.
- Interior previews reproduce actual facing pages 114–115 and 116–117. Individual
  pages open at full size. They are rendered pages, not generated book mockups.
- The downloadable PDF contains the complete “Four Hundred” chapter, printed
  pages 115–116 only. The rest of the manuscript stays outside the site.
- `scripts/prepare-portfolio-pdfs.py pages <original-pdf-path>` uses PyMuPDF to
  render the source pages and extract the chapter. `resume` uses ReportLab to
  create the one-page résumé. These are optional preparation commands, not
  deployment dependencies. The resulting source assets are committed with the
  project; responsive AVIF/WebP files remain generated and ignored.
- Resume evidence is the confirmed biography, project ownership and collaboration
  in `data/projects.ts`, and content clearances in `docs/launch-checklist.md`.
  No employment dates were inferred from project dates.

## Design QA

- Reviewed all six routes at 1440px, 390px, and 320px. Scrolled through each page
  to load lazy images; no missing images, horizontal overflow, or clipped
  headings, copy, links, or captions were found.
- Visually reviewed the phone opening and full tractor, desktop campaign and
  film treatment, TAP decision and annotations, homepage archive excerpt,
  narrow-phone layout, and branded 404.
- The 390px homepage reaches selected work at approximately 822px from the top.
  Work, Résumé, and Contact are visible and have 44px-high targets.
- Fixed two short next-project links found during the 390px check. Both passed
  the repeated touch-target check; all visible links and controls checked meet
  the 44px minimum at the reviewed widths.
- Keyboard testing showed the visible skip-link outline and moved sequential
  focus into the main content. Reduced-motion emulation produced automatic
  scrolling and effectively zero-duration transitions. The emulation was reset.
- Existing contrast-safe palette, fonts, dimensions, captions, and native motion
  controls remain intact. Color-pairing and motion tests pass.

| Category | Score | Basis |
| --- | --- | --- |
| Authenticity | 5/5 | Actual photographs, original excerpts, and clearly proposed campaign work. |
| Editorial hierarchy | 4/5 | Earlier TAP decision and shorter phone opening; dense work remains readable. |
| Material character | 4/5 | Existing instruments and documentary field photography carry the identity. |
| Evidence | 3/5 | Authorship and status are clear; another leadership example and measured outcomes still need sources. |
| Restraint | 4/5 | Existing system retained; the film is a concise written treatment. |
| Usability | 4/5 | Direct mobile résumé, live archive links, and corrected touch targets. |
| Performance | 4/5 | Static pages, responsive assets, no application JavaScript; no new Lighthouse benchmark claimed. |
| Accessibility | 4/5 | Width, target, focus, contrast, semantics, and reduced-motion checks; not a full assistive-technology audit. |

Evidence remains the weakest category. Improve it with verified material, not
stronger unsupported language.

## Validation and release boundary

- Final `npm run quality` passed: lint, image generation, build/export, all 19 tests,
  and the production dependency audit with zero vulnerabilities. Generated 174
  responsive files and six social cards; generated outputs remain ignored.
- Checked all seven exported HTML documents, including 404, for duplicate IDs,
  broken internal links/fragments, missing local assets, and application scripts:
  no failures. Canonical metadata, structured data, and crawl files pass existing tests.
- Exported both deploy-preview and branch-deploy contexts. All six public routes
  have noindex/nofollow metadata, the branded 404 remains non-indexable, and robots
  disallows all. Restored the local production-format export afterward.
- Both legacy 301 redirects retain existing targets that exist in the export.
  The seven configured security/cache header rules are unchanged. The Python
  preview does not emulate Netlify redirects, headers, or production routing.
- Preview: http://127.0.0.1:4172/ . Branch: `codex/portfolio-creative-review`.
  This report records local validation before release. GitHub records the merge
  status; production deployment requires separate verification.
