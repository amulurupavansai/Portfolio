"use client";
import { useEffect, useState } from "react";
import { hero } from "@/data/content";

/** WAKE / DREAM pill = light / dark mode. */
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  const set = (next: boolean) => {
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };
  const base = "rounded-full px-5 py-2.5 text-sm font-semibold tracking-tight transition-all duration-300";
  return (
    <div role="group" aria-label="Colour mode" data-cursor
      className="fixed bottom-5 left-1/2 z-[60] flex -translate-x-1/2 gap-1 rounded-full border border-line bg-card/80 p-1 shadow-xl backdrop-blur-xl">
      <button aria-pressed={!dark} onClick={() => set(false)} className={`${base} ${!dark ? "bg-ink text-bg" : "text-muted hover:text-ink"}`}>{hero.modes.light}</button>
      <button aria-pressed={dark} onClick={() => set(true)} className={`${base} ${dark ? "bg-ink text-bg" : "text-muted hover:text-ink"}`}>
        <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />{hero.modes.dark}
      </button>
    </div>
  );
}
