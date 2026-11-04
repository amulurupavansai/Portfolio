"use client";
import { useEffect, useRef } from "react";
import { hero } from "@/data/content";

/** Iridescent glass blob with a rotating text ring; drifts with the cursor. */
export default function Orb() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (matchMedia("(pointer: coarse)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const f = (e: MouseEvent) => {
      const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
      if (ref.current) ref.current.style.transform = `translate(${x * 40}px, ${y * 30}px) rotate(${x * 8}deg)`;
    };
    addEventListener("mousemove", f);
    return () => removeEventListener("mousemove", f);
  }, []);

  return (
    <div className="pointer-events-none absolute left-1/2 top-[46%] z-10 w-[62vw] max-w-[560px] -translate-x-1/2 -translate-y-1/2 md:w-[30vw]">
      <svg width="0" height="0" className="absolute" aria-hidden>
        <filter id="glass" x="-50%" y="-50%" width="200%" height="200%">
          <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="3" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="26" />
        </filter>
      </svg>
      <div ref={ref} className="orb-wrap">
        <div className="orb" />
      </div>
      <svg viewBox="0 0 400 400" className="orbit absolute left-1/2 top-1/2 w-[135%] max-w-none -translate-x-1/2 -translate-y-1/2" aria-hidden>
        <defs><path id="circ" d="M200,200 m-170,0 a170,170 0 1,1 340,0 a170,170 0 1,1 -340,0" /></defs>
        <text fontSize="13" fontWeight="600" letterSpacing="6" fill="currentColor" className="text-ink">
          <textPath href="#circ" textLength="1060" lengthAdjust="spacing">{`${hero.ringText} ${hero.ringText} ${hero.ringText}`}</textPath>
        </text>
      </svg>
    </div>
  );
}
