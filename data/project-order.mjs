// Plain-JS module (no TypeScript syntax) so it can be imported directly by
// build/test scripts running under plain `node`, which — unlike this
// project's own TS-aware toolchain — doesn't reliably support importing
// .ts files across Node versions. data/projects.ts is the source of truth
// for project content; this file is only the canonical slug order, shared
// with scripts/export-netlify.mjs and tests/netlify-export.test.mjs so the
// three never drift out of sync.
export const projectSlugs = [
  "texas-aviation-partners",
  "wild-feathers",
  "wimberly-guitars",
  "preston-session-site",
];
