"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "01",
    name: "OmniSeller",
    tagline: "AI-Powered E-commerce Intelligence Platform",
    description:
      "A comprehensive AI system that automates product listing, pricing optimization, and market analysis for sellers across multiple platforms.",
    tags: ["AI", "Python", "React", "ML"],
    category: "AI Platform",
    color: "#00d4ff",
    problem: "Sellers wasting hours on manual product management",
    impact: "10x faster listing, intelligent pricing suggestions",
  },
  {
    id: "02",
    name: "PromptGenius Pro",
    tagline: "Chrome Extension for AI Prompt Engineering",
    description:
      "A browser extension that enhances AI interactions with smart prompt templates, history management, and real-time prompt optimization.",
    tags: ["Chrome Extension", "TypeScript", "OpenAI", "React"],
    category: "Extension",
    color: "#a855f7",
    problem: "Inconsistent AI results from poor prompts",
    impact: "Structured prompt library with measurable output quality",
  },
  {
    id: "03",
    name: "GeoVoice AI",
    tagline: "Voice-Activated Geographic Intelligence",
    description:
      "An AI agent that processes natural language geographic queries, providing rich location-based insights with voice interaction.",
    tags: ["AI Agent", "NLP", "Maps API", "Python"],
    category: "AI Agent",
    color: "#00ffea",
    problem: "Complex geographic data inaccessible to non-experts",
    impact: "Natural language queries for geographic intelligence",
  },
  {
    id: "04",
    name: "AI Brand Studio",
    tagline: "Intelligent Brand Identity Generator",
    description:
      "An AI-powered platform that generates complete brand identities — logos, color palettes, typography, and brand guidelines — from a simple description.",
    tags: ["AI", "Design", "Stable Diffusion", "React"],
    category: "AI Creative",
    color: "#f59e0b",
    problem: "Expensive branding out of reach for startups",
    impact: "Complete brand kit generated in minutes",
  },
  {
    id: "05",
    name: "Daily Life Risk Checker",
    tagline: "AI Agent for Personal Risk Assessment",
    description:
      "An intelligent agent that analyzes daily activities, decisions, and habits to provide personalized risk assessments and safety recommendations.",
    tags: ["AI Agent", "LLM", "Python", "FastAPI"],
    category: "AI Agent",
    color: "#ef4444",
    problem: "People unaware of hidden risks in daily decisions",
    impact: "Proactive risk identification with actionable advice",
  },
  {
    id: "06",
    name: "Pakistan Stock Exchange AI Agent",
    tagline: "Intelligent PSX Market Analysis",
    description:
      "A specialized AI agent for PSX market analysis, providing real-time insights, trend prediction, and investment signals for Pakistani stocks.",
    tags: ["Finance AI", "Python", "ML", "APIs"],
    category: "Finance AI",
    color: "#10b981",
    problem: "PSX market data complex and inaccessible",
    impact: "Democratized stock analysis for Pakistani investors",
  },
  {
    id: "07",
    name: "Savour Foods AI Agent",
    tagline: "Culinary Intelligence Platform",
    description:
      "An AI agent for the food industry that handles menu recommendations, ingredient analysis, nutritional insights, and personalized meal planning.",
    tags: ["AI Agent", "NLP", "React", "Node.js"],
    category: "AI Agent",
    color: "#f97316",
    problem: "Generic food recommendations ignoring preferences",
    impact: "Personalized culinary experiences at scale",
  },
  {
    id: "08",
    name: "Nursing Student Assistant",
    tagline: "AI-Powered Medical Education App",
    description:
      "An intelligent study assistant designed specifically for nursing students, with drug interaction lookup, clinical scenario simulations, and adaptive quizzes.",
    tags: ["React Native", "AI", "Medical", "Education"],
    category: "EdTech",
    color: "#06b6d4",
    problem: "Nursing students overwhelmed by complex medical data",
    impact: "Structured learning with AI-powered clinical scenarios",
  },
  {
    id: "09",
    name: "DevForge AI",
    tagline: "AI Development Workflow Accelerator",
    description:
      "A developer-focused AI tool that automates code reviews, generates documentation, suggests architecture improvements, and identifies security vulnerabilities.",
    tags: ["AI", "Developer Tools", "TypeScript", "APIs"],
    category: "Dev Tools",
    color: "#8b5cf6",
    problem: "Repetitive developer tasks slowing down output",
    impact: "Automated code quality with AI-generated docs",
  },
  {
    id: "10",
    name: "Vibent",
    tagline: "Social Energy & Mood Platform",
    description:
      "A social platform where users share their current vibe/energy state, discover people with matching vibes nearby, and connect through shared emotional wavelengths.",
    tags: ["React", "Node.js", "AI", "Social"],
    category: "Social App",
    color: "#ec4899",
    problem: "Generic social apps ignoring emotional context",
    impact: "Connections based on real-time energy alignment",
  },
  {
    id: "11",
    name: "Riphah LMS Redesign",
    tagline: "University LMS UX Overhaul",
    description:
      "A complete UI/UX redesign of RIPHAH University's Learning Management System, transforming a clunky interface into a modern, intuitive educational platform.",
    tags: ["UI/UX", "Figma", "Design System", "Research"],
    category: "UI/UX Design",
    color: "#84cc16",
    problem: "Students frustrated by outdated, confusing LMS",
    impact: "Modern design system with 3x better task completion",
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-[#030712]">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse,rgba(0,212,255,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="section-label mb-4">02. Projects</div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight">
            Things I've{" "}
            <span className="gradient-text">built & shipped</span>
          </h2>
          <p className="mt-4 text-white/40 text-lg max-w-xl">
            Each project is a laboratory experiment — combining AI, design, and engineering to solve real problems.
          </p>
        </motion.div>

        {/* Projects list */}
        <div className="space-y-0">
          {projects.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={i}
              inView={inView}
              isHovered={hoveredIndex === i}
              isActive={activeProject === i}
              onHover={() => setHoveredIndex(i)}
              onLeave={() => setHoveredIndex(null)}
              onClick={() => setActiveProject(activeProject === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
  inView,
  isHovered,
  isActive,
  onHover,
  onLeave,
  onClick,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
  isHovered: boolean;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.06, duration: 0.6 }}
    >
      <div
        className={`group relative border-b border-white/5 transition-all duration-500 cursor-pointer ${
          isActive ? "bg-white/[0.02]" : "hover:bg-white/[0.015]"
        }`}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onClick={onClick}
        data-cursor-hover
      >
        {/* Hover color line */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-0.5"
          animate={{ opacity: isHovered || isActive ? 1 : 0 }}
          style={{ background: project.color }}
        />

        <div className="py-8 px-6 flex items-center gap-6 md:gap-12">
          {/* Number */}
          <span className="font-mono text-xs text-white/20 w-8 shrink-0">{project.id}</span>

          {/* Category badge */}
          <span
            className="hidden sm:block font-mono text-xs px-2 py-1 rounded border shrink-0 w-28 text-center"
            style={{ color: project.color, borderColor: `${project.color}30` }}
          >
            {project.category}
          </span>

          {/* Name */}
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-semibold text-xl text-white group-hover:text-white transition-colors">
              {project.name}
            </h3>
            <p className="text-white/40 text-sm mt-0.5 truncate">{project.tagline}</p>
          </div>

          {/* Tags */}
          <div className="hidden lg:flex items-center gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="font-mono text-xs text-white/30">
                {tag}
              </span>
            ))}
          </div>

          {/* Arrow */}
          <motion.div
            animate={{ rotate: isActive ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors"
          >
            <span className="text-white/40 text-sm">+</span>
          </motion.div>
        </div>

        {/* Expanded detail */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/5">
                <div className="md:col-span-2 pt-8">
                  <p className="text-white/60 text-base leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass rounded-xl p-4 border border-white/5">
                      <div className="font-mono text-xs text-white/30 mb-2 uppercase tracking-widest">Problem</div>
                      <p className="text-white/70 text-sm">{project.problem}</p>
                    </div>
                    <div className="glass rounded-xl p-4 border border-white/5">
                      <div className="font-mono text-xs text-white/30 mb-2 uppercase tracking-widest">Impact</div>
                      <p className="text-white/70 text-sm">{project.impact}</p>
                    </div>
                  </div>
                </div>
                <div className="pt-8">
                  <div className="font-mono text-xs text-white/30 mb-4 uppercase tracking-widest">Tech Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono border"
                        style={{ color: project.color, borderColor: `${project.color}25`, background: `${project.color}08` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
