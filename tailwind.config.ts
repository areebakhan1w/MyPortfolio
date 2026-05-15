import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "neon-blue": "#00d4ff",
        "neon-cyan": "#00ffea",
        "neon-purple": "#9b59b6",
        "deep-purple": "#6c3483",
        "glow-blue": "#0ea5e9",
        "glow-purple": "#a855f7",
        "dark-bg": "#030712",
        "dark-card": "#0d1117",
        "dark-border": "#1f2937",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        display: ["var(--font-display)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glow-gradient":
          "radial-gradient(ellipse at center, rgba(0,212,255,0.15) 0%, transparent 60%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "spin-slow": "spin 20s linear infinite",
        "orbit-1": "orbit1 8s linear infinite",
        "orbit-2": "orbit2 12s linear infinite",
        "orbit-3": "orbit3 16s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: { boxShadow: "0 0 20px rgba(0,212,255,0.3)" },
          to: { boxShadow: "0 0 40px rgba(0,212,255,0.8), 0 0 80px rgba(0,212,255,0.3)" },
        },
        orbit1: {
          "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
        orbit2: {
          "0%": { transform: "rotate(120deg) translateX(160px) rotate(-120deg)" },
          "100%": { transform: "rotate(480deg) translateX(160px) rotate(-480deg)" },
        },
        orbit3: {
          "0%": { transform: "rotate(240deg) translateX(200px) rotate(-240deg)" },
          "100%": { transform: "rotate(600deg) translateX(200px) rotate(-600deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      boxShadow: {
        "neon-blue": "0 0 20px rgba(0,212,255,0.5), 0 0 60px rgba(0,212,255,0.2)",
        "neon-purple": "0 0 20px rgba(168,85,247,0.5), 0 0 60px rgba(168,85,247,0.2)",
        "glass": "0 8px 32px 0 rgba(0,0,0,0.37)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
