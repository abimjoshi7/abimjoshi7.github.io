# SEO Implementation

Documents the SEO setup in this portfolio, what each piece does, and where it lives.

Site URL: `https://abimjoshi7.github.io`

## Files

| File | Purpose |
|---|---|
| `lib/site.ts` | Single source of truth for site URL, identity, and featured-app data |
| `app/layout.tsx` | Global `<head>` metadata, canonical URL, JSON-LD structured data |
| `app/robots.ts` | Generates `/robots.txt` — crawler access rules + sitemap pointer |
| `app/sitemap.ts` | Generates `/sitemap.xml` — list of indexable URLs |
| `app/manifest.ts` | Generates `/manifest.webmanifest` — PWA/install metadata |
| `app/opengraph-image.png` | The social share preview image (1200×630), served as a static asset |
| `app/opengraph-image.alt.txt` | Alt text for that image |
| `scripts/opengraph-image.tsx` | Source that generated the PNG (not a live route — see below) |
| `next.config.ts` | Static-export config for GitHub Pages |
| `.github/workflows/deploy.yml` | Builds and publishes `out/` to GitHub Pages |
| `public/.nojekyll` | Stops GitHub Pages' Jekyll from discarding `_next/` |

## `lib/site.ts`

`SITE_URL`, `siteConfig` (name, title, descriptions, email, locality, employer, socials, keywords) and `featuredApps` all live here. `layout.tsx`, `robots.ts`, `sitemap.ts` and `manifest.ts` import from it, so a domain change or a title tweak is a one-line edit rather than a four-file sweep.

## `app/layout.tsx`

### `metadataBase`
```ts
metadataBase: new URL(SITE_URL)
```
Base URL Next.js uses to resolve any relative URLs in metadata (e.g. OG image paths). Required for social preview images to resolve to absolute URLs.

### Title template
```ts
title: {
  default: "Abim Joshi - Senior Software Engineer - Mobile Technologies",
  template: "%s | Abim Joshi",
}
```
Single-page site today. If additional routes are added later (e.g. `/blog/[slug]`), each page can just set its own `title` and it will automatically render as `"<page title> | Abim Joshi"`.

### `alternates.canonical`
Set to `"/"` — resolved against `metadataBase` into the absolute URL.

Tells search engines the authoritative URL for this page, avoiding duplicate-content issues if the same content is reachable via multiple URL variants.

### `robots` (meta tag config)
```ts
robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
}
```
Per-page instruction to crawlers: index the page, follow its links, allow large image previews in Google search results. Not to be confused with `robots.ts` (site-wide `robots.txt`, see below).

### `openGraph` / `twitter`
Controls how the link appears when shared on social platforms (LinkedIn, Twitter/X, Slack, iMessage, Discord, etc.) — title, description, card type, and image (sourced from `opengraph-image.tsx`).

### JSON-LD structured data

A single `@graph` containing four connected nodes, rendered as one inline `<script type="application/ld+json">` in `<head>`:

| Node | `@id` | What it says |
|---|---|---|
| `Person` | `#person` | Name, job title, email, `address` (Kathmandu, NP), `worksFor`, `knowsAbout`, `sameAs` → GitHub + LinkedIn |
| `WebSite` | `#website` | The site itself, `publisher` → `#person` |
| `ProfilePage` | `#webpage` | This page, `isPartOf` → `#website`, `mainEntity` → `#person` |
| `ItemList` | `#projects` | The five shipped apps as `SoftwareApplication` entries, each `author` → `#person` |

The `@graph` + `@id` form matters: instead of four disconnected blobs, each node references the others by ID, so Google reads it as one entity graph — "this page is about this person, who authored these apps." That is what backs a knowledge panel for "Abim Joshi" and lets the apps surface as attributable work.

App data comes from `featuredApps` in `lib/site.ts`, kept in sync with what `components/Projects.tsx` renders.

### Other metadata

