# Areeba Nadeem — Portfolio Website

A world-class futuristic portfolio website for Areeba Nadeem — AI Engineer, Prompt Engineer, UI/UX Designer, and Software Engineering Student.

## Tech Stack

- **Next.js 14** — React framework with App Router
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Cinematic animations
- **React Three Fiber + Three.js** — 3D interactive hero canvas
- **Lenis** — Ultra-smooth scroll
- **GSAP** — Advanced animation timeline

## Features

- Custom animated cursor with physics
- Cinematic loader with progress bar
- Interactive 3D hero with particle field & neural nodes
- Smooth magnetic buttons
- Typing animation with role cycling
- Interactive project showcase (click to expand)
- Animated skill proficiency bars
- AI Lab terminal widget
- Contact form with send animation
- Mobile responsive with adaptive motion
- Dark futuristic aesthetic with glassmorphism

---

## Quick Start (VS Code)

### Prerequisites
- Node.js 18+ installed → [nodejs.org](https://nodejs.org)
- npm or yarn (comes with Node.js)

### Steps

```bash
# 1. Open this folder in VS Code
# 2. Open the integrated terminal (Ctrl+` or View → Terminal)

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Open in browser
# → http://localhost:3000
```

### Other Commands

```bash
# Build for production
npm run build

# Run production build
npm start

# Lint check
npm run lint
```

---

## Project Structure

```
areeba-portfolio/
├── app/
│   ├── globals.css       ← All CSS, animations, custom cursor styles
│   ├── layout.tsx        ← Root layout with metadata
│   └── page.tsx          ← Main page with loader + sections
├── components/
│   ├── 3d/
│   │   └── HeroCanvas.tsx   ← Three.js 3D scene (particles, orbs, neural nodes)
│   ├── sections/
│   │   ├── Hero.tsx         ← Full-screen hero with typing animation
│   │   ├── About.tsx        ← Story, traits, timeline
│   │   ├── Projects.tsx     ← Interactive project showcase (11 projects)
│   │   ├── Skills.tsx       ← Skill bars, neural map, tech grid
│   │   ├── AILab.tsx        ← AI experiments terminal
│   │   └── Contact.tsx      ← Contact form + social links
│   ├── ui/
│   │   ├── CustomCursor.tsx ← Magnetic cursor with hover effects
│   │   ├── Loader.tsx       ← Cinematic intro loader
│   │   └── SmoothScroll.tsx ← Lenis smooth scroll wrapper
│   ├── Navbar.tsx           ← Fixed nav with scroll detection
│   └── Footer.tsx
├── public/                  ← Static assets
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## Customization

Edit `components/sections/Hero.tsx` to change the headline and roles.

Edit `components/sections/Projects.tsx` to add/update projects.

Edit `components/sections/Contact.tsx` to update social links.

Colors are defined in `app/globals.css` under `:root`.

---

## Deployment

```bash
# Deploy to Vercel (easiest)
npx vercel

# Or build and deploy to any static host
npm run build
# Upload the .next folder + public folder
```

---

Built with love for Areeba Nadeem 🚀
"# My Portfolio" 
