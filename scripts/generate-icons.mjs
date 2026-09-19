/**
 * Renders the PWA / touch icons from one SVG source.
 *
 * Run with `node scripts/generate-icons.mjs` after changing the mark; the PNGs
 * are committed, so the build stays a plain static export with no image step.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public");

/** The terminal prompt mark: a green `A>` on the site's background. */
const mark = (radius) => `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="${radius}" fill="#0d1117"/>
  <text x="50%" y="50%" dy="0.36em" text-anchor="middle"
        font-family="ui-monospace, 'DejaVu Sans Mono', 'Courier New', monospace"
        font-size="224" font-weight="700" fill="#00ff41">A&gt;</text>
</svg>`;

const targets = [
  { file: "icon-192.png", size: 192, radius: 96 },
  { file: "icon-512.png", size: 512, radius: 96 },
  // iOS applies its own mask and flattens alpha, so ship a fully square, opaque tile.
  { file: "apple-touch-icon.png", size: 180, radius: 0 },
];

await mkdir(outDir, { recursive: true });

for (const { file, size, radius } of targets) {
  const png = await sharp(Buffer.from(mark(radius)))
    .resize(size, size)
    .png()
    .toBuffer();
  await writeFile(join(outDir, file), png);
  console.log(`wrote public/${file} (${size}x${size})`);
}
