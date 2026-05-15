"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg neon-border flex items-center justify-center">
              <span className="text-[#00d4ff] font-mono text-sm font-bold">A</span>
            </div>
            <span className="font-display font-semibold text-white/70">
              Areeba Nadeem<span className="text-[#00d4ff]">.</span>
            </span>
          </div>

          {/* Copyright */}
          <div className="font-mono text-xs text-white/25 text-center">
            <span>© 2025 Areeba Nadeem — Built with </span>
            <span className="text-[#00d4ff]">Next.js</span>
            <span>, </span>
            <span className="text-[#a855f7]">Three.js</span>
            <span> & </span>
            <span className="text-[#00ffea]">Framer Motion</span>
          </div>

          {/* Right links */}
          <div className="flex items-center gap-6">
            {[
              { label: "GitHub", href: "https://github.com/areebakhan1w" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/areeba-khan-8a5a51321" },
              { label: "Email", href: "mailto:areebanadeem674@gmail.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-white/30 hover:text-[#00d4ff] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />
    </footer>
  );
}
