import { mkdir, readFile, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectDirectory = path.resolve(scriptDirectory, "..");
const publicDirectory = path.join(projectDirectory, "public");
const optimizedDirectory = path.join(publicDirectory, "optimized");
const socialDirectory = path.join(publicDirectory, "social");
const imageManifest = JSON.parse(
  await readFile(path.join(projectDirectory, "config", "images.json"), "utf8"),
);
const socialCards = JSON.parse(
  await readFile(path.join(projectDirectory, "config", "social-cards.json"), "utf8"),
);
const standardWidths = [480, 768, 1200, 1600];

function candidateWidths(sourceWidth) {
  const widths = standardWidths.filter((width) => width < sourceWidth);
  widths.push(sourceWidth);
  return widths;
}

function outputName(source, width, format) {
  const filename = path.basename(source, path.extname(source));
  return path.join(optimizedDirectory, `${filename}-${width}.${format}`);
}

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function socialOverlay(card) {
  const titleLines = card.title
    .map(
      (line, index) =>
        `<tspan x="60" dy="${index === 0 ? 0 : 70}">${escapeXml(line)}</tspan>`,
    )
    .join("");

  return Buffer.from(`
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="630" fill="#8b1a1a"/>
      <rect x="26" y="26" width="1148" height="578" fill="none" stroke="#f4efe6" stroke-opacity="0.48"/>
      <text x="60" y="76" fill="#f4efe6" font-family="Arial, sans-serif" font-size="19" font-weight="700" letter-spacing="2.4">${escapeXml(card.eyebrow)}</text>
      <line x1="60" y1="112" x2="660" y2="112" stroke="#f4efe6" stroke-opacity="0.6"/>
      <text x="60" y="220" fill="#f4efe6" font-family="Georgia, serif" font-size="57" letter-spacing="-1.5">${titleLines}</text>
      <text x="60" y="565" fill="#f4efe6" font-family="Georgia, serif" font-size="26" font-weight="700">Preston Wimberly</text>
    </svg>
  `);
}

await rm(optimizedDirectory, { recursive: true, force: true });
await rm(socialDirectory, { recursive: true, force: true });
await mkdir(optimizedDirectory, { recursive: true });
await mkdir(socialDirectory, { recursive: true });

let responsiveFileCount = 0;
for (const [source, expected] of Object.entries(imageManifest)) {
  const input = path.join(publicDirectory, source.replace(/^\//, ""));
  const metadata = await sharp(input).metadata();
  if (metadata.width !== expected.width || metadata.height !== expected.height) {
    throw new Error(
      `${source} dimensions changed: expected ${expected.width}x${expected.height}, received ${metadata.width}x${metadata.height}`,
    );
  }

  for (const width of candidateWidths(expected.width)) {
    const resized = sharp(input).resize({ width, withoutEnlargement: true });
    await Promise.all([
      resized.clone().avif({ quality: 56, effort: 4 }).toFile(outputName(source, width, "avif")),
      resized.clone().webp({ quality: 78, effort: 4 }).toFile(outputName(source, width, "webp")),
    ]);
    responsiveFileCount += 2;
  }
}

for (const card of socialCards) {
  const input = path.join(publicDirectory, card.source.replace(/^\//, ""));
  const photograph = await sharp(input)
    .resize(480, 630, { fit: "cover", position: "centre" })
    .toBuffer();
  await sharp({
    create: { width: 1200, height: 630, channels: 3, background: "#8b1a1a" },
  })
    .composite([
      { input: photograph, left: 720, top: 0 },
      { input: socialOverlay(card), left: 0, top: 0 },
    ])
    .jpeg({ quality: 84, progressive: true })
    .toFile(path.join(socialDirectory, `${card.slug}.jpg`));
}

console.log(
  `Generated ${responsiveFileCount} responsive images and ${socialCards.length} social cards`,
);
