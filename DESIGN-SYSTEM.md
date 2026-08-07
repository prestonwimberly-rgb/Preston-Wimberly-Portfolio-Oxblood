# Preston Wimberly Portfolio — Oxblood Design System

This file implements [`DESIGN-NORTH-STAR.md`](./DESIGN-NORTH-STAR.md) for an **employer-facing editorial working portfolio**. The portfolio should make authorship, judgment, scope, and evidence visible without overstating seniority or borrowing another brand's surface style.

The detailed implementation references remain [`design-system/preston-wimberly-portfolio/MASTER.md`](./design-system/preston-wimberly-portfolio/MASTER.md) and [`docs/design-direction.md`](./docs/design-direction.md). This root file is the concise governance layer future contributors should read first.

## Existing foundation

Preserve the vinext/React architecture and `app/globals.css` as the visual source of truth.

- **Display:** Bodoni Moda unless separately licensed Grifo/Grifinito files are deliberately supplied.
- **Reading:** Source Serif 4 unless separately licensed Chronicle files are deliberately supplied.
- **Interface:** Source Sans 3 unless separately licensed Ringside/Verlag files are deliberately supplied.
- **Palette:** warm paper, black ink, restrained oxblood, and quiet grey rules.
- **Composition:** asymmetric editorial grids, full-width documentary imagery, sharp geometry, hairline rules, and limited motion.

Do not replace suitable embedded fonts or introduce unlicensed proprietary font files merely to resemble a reference publication.

## Token contract

Existing project variables remain stable. North Star aliases in `app/globals.css` provide shared semantic roles:

- `--color-paper`, `--color-paper-deep`, `--color-ink`, `--color-muted`, `--color-rule`
- `--color-cool` for black/night surfaces and `--color-accent` for oxblood emphasis
- `--font-display`, `--font-body`, `--font-interface`, `--font-metadata`
- `--text-*`, the existing 8px `--space-*` rhythm, `--page-gutter`, `--measure-reading`, `--radius-detail`, and `--motion-fast`

Use semantic aliases for new work. Do not churn mature selectors simply to rename variables.

## Page and component rules

- Treat the homepage as an edited table of contents, led by the case study most relevant to the intended employer.
- Every case study identifies the problem, Preston's ownership, collaborators, central decision, deliverables, dates, place, and observable result.
- Separate what the work proves from what remains unverified. Do not imply team size, budget, authority, campaign reach, revenue, or leadership scope without records.
- Give unlike evidence different scale: a website, reporting excerpt, photograph, strategy diagram, instrument detail, and outcome record do not need identical cards.
- Use oxblood sparingly for emphasis and conversion; paper text remains the foreground on oxblood or black surfaces.
- Keep reading measure between 38–46rem and long text left aligned.
- Mobile requires its own crop, case-study order, reading sequence, and control review.

## Audit disposition

**KEEP:** the existing font stack and licensing fallbacks, oxblood/paper palette, square geometry, evidence-led project model, responsive-image component, visible focus, reduced motion, and build/test architecture.

**REFINE:** use semantic token aliases in new components; make credits, dates, roles, collaborators, and outcomes more explicit; tune mobile crops and case-study sequence for employer relevance.

**REMOVE:** unsupported metrics, vague leadership claims, interchangeable portfolio cards, decorative animation, faux heritage, generic agency language, and client marks or images without permission.

**REBUILD:** only when an existing structure prevents a credible evidence trail, accessibility, performance, or responsive reading.

## Related guidance

- [`IMAGE-DIRECTION.md`](./IMAGE-DIRECTION.md) governs photography and AI-assisted imagery.
- [`.github/PULL_REQUEST_TEMPLATE/design-qa.md`](./.github/PULL_REQUEST_TEMPLATE/design-qa.md) is the design review gate.
