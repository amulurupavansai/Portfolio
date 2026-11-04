"use client";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(scrollY > 600);
    addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);
  return (
    <a href="#top" aria-label="Back to top"
      className={`fixed bottom-5 right-5 z-40 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 px-4 py-3 text-white shadow-lg transition-all hover:-translate-y-1 ${show ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}>↑</a>
  );
}
