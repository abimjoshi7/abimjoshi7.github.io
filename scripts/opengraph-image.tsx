import { ImageResponse } from "next/og";

export const alt = "Abim Joshi - Full-stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Required by `output: "export"` — render the PNG at build time.
export const dynamic = "force-static";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          backgroundImage:
            "linear-gradient(135deg, #001a0a 0%, #000000 100%)",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#00ff41",
            display: "flex",
          }}
        >
          Abim Joshi
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#e5e5e5",
            marginTop: 20,
            display: "flex",
          }}
        >
          Full-stack Software Engineer
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#00d9ff",
            marginTop: 16,
            display: "flex",
          }}
        >
          Next.js · Rust · Flutter · Compose · SwiftUI
        </div>
      </div>
    ),
    { ...size }
  );
}

/*
 * NOT a live route — kept as the source of truth for app/opengraph-image.png.
 *
 * `output: "export"` emits a route-generated OG image as the extensionless file
 * `out/opengraph-image`. GitHub Pages derives Content-Type from the file
 * extension, so that is served as application/octet-stream and social scrapers
 * (LinkedIn, Slack, X) refuse to render it. Shipping a real .png sidesteps it.
 *
 * To regenerate after editing this file:
 *   cp scripts/opengraph-image.tsx app/opengraph-image.tsx
 *   npm run build
 *   cp out/opengraph-image app/opengraph-image.png
 *   rm app/opengraph-image.tsx
 *   npm run build
 */
