import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.ts"],
  theme: {
    extend: {
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
      colors: {
        bg: "var(--bg)", ink: "var(--ink)", muted: "var(--muted)",
        line: "var(--line)", card: "var(--card)", accent: "var(--accent)",
      },
    },
  },
  plugins: [],
};
export default config;
