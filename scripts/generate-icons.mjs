/**
 * Renders the favicon and the PWA / touch icons from one SVG source.
 *
 * Run with `node scripts/generate-icons.mjs` after changing the mark; the PNGs
 * and the .ico are committed, so the build stays a plain static export with no
 * image step.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public");
// app/favicon.ico is the Next file convention, so the tab icon lives there.
const appDir = join(root, "app");

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

/**
 * Packs PNG frames into an .ico. Every browser that matters reads PNG-compressed
 * ICO frames, so the payloads go in untouched — no BMP re-encoding needed.
 *
 * Layout: a 6-byte ICONDIR, then one 16-byte ICONDIRENTRY per frame, then the
 * frames themselves.
 */
const toIco = (frames) => {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // 1 = icon
  header.writeUInt16LE(frames.length, 4);

  const directory = Buffer.alloc(16 * frames.length);
  let offset = header.length + directory.length;

  frames.forEach(({ size, data }, index) => {
    const entry = index * 16;
    // 256px is stored as 0; nothing here is that large, but keep the rule.
    directory.writeUInt8(size >= 256 ? 0 : size, entry);
    directory.writeUInt8(size >= 256 ? 0 : size, entry + 1);
    directory.writeUInt8(0, entry + 2); // palette size, 0 for truecolour
    directory.writeUInt8(0, entry + 3); // reserved
    directory.writeUInt16LE(1, entry + 4); // colour planes
    directory.writeUInt16LE(32, entry + 6); // bits per pixel
    directory.writeUInt32LE(data.length, entry + 8);
    directory.writeUInt32LE(offset, entry + 12);
    offset += data.length;
  });

  return Buffer.concat([header, directory, ...frames.map((frame) => frame.data)]);
};

// Square, not rounded: at 16px a corner radius eats the glyph, and browsers
// draw the tab icon small enough that every pixel of the mark counts.
const faviconSizes = [16, 32, 48];
const faviconFrames = await Promise.all(
  faviconSizes.map(async (size) => ({
    size,
    data: await sharp(Buffer.from(mark(0))).resize(size, size).png().toBuffer(),
  })),
);

await writeFile(join(appDir, "favicon.ico"), toIco(faviconFrames));
console.log(`wrote app/favicon.ico (${faviconSizes.join(", ")})`);
