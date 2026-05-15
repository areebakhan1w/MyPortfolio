"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#030712]"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Glowing orb */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(0,212,255,0.15)_0%,rgba(168,85,247,0.08)_40%,transparent_70%)] blur-3xl" />

      {/* Logo / Name */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-mono text-xs text-[#00d4ff] tracking-[0.4em] uppercase mb-6"
        >
          Initializing
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-5xl md:text-7xl font-display font-bold gradient-text mb-2"
        >
          Areeba
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-xl font-display font-light text-white/40 tracking-widest"
        >
          NADEEM
        </motion.h2>

        {/* Loading bar */}
        <motion.div
          className="mt-12 w-64 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="flex justify-between mb-2 font-mono text-xs text-white/30">
            <span>Loading Experience</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
            >
              ▮
            </motion.span>
          </div>
          <div className="h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#00d4ff] to-[#a855f7]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 2, ease: [0.23, 1, 0.32, 1] }}
            />
          </div>
        </motion.div>

        {/* Floating dots */}
        <motion.div
          className="flex gap-2 justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-[#00d4ff]"
              animate={{ opacity: [0.2, 1, 0.2], scaleY: [1, 2, 1] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.1 + 1.2,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Corner decorations */}
      {["top-4 left-4", "top-4 right-4", "bottom-4 left-4", "bottom-4 right-4"].map(
        (pos, i) => (
          <div
            key={i}
            className={`absolute ${pos} w-8 h-8 border-[#00d4ff]/30`}
            style={{
              borderTop: i < 2 ? "1px solid" : "none",
              borderBottom: i >= 2 ? "1px solid" : "none",
              borderLeft: i % 2 === 0 ? "1px solid" : "none",
              borderRight: i % 2 === 1 ? "1px solid" : "none",
            }}
          />
        )
      )}
    </motion.div>
  );
}
