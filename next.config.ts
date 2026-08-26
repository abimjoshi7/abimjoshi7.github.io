import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site into ./out — GitHub Pages serves files, not a Node server.
  output: "export",

  // Served from https://abimjoshi7.github.io (user site, repo root), so no basePath.

  // The default image optimizer needs a server; export has none.
  images: {
    unoptimized: true,
  },

  // Emit out/<route>/index.html instead of out/<route>.html, so any future
  // route resolves on GitHub Pages without a server-side rewrite.
  trailingSlash: true,
};

export default nextConfig;
