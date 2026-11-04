"use client";
import { useState } from "react";
import Spotlight from "./Spotlight";
import { work } from "@/data/content";

export default function WorkGrid() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<string | null>(null);
  const items = work.caseStudies.filter((c) => filter === "All" || c.category === filter);

  return (
    <>
      <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Filter case studies">
        {work.filters.map((f) => (
          <button key={f} role="tab" aria-selected={filter === f} onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${filter === f
              ? "border-transparent bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md"
              : "border-slate-300 hover:border-accent dark:border-slate-700"}`}>{f}</button>
        ))}
      </div>
      <div className="mt-8 grid items-start gap-6 md:grid-cols-2">
        {items.map((c, i) => {
          const isOpen = open === c.title;
          return (
            <Spotlight key={c.title} className="fade-up rounded-2xl border border-slate-200 bg-white/80 transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
              <article className="relative z-10 p-6" style={{ ["--d" as string]: `${i * 60}ms` }}>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent dark:text-accent-dark">{c.tag}</span>
                <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{c.title}</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div><dt className="font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100">Problem</dt><dd>{c.problem}</dd></div>
                  <div><dt className="font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100">Outcome</dt><dd>{c.outcome}</dd></div>
                  {isOpen && (
                    <>
                      <div className="fade-up"><dt className="font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100">My role</dt><dd>{c.role}</dd></div>
                      <div className="fade-up"><dt className="font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100">Approach</dt><dd>{c.approach}</dd></div>
                    </>
                  )}
                </dl>
                <button onClick={() => setOpen(isOpen ? null : c.title)} aria-expanded={isOpen}
                  className="mt-4 text-sm font-medium text-accent hover:underline dark:text-accent-dark">
                  {isOpen ? "Show less ↑" : "My role & approach ↓"}
                </button>
              </article>
            </Spotlight>
          );
        })}
      </div>
    </>
  );
}
