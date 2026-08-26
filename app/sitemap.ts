import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Required by `output: "export"` — pin this route to build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      // Trailing slash matches the canonical URL emitted under `trailingSlash: true`.
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
