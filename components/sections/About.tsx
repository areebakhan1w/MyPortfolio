"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const traits = [
  {
    icon: "⬡",
    label: "AI Systems",
    desc: "Building intelligent agents and automation workflows that solve real problems.",
    color: "#00d4ff",
  },
  {
    icon: "◈",
    label: "Prompt Engineering",
    desc: "Crafting sophisticated prompts that unlock the full potential of language models.",
    color: "#a855f7",
  },
  {
    icon: "◉",
    label: "UI/UX Design",
    desc: "Designing interfaces that feel intuitive, beautiful, and deeply human.",
    color: "#00ffea",
  },
  {
    icon: "◎",
    label: "Chrome Extensions",
    desc: "Building browser-native tools that augment how people interact with the web.",
    color: "#f59e0b",
  },
];

const timeline = [
  { year: "2022", event: "Started Software Engineering at RIPHAH" },
  { year: "2023", event: "Discovered passion for AI & Prompt Engineering" },
  { year: "2024", event: "Built first AI agents and Chrome extensions" },
  { year: "2025", event: "7th Semester — building futuristic products" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden bg-[#030712]">
      {/* Background grid */}
      <div className="absolute inset-0 dot-grid opacity-20" />

      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(168,85,247,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="section-label mb-4">01. About Me</div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight">
            A curious builder,{" "}
            <span className="gradient-text">obsessed with intelligence</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — story */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-white/70 text-lg leading-relaxed">
                I'm a{" "}
                <span className="text-[#00d4ff] font-semibold">Software Engineering student</span>{" "}
                at RIPHAH University (7th semester), but what defines me isn't my degree — it's my
                obsession with building systems that think.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                I sit at the intersection of{" "}
                <span className="text-[#a855f7] font-semibold">AI engineering</span>,{" "}
                <span className="text-[#00ffea] font-semibold">product design</span>, and{" "}
                <span className="text-white font-semibold">creative technology</span>. I don't just
                build tools — I craft experiences that make people think{" "}
                <em className="text-white/50">"how did I ever live without this?"</em>
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                From designing AI agents that automate complex workflows, to building Chrome
                extensions that reshape how we browse, to creating immersive UI/UX experiences —
                every project is a chance to push what's possible.
              </p>

              {/* Quote */}
              <div className="mt-8 pl-6 border-l-2 border-[#00d4ff]/30">
                <p className="text-white/50 italic text-base font-light leading-relaxed">
                  "I believe the future belongs to those who can make AI feel human and technology
                  feel magical."
                </p>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12"
            >
              <div className="section-label mb-6">Journey</div>
              <div className="relative space-y-0">
                <div className="absolute left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff]/30 via-[#a855f7]/20 to-transparent" />
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                    className="flex items-center gap-6 py-3"
                  >
                    <div className="relative z-10 w-20 text-right">
                      <span className="font-mono text-sm text-[#00d4ff]/70">{item.year}</span>
                    </div>
                    <div className="relative z-10 w-2 h-2 rounded-full bg-[#00d4ff]/60 ring-4 ring-[#030712]" />
                    <p className="text-white/60 text-sm">{item.event}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — trait cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {traits.map((trait, i) => (
              <motion.div
                key={trait.label}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                className="glass card-glow rounded-2xl p-6 border border-white/5"
                style={{
                  background: `radial-gradient(circle at top left, ${trait.color}08 0%, transparent 60%)`,
                }}
              >
                <div
                  className="text-2xl mb-4 font-mono"
                  style={{ color: trait.color }}
                >
                  {trait.icon}
                </div>
                <h3 className="font-display font-semibold text-white mb-2">{trait.label}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{trait.desc}</p>
              </motion.div>
            ))}

            {/* Identity card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="sm:col-span-2 glass rounded-2xl p-6 border border-[#00d4ff]/10 holographic"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="section-label">Identity Stack</div>
                <div className="w-2 h-2 rounded-full bg-[#00ffea] animate-pulse" />
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "AI Engineer",
                  "Prompt Engineer",
                  "UI/UX Designer",
                  "SE Student",
                  "Product Builder",
                  "Extension Dev",
                  "Agent Builder",
                  "Creative Technologist",
                  "AI Systems Architect",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full font-mono text-xs border border-white/10 text-white/60 hover:border-[#00d4ff]/40 hover:text-[#00d4ff] transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
