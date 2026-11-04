// Shared by scripts/optimize-images.mjs (which writes the variants) and
// components/responsive-image.tsx (which writes srcset), so they cannot drift.
export const standardWidths = [480, 768, 1200, 1600];

export function candidateWidths(sourceWidth) {
  return [...standardWidths.filter((width) => width < sourceWidth), sourceWidth];
}
