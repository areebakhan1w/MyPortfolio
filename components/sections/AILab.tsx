"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const experiments = [
  {
    id: "EXP-001",
    name: "Prompt Architecture",
    description: "Designing multi-layered prompt systems with chain-of-thought reasoning, few-shot learning, and role conditioning for production AI applications.",
    tags: ["LLMs", "System Design", "CoT"],
    status: "Active",
    color: "#00d4ff",
    metrics: { accuracy: "94%", latency: "1.2s", tokens: "2.4K" },
  },
  {
    id: "EXP-002",
    name: "AI Agent Workflows",
    description: "Building autonomous agent systems with tool use, memory management, and multi-step reasoning using LangChain and custom orchestration layers.",
    tags: ["LangChain", "Agents", "Automation"],
    status: "Active",
    color: "#a855f7",
    metrics: { tasks: "48+", autonomy: "87%", uptime: "99.2%" },
  },
  {
    id: "EXP-003",
    name: "Extension Architecture",
    description: "Designing Chrome extension systems with AI integration — content scripts, background workers, and popup interfaces that augment browser experiences.",
    tags: ["Chrome API", "TypeScript", "AI"],
    status: "Completed",
    color: "#00ffea",
    metrics: { users: "200+", rating: "4.8★", features: "12" },
  },
  {
    id: "EXP-004",
    name: "Multimodal Interfaces",
    description: "Experimenting with voice, vision, and text combined in unified AI interfaces — building systems that understand context across modalities.",
    tags: ["Vision AI", "Speech", "Multimodal"],
    status: "Research",
    color: "#f59e0b",
    metrics: { modalities: "3", accuracy: "89%", latency: "800ms" },
  },
  {
    id: "EXP-005",
    name: "AI UX Patterns",
    description: "Researching and prototyping UX patterns specific to AI products — loading states, uncertainty communication, error handling, and trust-building interfaces.",
    tags: ["UX Research", "AI Design", "Patterns"],
    status: "Ongoing",
    color: "#ec4899",
    metrics: { patterns: "24", tested: "8", insights: "60+" },
  },
];

const terminalLines = [
  { text: "$ initializing AI Lab environment...", delay: 0, color: "#00d4ff" },
  { text: "> Loading language models", delay: 0.3, color: "rgba(255,255,255,0.5)" },
  { text: "> Connecting to agent orchestrator", delay: 0.6, color: "rgba(255,255,255,0.5)" },
  { text: "> Prompt engineering modules: LOADED", delay: 0.9, color: "#00ffea" },
  { text: "> Neural processing: ACTIVE", delay: 1.2, color: "#00ffea" },
  { text: "$ ready. Welcome to the lab.", delay: 1.5, color: "#a855f7" },
];

export default function AILab() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeExp, setActiveExp] = useState<number | null>(null);

  return (
    <section id="ailab" className="relative py-32 overflow-hidden bg-[#030712]">
      <div className="absolute inset-0 dot-grid opacity-15" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[radial-gradient(ellipse,rgba(168,85,247,0.07)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="section-label mb-4">04. AI Lab</div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight">
            AI Experimentation{" "}
            <span className="gradient-text">Laboratory</span>
          </h2>
          <p className="mt-4 text-white/40 text-lg max-w-xl">
            Where ideas become intelligent systems. Active experiments, research, and exploration at the frontier of AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Terminal widget */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-2xl border border-[#00d4ff]/10 overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]/70" />
                <div className="w-3 h-3 rounded-full bg-[#f59e0b]/70" />
                <div className="w-3 h-3 rounded-full bg-[#10b981]/70" />
                <span className="ml-4 font-mono text-xs text-white/30">areeba@ai-lab ~ %</span>
              </div>

              {/* Terminal body */}
              <div className="p-6 font-mono text-sm space-y-2 min-h-[220px]">
                {terminalLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: line.delay + 0.5, duration: 0.4 }}
                    className="flex items-start gap-0"
                    style={{ color: line.color }}
                  >
                    <span className="text-xs leading-relaxed">{line.text}</span>
                  </motion.div>
                ))}
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-2 h-4 bg-[#00d4ff] mt-1"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { label: "Experiments", value: "5+", color: "#00d4ff" },
                { label: "AI Models Used", value: "8+", color: "#a855f7" },
                { label: "Automations", value: "20+", color: "#00ffea" },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2 }}
                  className="glass rounded-xl p-4 border border-white/5 text-center"
                >
                  <div className="font-display font-bold text-xl" style={{ color: s.color }}>{s.value}</div>
                  <div className="font-mono text-xs text-white/30 mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experiments list */}
          <div className="lg:col-span-3 space-y-3">
            {experiments.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              >
                <div
                  className="glass rounded-xl border border-white/5 cursor-pointer overflow-hidden transition-all duration-300 hover:border-white/10"
                  onClick={() => setActiveExp(activeExp === i ? null : i)}
                  data-cursor-hover
                  style={{
                    background: activeExp === i ? `radial-gradient(circle at top left, ${exp.color}08, transparent 60%)` : undefined,
                    borderColor: activeExp === i ? `${exp.color}30` : undefined,
                  }}
                >
                  <div className="flex items-center gap-4 p-4">
                    {/* Status dot */}
                    <div className="relative shrink-0">
                      <div className="w-2 h-2 rounded-full" style={{ background: exp.color }} />
                      {exp.status === "Active" && (
                        <div
                          className="absolute inset-0 rounded-full animate-ping"
                          style={{ background: exp.color, opacity: 0.4 }}
                        />
                      )}
                    </div>

                    {/* ID & name */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-white/25">{exp.id}</span>
                        <span
                          className="font-mono text-xs px-2 py-0.5 rounded border"
                          style={{ color: exp.color, borderColor: `${exp.color}30` }}
                        >
                          {exp.status}
                        </span>
                      </div>
                      <h3 className="font-display font-semibold text-white mt-0.5">{exp.name}</h3>
                    </div>

                    <motion.div
                      animate={{ rotate: activeExp === i ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 text-white/20 text-lg"
                    >
                      +
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {activeExp === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 border-t border-white/5 pt-4">
                          <p className="text-white/60 text-sm leading-relaxed mb-4">{exp.description}</p>
                          <div className="flex items-center gap-2 mb-4">
                            {exp.tags.map((tag) => (
                              <span
                                key={tag}
                                className="font-mono text-xs px-2 py-1 rounded border"
                                style={{ color: exp.color, borderColor: `${exp.color}25`, background: `${exp.color}08` }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-6">
                            {Object.entries(exp.metrics).map(([k, v]) => (
                              <div key={k}>
                                <div className="font-display font-bold text-sm" style={{ color: exp.color }}>{v}</div>
                                <div className="font-mono text-xs text-white/25 capitalize">{k}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
