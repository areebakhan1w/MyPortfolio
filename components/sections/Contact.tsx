"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const socialLinks = [
  {
    label: "GitHub",
    handle: "@areebakhan1w",
    href: "https://github.com/areebakhan1w",
    color: "#00d4ff",
    icon: "GH",
  },
  {
    label: "LinkedIn",
    handle: "Areeba Khan",
    href: "https://www.linkedin.com/in/areeba-khan-8a5a51321",
    color: "#0ea5e9",
    icon: "LI",
  },
  {
    label: "Behance",
    handle: "@areebakhan78",
    href: "https://www.behance.net/areebakhan78",
    color: "#a855f7",
    icon: "Be",
  },
  {
    label: "Instagram",
    handle: "@ariibah_khan",
    href: "https://instagram.com/ariibah_khan",
    color: "#ec4899",
    icon: "IG",
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-[#030712]">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(168,85,247,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="section-label mb-4 justify-center flex">05. Contact</div>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
            Let's build{" "}
            <span className="gradient-text">something</span>
            <br />
            <span className="text-white/20">extraordinary</span>
          </h2>
          <p className="mt-6 text-white/40 text-lg max-w-lg mx-auto">
            Open to collaborations, freelance work, internships, and interesting conversations about AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-mono text-xs text-white/30 tracking-widest uppercase mb-2 block">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Ahmed Khan"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 font-display text-sm focus:outline-none focus:border-[#00d4ff]/40 transition-all duration-300 focus:bg-white/[0.05]"
                  style={{ cursor: "text" }}
                />
              </div>
              <div>
                <label className="font-mono text-xs text-white/30 tracking-widest uppercase mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 font-display text-sm focus:outline-none focus:border-[#00d4ff]/40 transition-all duration-300 focus:bg-white/[0.05]"
                  style={{ cursor: "text" }}
                />
              </div>
              <div>
                <label className="font-mono text-xs text-white/30 tracking-widest uppercase mb-2 block">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your project or idea..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 font-display text-sm focus:outline-none focus:border-[#00d4ff]/40 transition-all duration-300 focus:bg-white/[0.05] resize-none"
                  style={{ cursor: "text" }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending || sent}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl font-display font-semibold text-sm text-black transition-all duration-300 relative overflow-hidden"
                style={{
                  background: sent
                    ? "linear-gradient(135deg, #10b981, #00ffea)"
                    : "linear-gradient(135deg, #00d4ff, #a855f7)",
                  boxShadow: "0 0 30px rgba(0,212,255,0.2)",
                }}
              >
                {sending ? (
                  <span className="flex items-center justify-center gap-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                    />
                    Sending...
                  </span>
                ) : sent ? (
                  "Message Sent ✓"
                ) : (
                  "Send Message"
                )}
              </motion.button>

              <p className="text-white/30 text-xs text-center font-mono">
                Or email directly:{" "}
                <a
                  href="mailto:areebanadeem674@gmail.com"
                  className="text-[#00d4ff] hover:underline"
                >
                  areebanadeem674@gmail.com
                </a>
              </p>
            </form>
          </motion.div>

          {/* Right — socials + info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="section-label mb-6">Find me on</div>

            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                className="flex items-center gap-5 p-5 glass rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300 group card-glow"
                style={{ background: `radial-gradient(circle at left, ${link.color}06, transparent 60%)` }}
                data-cursor-hover
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-sm shrink-0"
                  style={{
                    background: `${link.color}15`,
                    color: link.color,
                    border: `1px solid ${link.color}25`,
                  }}
                >
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-semibold text-white group-hover:text-white transition-colors">
                    {link.label}
                  </div>
                  <div className="font-mono text-xs text-white/40 mt-0.5">{link.handle}</div>
                </div>
                <div className="text-white/20 group-hover:text-white/50 transition-colors shrink-0">↗</div>
              </motion.a>
            ))}

            {/* Availability banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="p-5 glass rounded-xl border border-[#00ffea]/20 holographic"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-[#00ffea]" />
                  <div className="absolute inset-0 rounded-full bg-[#00ffea] animate-ping opacity-40" />
                </div>
                <div>
                  <div className="font-display font-semibold text-white text-sm">Available for opportunities</div>
                  <div className="font-mono text-xs text-white/40 mt-0.5">
                    Internships · Freelance · Collaborations · Research
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
