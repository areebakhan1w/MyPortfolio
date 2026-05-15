"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    label: "AI & ML",
    color: "#00d4ff",
    skills: ["Prompt Engineering", "AI Agents", "LLM Integration", "ML Concepts", "AI Automation", "LangChain"],
  },
  {
    label: "Frontend",
    color: "#a855f7",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend",
    color: "#00ffea",
    skills: ["Node.js", "Python", "FastAPI", "Express", "REST APIs", "WebSockets"],
  },
  {
    label: "Design",
    color: "#f59e0b",
    skills: ["Figma", "UI/UX Design", "Design Systems", "Photoshop", "Canva", "Prototyping"],
  },
  {
    label: "Languages",
    color: "#10b981",
    skills: ["JavaScript", "TypeScript", "Python", "C++", "Java", "OOP"],
  },
  {
    label: "Tools",
    color: "#ec4899",
    skills: ["Chrome Extensions", "Git", "VS Code", "Postman", "Vercel", "Firebase"],
  },
];

const featuredSkills = [
  { name: "AI Engineering", level: 90, color: "#00d4ff" },
  { name: "Prompt Engineering", level: 95, color: "#a855f7" },
  { name: "React / Next.js", level: 85, color: "#00ffea" },
  { name: "UI/UX Design", level: 88, color: "#f59e0b" },
  { name: "Python", level: 80, color: "#10b981" },
  { name: "Chrome Extensions", level: 82, color: "#ec4899" },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="relative py-32 overflow-hidden bg-[#030712]">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(0,212,255,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="section-label mb-4">03. Skills</div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight">
            My technical{" "}
            <span className="gradient-text">arsenal</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — proficiency bars */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="section-label mb-8">Core Proficiency</div>
              <div className="space-y-6">
                {featuredSkills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-display text-sm font-medium text-white/80">{skill.name}</span>
                      <span className="font-mono text-xs" style={{ color: skill.color }}>{skill.level}%</span>
                    </div>
                    <div className="h-px bg-white/5 relative overflow-hidden rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ delay: 0.5 + i * 0.08, duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                        className="absolute inset-y-0 left-0 h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
                          boxShadow: `0 0 10px ${skill.color}40`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Neural network visualization placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12 glass rounded-2xl p-6 border border-[#00d4ff]/10 relative overflow-hidden"
            >
              <div className="section-label mb-6">Neural Map</div>
              <NeuralMapViz inView={inView} />
            </motion.div>
          </div>

          {/* Right — category grid */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="section-label mb-8">Technology Map</div>

              {/* Category tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {skillCategories.map((cat, i) => (
                  <button
                    key={cat.label}
                    onClick={() => setActiveCategory(i)}
                    className="px-4 py-2 rounded-lg font-mono text-xs transition-all duration-300"
                    style={{
                      color: activeCategory === i ? cat.color : "rgba(255,255,255,0.3)",
                      background: activeCategory === i ? `${cat.color}15` : "transparent",
                      border: `1px solid ${activeCategory === i ? cat.color + "40" : "rgba(255,255,255,0.08)"}`,
                    }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Skills grid */}
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-3"
              >
                {skillCategories[activeCategory].skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="glass-hover glass rounded-xl p-4 border border-white/5 text-center group"
                    style={{
                      background: `radial-gradient(circle at center, ${skillCategories[activeCategory].color}05 0%, transparent 60%)`,
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full mx-auto mb-3 group-hover:shadow-[0_0_8px_currentColor] transition-shadow"
                      style={{ background: skillCategories[activeCategory].color }}
                    />
                    <span className="font-mono text-xs text-white/60 group-hover:text-white/90 transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* All skills cloud */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-12 p-6 glass rounded-2xl border border-white/5"
              >
                <div className="section-label mb-4">All Technologies</div>
                <div className="flex flex-wrap gap-2">
                  {skillCategories.flatMap((c) => c.skills).filter((v, i, a) => a.indexOf(v) === i).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 rounded font-mono text-xs text-white/30 border border-white/5 hover:text-white/70 hover:border-white/20 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NeuralMapViz({ inView }: { inView: boolean }) {
  const nodes = [
    { x: 50, y: 20, label: "AI", color: "#00d4ff", size: 8 },
    { x: 20, y: 50, label: "Design", color: "#a855f7", size: 6 },
    { x: 80, y: 50, label: "Code", color: "#00ffea", size: 6 },
    { x: 35, y: 80, label: "Product", color: "#f59e0b", size: 5 },
    { x: 65, y: 80, label: "UX", color: "#10b981", size: 5 },
    { x: 50, y: 50, label: "You", color: "#ffffff", size: 7 },
  ];

  const connections = [
    [0, 5], [1, 5], [2, 5], [3, 5], [4, 5],
    [0, 1], [0, 2], [1, 3], [2, 4], [3, 4],
  ];

  return (
    <div className="relative w-full" style={{ paddingBottom: "60%" }}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 60">
        {connections.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y * 0.6}
            x2={nodes[b].x}
            y2={nodes[b].y * 0.6}
            stroke="rgba(0,212,255,0.15)"
            strokeWidth="0.3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
          />
        ))}
        {nodes.map((node, i) => (
          <motion.g key={i} initial={{ opacity: 0, scale: 0 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}>
            <circle cx={node.x} cy={node.y * 0.6} r={node.size * 0.3} fill={node.color} opacity={0.8} />
            <circle cx={node.x} cy={node.y * 0.6} r={node.size * 0.5} fill={node.color} opacity={0.1} />
            <text x={node.x} y={node.y * 0.6 + node.size * 0.6} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="2.5">{node.label}</text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
