"use client";
import { useState } from "react";
import { work } from "@/data/content";

export default function WorkList() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="border-t border-ink">
      {work.caseStudies.map((c, i) => {
        const isOpen = open === i;
        return (
          <li key={c.title} className="group border-b border-line">
            <button onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} data-cursor
              className="grid w-full grid-cols-[auto_1fr_auto] items-baseline gap-x-4 py-6 text-left md:grid-cols-12 md:py-8">
              <span className="label text-muted md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
              <span className="display text-3xl transition-transform duration-500 group-hover:translate-x-3 sm:text-5xl md:col-span-7 lg:text-6xl">{c.title}</span>
              <span className="label hidden text-muted md:col-span-3 md:block">{c.tag}</span>
              <span className={`label justify-self-end text-xl transition-transform duration-500 md:col-span-1 ${isOpen ? "rotate-45" : ""}`}>+</span>
            </button>
            <div className={`acc ${isOpen ? "open" : ""}`}>
              <div>
                <dl className="grid gap-6 pb-10 md:grid-cols-12">
                  {([["Problem", c.problem], ["My role", c.role], ["Approach", c.approach], ["Outcome", c.outcome]] as const).map(([k, v], j) => (
                    <div key={k} className={`md:col-span-3 ${j === 0 ? "md:col-start-2" : ""}`}>
                      <dt className="label mb-2">{k}</dt>
                      <dd className="text-[15px] leading-relaxed text-muted">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