- `openGraph.type: "profile"` with `firstName` / `lastName` / `username` — the correct OG type for a personal site (was `website`).
- `openGraph.locale: "en_US"`.
- `robots.googleBot`: added `max-snippet: -1` and `max-video-preview: -1` (no length caps on search snippets).
- `formatDetection`: stops iOS Safari auto-linking emails/phones/addresses in body copy.
- `viewport`: `themeColor: "#0d1117"`, `colorScheme: "dark"` — matches the terminal theme, so mobile browser chrome doesn't flash white.
- `publisher`, `applicationName`, `category`.

## Page semantics

SEO is not only `<head>`. These were fixed in the component tree:

### `<h1>` (`components/Hero.tsx`)
The page previously had **no `<h1>` at all** — the name was ASCII art inside a `<pre>`, which crawlers and screen readers read as decorative box-drawing characters. The block is now:

```tsx
<motion.h1 ...>
  <span className="sr-only">Abim Joshi — Senior Software Engineer, Mobile Technologies</span>
  <pre className="overflow-x-auto" aria-hidden="true">{/* ASCII art */}</pre>
</motion.h1>
```

Visual output is unchanged. The `sr-only` span gives the `h1` real text content; `aria-hidden` on the `<pre>` stops assistive tech reading the box characters twice.

### Heading order (`components/About.tsx`)
An `<h4>` preceded an `<h3>` inside the same card, so the outline skipped a level. The `<h4>` (a shell-command label, no keyword value) became a `<span>`; the descriptive title keeps the `<h3>`. Outline is now h1 → h2 (per section) → h3.

### Section landmarks
Each `<section>` now carries `aria-labelledby` pointing at its own `<h2>` (`about-heading`, `skills-heading`, `projects-heading`, `experience-heading`, `contact-heading`); Hero uses `aria-label="Introduction"` since its heading is the page `h1`. Named landmarks make the page navigable by region.

## `app/robots.ts`

```ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
```
Generates the static `/robots.txt` file at build time. Tells all crawlers (`userAgent: "*"`) they may crawl the entire site (`allow: "/"`), and points them to the sitemap for URL discovery. This is the first file most crawlers fetch before requesting any page.

## `app/sitemap.ts`

```ts
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
```
Generates `/sitemap.xml`. Currently a single entry since this is a one-page portfolio. If more routes are added, add an entry per URL here so crawlers discover them without relying on internal links alone.

## Open Graph image

`app/opengraph-image.png` is a committed 1200×630 PNG, with alt text in `app/opengraph-image.alt.txt`. Next's file convention wires both into `og:image` / `twitter:image` automatically — no manual linking in `layout.tsx`.

This is the image shown when the site URL is pasted into LinkedIn, X, Slack, iMessage, etc.

### Why it is a committed file and not a generated route

It started as `app/opengraph-image.tsx`, rendering JSX to PNG via `next/og`. That works on a Node server, but under `output: "export"` Next emits the route as the **extensionless** file `out/opengraph-image`. GitHub Pages derives `Content-Type` purely from the file extension, so that path is served as `application/octet-stream`, and social scrapers refuse to render a non-`image/*` response — the card would silently come back blank.

Shipping a real `.png` gives `/opengraph-image.png` and a correct `image/png` Content-Type. Verified after the change:

```
/opengraph-image.png     200  image/png
```

The generator source is preserved at `scripts/opengraph-image.tsx`. It is deliberately outside `app/` so it does not register as a route. To change the image, follow the regeneration steps in the comment at the bottom of that file.

## Static export (`next.config.ts`)

```ts
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};
```

