# Portfolio Website - Terminal Theme

A terminal/hacker-themed portfolio website for software engineers, built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion. Features realistic mobile device mockups for showcasing mobile applications.

## Features

- **Terminal Aesthetic**: Matrix-inspired green terminal theme with scanline effects
- **Realistic Device Mockups**: iPhone and Android device frames with authentic details
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Terminal Commands**: Interactive navigation styled as command-line interface
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **SEO Optimized**: Meta tags, Open Graph image, JSON-LD structured data, sitemap and robots (see `docs/SEO.md`)
- **Performance Optimized**: Built with Next.js 16 for optimal performance
- **TypeScript**: Type-safe codebase for better development experience
- **Hacker Vibe**: Green terminal glow effects, monospace fonts, and retro aesthetics

## Sections

1. **Hero** - Terminal-style intro with ASCII art and command-line interface
2. **About** - Introduction and key highlights (terminal themed)
3. **Skills** - Showcase of technical skills (terminal themed)
4. **Projects** - Featured projects with realistic iPhone/Android device mockups
5. **Experience** - Timeline of work experience and education (terminal themed)
6. **Contact** - Direct email, phone and social links (no form: the site is a static export with no backend)

## Tech Stack

- **Framework**: Next.js 16 (App Router with Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: React Icons + Simple Icons
- **Font**: Geist Mono (`next/font`), falling back to Courier New
- **Theme**: Custom terminal/hacker theme with Matrix-style green (#00ff41)

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the static
export into `out/` and publishes it to GitHub Pages at
https://abimjoshi7.github.io.

## Icons

`public/icon-192.png`, `public/icon-512.png` and `public/apple-touch-icon.png`
are generated from a single SVG source by `node scripts/generate-icons.mjs`.
They are committed, so the build itself stays a plain static export.

## License

MIT License - see [LICENSE](LICENSE). Feel free to use this template for your
own portfolio.
