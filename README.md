# Portfolio Website - Terminal Theme

A terminal/hacker-themed portfolio website for software engineers, built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Features realistic mobile device mockups for showcasing mobile applications.

## Features

- **Terminal Aesthetic**: Matrix-inspired green terminal theme with scanline effects
- **Realistic Device Mockups**: iPhone and Android device frames with authentic details
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Terminal Commands**: Interactive navigation styled as command-line interface
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **TypeScript**: Type-safe codebase for better development experience
- **Hacker Vibe**: Green terminal glow effects, monospace fonts, and retro aesthetics

## Sections

1. **Hero** - Terminal-style intro with ASCII art and command-line interface
2. **About** - Introduction and key highlights (terminal themed)
3. **Skills** - Showcase of technical skills (terminal themed)
4. **Projects** - Featured projects with realistic iPhone/Android device mockups
5. **Experience** - Timeline of work experience and education (terminal themed)
6. **Contact** - Contact form styled as terminal input

## Tech Stack

- **Framework**: Next.js 15 (App Router with Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: React Icons + Simple Icons
- **Font**: Courier New (monospace) for terminal aesthetic
- **Theme**: Custom terminal/hacker theme with Matrix-style green (#00ff41)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update name, title, and description
   - Modify social media links

2. **About Section** (`components/About.tsx`):
   - Update bio and statistics
   - Customize highlights

3. **Skills Section** (`components/Skills.tsx`):
   - Add/remove skills
   - Update proficiency levels

4. **Projects Section** (`components/Projects.tsx`):
   - Add your own projects
   - Update project links and images

5. **Experience Section** (`components/Experience.tsx`):
   - Add your work experience
   - Update education details

6. **Contact Section** (`components/Contact.tsx`):
   - Update contact information
   - Configure form submission

### Styling

- Colors can be customized in `app/globals.css`
- Tailwind configuration is in `postcss.config.mjs`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Render
- Any platform that supports Node.js

## Build for Production

```bash
npm run build
npm start
```

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

Created with Claude Code - An AI-powered development assistant
