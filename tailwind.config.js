import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      // Adswise palette. Channels live in globals.css.
      colors: {
        background: "rgb(var(--c-background) / <alpha-value>)", // Pure Black #050505
        raised: "rgb(var(--c-raised) / <alpha-value>)", // Soft Black #0D0D0D: cards, navbar
        surface: "rgb(var(--c-surface) / <alpha-value>)", // Soft Black #0D0D0D: section bands
        charcoal: "rgb(var(--c-charcoal) / <alpha-value>)", // Dark Gray #181818
        ink: "rgb(var(--c-ink) / <alpha-value>)", // Pure White #FFFFFF: headings
        body: "rgb(var(--c-body) / <alpha-value>)", // Light Gray #A6A6A6: paragraphs
        line: "rgb(var(--c-line) / <alpha-value>)", // Border Gray #303030
        growth: "rgb(var(--c-growth) / <alpha-value>)", // Neon Lime #D7FF00
        glow: "rgb(var(--c-glow) / <alpha-value>)", // Lime Glow #A8C900
        muted: "rgb(var(--c-body) / <alpha-value>)",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "expo-in-out": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [typography],
};
