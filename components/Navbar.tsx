"use client";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { nav, site } from "@/data/content";

export default function Navbar() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setProgress((h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    nav.forEach((n) => { const el = document.querySelector(n.href); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/70">
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent">
        <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" style={{ width: `${progress}%` }} />
      </div>
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-3 px-5 sm:px-8">
        <a href="#top" className="font-bold text-slate-900 dark:text-white">{site.name.split(" ")[0]}<span className="grad-text"> {site.name.split(" ").slice(1).join(" ")}</span></a>
        <div className="flex items-center gap-3">
          <ul className="hidden gap-1 text-sm md:flex">
            {nav.map((n) => {
              const on = active === n.href.slice(1);
              return (
                <li key={n.href}>
                  <a href={n.href} className={`rounded-full px-3 py-1.5 transition ${on ? "bg-accent/10 text-accent dark:text-accent-dark" : "hover:bg-slate-100 dark:hover:bg-slate-800"}`}>{n.label}</a>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}
            className="rounded-full border border-slate-200 px-3 py-2 text-lg leading-none md:hidden dark:border-slate-700">{open ? "✕" : "☰"}</button>
        </div>
      </div>
      {open && (
        <ul className="border-t border-slate-200 bg-white px-5 py-3 md:hidden dark:border-slate-800 dark:bg-slate-950">
          {nav.map((n) => (
            <li key={n.href}><a onClick={() => setOpen(false)} href={n.href} className="block rounded-lg px-3 py-2.5 hover:bg-slate-100 dark:hover:bg-slate-800">{n.label}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
