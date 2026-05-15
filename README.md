# Areeba Nadeem — AI Engineer & Creative Technologist

[![Portfolio](https://img.shields.io/badge/Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://my-portfolio-navy-six-92.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/areebakhan1w)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/areeba-khan-8a5a51321)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/ariibah_khan)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:57027@students.riphah.edu.pk)

> A futuristic portfolio website showcasing AI Engineering, Prompt Engineering, UI/UX Design, and Software Engineering work.

**Live Demo:** [my-portfolio-navy-six-92.vercel.app](https://my-portfolio-navy-six-92.vercel.app/)

---

## Features

- Custom animated cursor with physics-based magnetic hover effects
- Cinematic intro loader with progress bar animation
- Interactive 3D hero section using Three.js particle field and neural network nodes
- Magnetic buttons that follow cursor movement
- Typing animation cycling through AI/UX roles
- Click-to-expand interactive project cards (11 projects)
- Animated skill proficiency bars
- AI Lab terminal widget with interactive experiments
- Fully mobile responsive design
- Dark futuristic UI with glassmorphism and neon accents

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 | React framework with App Router |
| TypeScript | Type-safe development |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Cinematic animations |
| React Three Fiber | 3D interactive hero canvas |
| Lenis | Ultra-smooth scrolling |
| GSAP | Advanced animation timeline |

---

## Project Structure

```
areeba-portfolio/
├── app/
│   ├── globals.css         # CSS, animations, custom cursor styles
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page with loader + sections
├── components/
│   ├── 3d/
│   │   └── HeroCanvas.tsx  # Three.js 3D scene
│   ├── sections/
│   │   ├── Hero.tsx        # Full-screen hero with typing animation
│   │   ├── About.tsx       # Story, traits, timeline
│   │   ├── Projects.tsx    # Interactive project showcase (11 projects)
│   │   ├── Skills.tsx      # Skill bars, neural map, tech grid
│   │   ├── AILab.tsx       # AI experiments terminal
│   │   └── Contact.tsx     # Contact form + social links
│   ├── ui/
│   │   ├── CustomCursor.tsx    # Magnetic cursor with hover effects
│   │   ├── Loader.tsx          # Cinematic intro loader
│   │   └── SmoothScroll.tsx    # Lenis smooth scroll wrapper
│   ├── Navbar.tsx
│   └── Footer.tsx
├── public/                 # Static assets
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## Quick Start

**Prerequisites:** Node.js 18+

```bash
git clone https://github.com/areebakhan1w/MyPortfolio.git
cd MyPortfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Other commands:**

```bash
npm run build   # Production build
npm start       # Run production build
npm run lint    # ESLint check
```

---

## Customization

| What to change | File location |
|---|---|
| Hero headline and roles | `components/sections/Hero.tsx` |
| Projects | `components/sections/Projects.tsx` |
| Social links | `components/sections/Contact.tsx` |
| Colors | `app/globals.css` under `:root` |

---

## Deployment

Deployed on Vercel. Every push to the `main` branch auto-deploys.

---

## Connect

- **LinkedIn:** [areeba-khan-8a5a51321](https://www.linkedin.com/in/areeba-khan-8a5a51321)
- **Instagram:** [@ariibah_khan](https://instagram.com/ariibah_khan)
- **Email:** areebanadeem674@gmail.com
- **GitHub:** [areebakhan1w](https://github.com/areebakhan1w)
- **Portfolio:** [Live Demo](https://my-portfolio-navy-six-92.vercel.app/)

---

© 2026 Areeba Nadeem. All rights reserved.
