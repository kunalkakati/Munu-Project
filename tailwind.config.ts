import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F1E2",
        paper: "#FFFDF7",
        ink: "#2E211A",
        "ink-soft": "#5A4A3E",
        brick: "#A13D2D",
        "brick-dark": "#7E2E22",
        gold: "#A6822C",
        "gold-light": "#D9BE7F",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-worksans)", "sans-serif"],
      },
      borderRadius: {
        soft: "0.65rem",
      },
    },
  },
  plugins: [],
};
export default config;
