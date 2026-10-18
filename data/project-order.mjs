// Plain-JS module (no TypeScript syntax) so it can be imported directly by
// build/test scripts running under plain `node`, which — unlike this
// project's own TS-aware toolchain — doesn't reliably support importing
// .ts files across Node versions. data/projects.ts is the source of truth
// for project content; this file is only the canonical slug order, shared
// with scripts/export-netlify.mjs and tests/netlify-export.test.mjs so the
// three never drift out of sync.
export const projectSlugs = [
  "texas-aviation-partners",
  "wimberly-guitars",
  "wild-feathers",
  "preston-session-site",
];

// The memoir belongs in sequential browsing, while keeping its own /sandpaper
// route and the four /work/ exports above.
const projectNavigationSlugs = [
  ...projectSlugs.slice(0, 3),
  "sandpaper",
  ...projectSlugs.slice(3),
];

export function getNextProjectLink(slug) {
  const index = projectNavigationSlugs.indexOf(slug);
  if (index === -1) throw new Error(`Unknown portfolio project: ${slug}`);
  const nextSlug = projectNavigationSlugs[(index + 1) % projectNavigationSlugs.length];
  return {
    slug: nextSlug,
    href: nextSlug === "sandpaper" ? "/sandpaper" : `/work/${nextSlug}`,
  };
}
