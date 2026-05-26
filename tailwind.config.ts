import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["HelveticaNowDisplay", "var(--font-heading)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      colors: {
        fluxora: {
          blue: "#0041FB",
          "blue-dark": "#0034C8",
          "blue-soft": "rgba(0, 65, 251, 0.14)",
          black: "#090909",
          surface: "#111111",
          "surface-2": "#181818",
          "blue-card": "#002FA8",
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "blue-glow":
          "0 0 32px rgba(0, 65, 251, 0.38), 0 0 80px rgba(0, 65, 251, 0.18)",
        glass:
          "inset 0 1px 0 rgba(255,255,255,0.07), 0 16px 60px rgba(0,0,0,0.60)",
        "card-dark": "0 4px 24px rgba(0,0,0,0.50)",
      },
    },
  },
  plugins: [],
};

export default config;
