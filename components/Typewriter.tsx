"use client";
import { useEffect, useState } from "react";

export default function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState(words[0] ?? "");
  const [del, setDel] = useState(false);
  const [reduce, setReduce] = useState(false);
  useEffect(() => setReduce(matchMedia("(prefers-reduced-motion: reduce)").matches), []);
  useEffect(() => {
    if (reduce) return;
    const word = words[i % words.length];
    let delay = del ? 35 : 75;
    if (!del && text === word) delay = 1600;
    if (del && text === "") delay = 300;
    const t = setTimeout(() => {
      if (!del && text === word) return setDel(true);
      if (del && text === "") { setDel(false); return setI((x) => x + 1); }
      setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, del, i, words, reduce]);
  return <span className="grad-text font-semibold">{text}<span className="caret" aria-hidden /></span>;
}
