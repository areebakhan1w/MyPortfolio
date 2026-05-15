"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "AI Lab", href: "#ailab" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (y) => setScrolled(y > 50));
    return unsub;
  }, [scrollY]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 transition-all duration-500 ${
          scrolled
            ? "glass rounded-2xl mx-4 border border-white/5"
            : ""
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-lg neon-border flex items-center justify-center">
              <span className="text-[#00d4ff] font-mono text-sm font-bold">A</span>
            </div>
            <span className="font-display font-semibold text-white/90 group-hover:text-white transition-colors">
              Areeba<span className="text-[#00d4ff]">.</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => handleNav(link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="relative font-mono text-sm text-white/50 hover:text-white transition-colors group"
              >
                <span className="text-[#00d4ff]/60 mr-1 text-xs">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00d4ff] transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="mailto:areebanadeem674@gmail.com"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="px-4 py-2 text-sm font-mono text-[#00d4ff] neon-border rounded-lg hover:bg-[#00d4ff]/10 transition-all duration-300"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-[#00d4ff]"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-4 h-px bg-white/50"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-[#00d4ff]"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="md:hidden overflow-hidden mx-4 mt-2 glass rounded-2xl border border-white/5"
      >
        <div className="p-6 flex flex-col gap-4">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left font-mono text-sm text-white/60 hover:text-white transition-colors"
            >
              <span className="text-[#00d4ff]/60 mr-2">
                {String(i + 1).padStart(2, "0")}.
              </span>
              {link.label}
            </button>
          ))}
          <a
            href="mailto:areebanadeem674@gmail.com"
            className="mt-2 py-2 text-center text-sm font-mono text-[#00d4ff] neon-border rounded-lg"
          >
            Hire Me
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}