- **`output: "export"`** — emits a fully static site into `out/`. GitHub Pages serves files, not a Node server.
- **No `basePath`** — the site is a *user* site (repo `abimjoshi7.github.io`), served from the domain root. A project repo would need `basePath: "/<repo>"` and a matching `SITE_URL`.
- **`images.unoptimized`** — the default image optimizer needs a server. (Nothing currently uses `next/image`; this prevents a future import from breaking the build.)
- **`trailingSlash: true`** — emits `out/<route>/index.html` rather than `out/<route>.html`. Without it, a future `/blog` route would 404 on Pages, which has no rewrite layer. This also makes the canonical URL `https://abimjoshi7.github.io/`, so `app/sitemap.ts` emits `${SITE_URL}/` to match exactly.

### `export const dynamic = "force-static"`

`sitemap.ts`, `robots.ts`, `manifest.ts` and metadata image routes are **route handlers**, and `output: "export"` refuses to build one that has not been pinned to build time:

```
Error: export const dynamic = "force-static"/export const revalidate not configured
on route "/sitemap.xml" with "output: export".
```

Each of those files therefore declares `export const dynamic = "force-static"`. Practical consequence: `sitemap.ts`'s `lastModified: new Date()` is frozen at build time — which is the correct semantic anyway, since a rebuild is the only thing that changes the content.

### `public/.nojekyll`

GitHub Pages runs Jekyll by default, and Jekyll **ignores every directory whose name starts with an underscore**. Next puts all its JS and CSS in `_next/`. Without this empty marker file the HTML deploys fine and every asset 404s — the site renders unstyled and inert. The file is in `public/`, so it is copied to `out/.nojekyll` on each build.

## Deployment (`.github/workflows/deploy.yml`)

Pushes to `main` build the site and publish `out/` via the official Pages actions (`configure-pages` → `upload-pages-artifact` → `deploy-pages`), using OIDC (`id-token: write`) rather than a committed token or a `gh-pages` branch.

One deliberate omission: `actions/configure-pages` is called **without** `static_site_generator: next`. That option injects its own export configuration, which would conflict with the explicit `next.config.ts` above.

Requires **Settings → Pages → Source: GitHub Actions** on the repo.

## Build verification

Confirmed via `npm run build` that all routes prerender statically:

```
Route (app)                         Size  First Load JS
┌ ○ /                            69.2 kB         182 kB
├ ○ /_not-found                      0 B         113 kB
├ ○ /manifest.webmanifest            0 B            0 B
├ ○ /opengraph-image.png             0 B            0 B
├ ○ /robots.txt                      0 B            0 B
└ ○ /sitemap.xml                     0 B            0 B
```

The exported `out/` was then served locally and every published path checked for both status and `Content-Type` — the latter is what actually bites on GitHub Pages:

```
/                        200  text/html
/robots.txt              200  text/plain
/sitemap.xml             200  application/xml
/manifest.webmanifest    200  application/manifest+json
/opengraph-image.png     200  image/png
/favicon.ico             200  image/x-icon
/_next/static/chunks/…   200  text/javascript
```

Rendered `.next/server/app/index.html` was checked directly to confirm: exactly one `ld+json` block, one `<h1>` with real text content, `<link rel="canonical">`, `<link rel="manifest">`, and the full `og:` / `twitter:` image set resolving to absolute URLs.
`○ (Static)` confirms these are prerendered at build time, compatible with static hosting (GitHub Pages).

## What's intentionally not covered here

- No blog/multi-page content yet, so sitemap and title template are minimal by design — structured to extend easily.
- No Google Search Console / Bing Webmaster verification meta tags added — add via `metadata.verification` in `layout.tsx` when ready to submit the sitemap.
- No `twitter.creator` / `twitter.site` handle — add to `layout.tsx` if an X account is ever linked.
- Manifest ships only `favicon.ico`; proper 192/512 PNG icons would improve the Android install prompt.

## If the domain changes

Edit `SITE_URL` in `lib/site.ts` — the only place it lives.

If the site ever moves to a **project** repo (served at `/<repo>` instead of the domain root), `SITE_URL` must gain that suffix *and* `next.config.ts` must set a matching `basePath`. The two have to agree or every canonical, sitemap and OG URL points somewhere that does not exist.
