import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const css = await readFile(
  new URL("../app/globals.css", import.meta.url),
  "utf8",
);

function colorVariable(name) {
  const match = css.match(new RegExp(`--${name}:\\s*(#[0-9a-f]{6})`, "i"));
  assert.ok(match, `Missing --${name} color token`);
  return match[1];
}

function luminance(hex) {
  const channels = hex
    .slice(1)
    .match(/.{2}/g)
    .map((value) => Number.parseInt(value, 16) / 255)
    .map((value) =>
      value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4,
    );
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrast(first, second) {
  const values = [luminance(first), luminance(second)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
}

test("core portfolio color pairings meet WCAG AA", () => {
  const ink = colorVariable("ink");
  const paper = colorVariable("paper");
  const paperDeep = colorVariable("paper-deep");
  const signal = colorVariable("signal");
  const night = colorVariable("night");
  const nightSoft = colorVariable("night-soft");

  assert.ok(contrast(ink, paper) >= 7, "Ink on paper should meet AAA");
  assert.ok(contrast(ink, paperDeep) >= 7, "Ink on muted paper should meet AAA");
  assert.ok(contrast(signal, paper) >= 4.5, "Oxblood on paper should meet AA");
  assert.ok(contrast(signal, paperDeep) >= 4.5, "Oxblood on muted paper should meet AA");
  assert.ok(contrast(paper, signal) >= 7, "Paper on oxblood should meet AAA");
  assert.ok(contrast(nightSoft, night) >= 7, "Muted paper on black should meet AAA");
});

test("the reference-led system keeps its restrained design tokens", () => {
  assert.match(css, /--space-base:\s*8px/);
  assert.match(css, /--motion-standard:\s*200ms ease/);
  assert.match(css, /\.project-index-rail\s*\{[^}]*background:\s*var\(--paper\)/s);
  assert.match(css, /\.project-index-rail a::before\s*\{[^}]*background:\s*var\(--signal\)/s);
  assert.doesNotMatch(css, /border-radius:\s*(?!0)/);
  assert.doesNotMatch(css, /box-shadow:/);
  assert.doesNotMatch(css, /backdrop-filter:/);
});
