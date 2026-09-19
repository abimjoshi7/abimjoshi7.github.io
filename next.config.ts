import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray lockfile in a parent directory makes Turbopack infer the wrong
  // workspace root; pin it to this repo.
  turbopack: {
    root: path.resolve(__dirname),
  },

  // `next dev` otherwise rewrites AGENTS.md and CLAUDE.md on every run, so they
  // come back as untracked files after each delete.
  agentRules: false,

  // Next 16 blocks cross-origin requests to /_next dev resources, and only
  // `localhost` is trusted out of the box. Opening `next dev` on 127.0.0.1, or
  // on the LAN address a phone would use, blocks the client chunks: the page
  // renders the server HTML and never hydrates, so every motion element stays
  // at its `initial` opacity of 0 and the page looks empty.
  allowedDevOrigins: ["127.0.0.1", "192.168.*.*", "10.*.*.*"],

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
