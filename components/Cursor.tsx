"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (matchMedia("(pointer: coarse)").matches) return;
    let x = 0, y = 0, cx = 0, cy = 0, raf = 0;
    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      ref.current?.classList.toggle("big", !!(e.target as Element).closest?.("a,button,[data-cursor]"));
    };
    const tick = () => { cx += (x - cx) * 0.2; cy += (y - cy) * 0.2; if (ref.current) ref.current.style.transform = `translate(${cx}px,${cy}px)`; raf = requestAnimationFrame(tick); };
    addEventListener("mousemove", move); raf = requestAnimationFrame(tick);
    return () => { removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);
  return <div ref={ref} className="cursor" aria-hidden />;
}
