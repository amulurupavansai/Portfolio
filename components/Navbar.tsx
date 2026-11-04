"use client";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/content";

export default function Navbar() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const f = () => { const h = document.documentElement; setProgress((h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100); };
    f(); addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    nav.forEach((n) => { const el = document.querySelector(n.href); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <header className="pad fixed inset-x-0 top-0 z-50 grid h-[60px] grid-cols-4 items-center md:grid-cols-12">
        <div className="absolute inset-x-0 top-0 h-[2px]"><div className="h-full bg-ink" style={{ width: `${progress}%` }} /></div>
        <a href="#top" data-cursor className="label col-span-2 md:col-span-3">{site.name}</a>
        <nav className="col-span-6 col-start-4 hidden gap-5 md:flex" aria-label="Primary">
          {nav.filter((n) => n.href !== "#contact").map((n) => (
            <a key={n.href} href={n.href} data-cursor className={`label relative pb-0.5 transition-opacity ${active === n.href.slice(1) ? "opacity-100" : "opacity-60 hover:opacity-100"}`}>
              {n.label}
              <span className={`absolute inset-x-0 bottom-0 h-[2px] bg-ink transition-transform duration-300 ${active === n.href.slice(1) ? "scale-x-100" : "scale-x-0"}`} />
            </a>
          ))}
        </nav>
        <a href="#contact" data-cursor className="label col-span-3 col-start-10 hidden justify-self-end md:block">Contact</a>
        <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu" className="label col-span-2 col-start-3 justify-self-end md:hidden">{open ? "Close ✕" : "Menu ☰"}</button>
      </header>
      {open && (
        <div className="pad fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-bg md:hidden">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="display text-6xl">{n.label}</a>
          ))}
        </div>
      )}
    </>
  );
}
