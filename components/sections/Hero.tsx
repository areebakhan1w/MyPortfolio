"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import dynamic from "next/dynamic";

const HeroCanvas = dynamic(() => import("@/components/3d/HeroCanvas"), {
  ssr: false,
  loading: () => null,
});

const roles = [
  "AI Engineer",
  "Prompt Engineer",
  "UI/UX Designer",
  "Chrome Extension Developer",
  "AI Agent Builder",
  "Creative Technologist",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 50, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (typing) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentRole.slice(0, displayed.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 30);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712]"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[radial-gradient(ellipse,rgba(0,212,255,0.12)_0%,rgba(168,85,247,0.08)_40%,transparent_70%)] blur-3xl" />
      </div>

      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      {/* Mouse parallax layer */}
      <motion.div
        style={{ rotateX, rotateY, transformPerspective: 1200 }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-10 border border-[#00d4ff]/20"
        >
          <span className="w-2 h-2 rounded-full bg-[#00ffea] animate-pulse" />
          <span className="font-mono text-xs text-white/60">
            Available for work — 7th Semester SE Student @ RIPHAH
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="text-6xl md:text-8xl lg:text-[7rem] font-display font-bold leading-none tracking-tight mb-6"
        >
          <span className="block text-white">Areeba</span>
          <span className="block gradient-text">Nadeem</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-xl md:text-2xl font-mono text-[#00d4ff] mb-6 h-8 flex items-center justify-center gap-2"
        >
          <span className="text-white/30">{"<"}</span>
          <span>{displayed}</span>
          <span
            className="inline-block w-0.5 h-5 bg-[#00d4ff] animate-[blink_1s_step-end_infinite]"
          />
          <span className="text-white/30">{"/>"}</span>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Designing Intelligent Digital Experiences Powered by AI.{" "}
          <span className="text-white/30">
            I build AI systems, products, extensions, and immersive user experiences
            that blend intelligence with creativity.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            variant="primary"
          >
            View Projects
          </MagneticButton>
          <MagneticButton
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            variant="secondary"
          >
            Get in Touch
          </MagneticButton>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-white/30 hover:text-[#00d4ff] transition-colors tracking-widest uppercase"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
      >
        <span className="font-mono text-xs text-white/30 group-hover:text-white/50 transition-colors tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-[#00d4ff]/50 to-transparent"
        />
      </motion.button>

      {/* Corner decorations */}
      <div className="absolute top-24 left-6 w-32 h-32 border-l border-t border-[#00d4ff]/10 pointer-events-none" />
      <div className="absolute bottom-12 right-6 w-32 h-32 border-r border-b border-[#a855f7]/10 pointer-events-none" />

      {/* Floating stats */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute left-8 bottom-24 hidden xl:flex flex-col gap-4"
      >
        {[
          { n: "11+", label: "Projects Built" },
          { n: "5+", label: "AI Systems" },
          { n: "2+", label: "Extensions" },
        ].map((s) => (
          <div key={s.label} className="flex flex-col">
            <span className="font-display font-bold text-2xl gradient-text-blue">{s.n}</span>
            <span className="font-mono text-xs text-white/30">{s.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function MagneticButton({
  children,
  onClick,
  variant,
}: {
  children: React.ReactNode;
  onClick: () => void;
  variant: "primary" | "secondary";
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.3);
    y.set((e.clientY - cy) * 0.3);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      className={
        variant === "primary"
          ? "px-8 py-4 rounded-xl font-display font-semibold text-sm bg-gradient-to-r from-[#00d4ff] to-[#a855f7] text-black hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-shadow duration-300"
          : "px-8 py-4 rounded-xl font-display font-semibold text-sm neon-border text-white hover:bg-white/5 transition-all duration-300"
      }
    >
      {children}
    </motion.button>
  );
}

const socialLinks = [
  { label: "GitHub", href: "https://github.com/areebakhan1w" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/areeba-khan-8a5a51321" },
  { label: "Behance", href: "https://www.behance.net/areebakhan78" },
  { label: "Instagram", href: "https://instagram.com/ariibah_khan" },
];
