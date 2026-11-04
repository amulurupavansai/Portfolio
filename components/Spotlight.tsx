"use client";
import { useRef } from "react";

/** Wrapper that makes a soft glow + border follow the cursor. */
export default function Spotlight({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return <div ref={ref} onMouseMove={move} className={`spot ${className}`}>{children}</div>;
}
