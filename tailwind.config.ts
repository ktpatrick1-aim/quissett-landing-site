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
        cedar:     "#7C6B52",
        fog:       "#8D9EA3",
        harbor:    "#1D3A47",
        seagrass:  "#6B7C5E",
        sand:      "#C4AA84",
        cream:     "#F4EFE6",
        driftwood: "#E8E0D2",
        tide:      "#4A7C8E",
        ink:       "#1A1A18",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3rem, 8vw, 7rem)",   { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-xl":  ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.0",  letterSpacing: "-0.02em" }],
        "display-lg":  ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "display-md":  ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "section": "6rem",
        "section-sm": "3rem",
      },
      maxWidth: {
        "prose-wide": "72ch",
        "content": "1320px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
