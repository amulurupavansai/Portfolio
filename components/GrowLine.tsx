"use client";
import { useEffect, useRef } from "react";

export default function GrowLine({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); io.disconnect(); } }, { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <span ref={ref} aria-hidden className={`tl-line ${className}`} />;
}
