import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b1110",
        mint: {
          DEFAULT: "#a7f3d0",
          deep: "#34d399",
        },
        paper: "#f6f7f4",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        display: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(52, 211, 153, 0.14)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(167, 243, 208, 0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(167, 243, 208, 0.035) 1px, transparent 1px)",
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
