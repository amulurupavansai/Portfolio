"use client";
import { useState } from "react";
import { contact } from "@/data/content";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const configured = !contact.formspreeId.startsWith("YOUR_");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!configured) return;
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${contact.formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });
      if (res.ok) { setStatus("ok"); e.currentTarget.reset(); } else setStatus("error");
    } catch { setStatus("error"); }
  }

  const field = "mt-2 w-full border-0 border-b border-ink bg-transparent px-0 py-3 text-lg text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-0";
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <label className="label block">{contact.form.name}<input name="name" required className={field} /></label>
      <label className="label block">{contact.form.email}<input name="email" type="email" required className={field} /></label>
      <label className="label block">{contact.form.message}<textarea name="message" rows={4} required className={field} /></label>
      <button data-cursor disabled={!configured || status === "sending"}
        className="rounded-full bg-ink px-8 py-4 text-sm font-semibold text-bg transition hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-50">
        {status === "sending" ? "Sending…" : contact.form.submit}
      </button>
      {!configured && <p className="text-sm text-muted">{contact.form.notConfigured}</p>}
      {status === "ok" && <p role="status" className="text-sm">{contact.form.success}</p>}
      {status === "error" && <p role="alert" className="text-sm">{contact.form.error}</p>}
    </form>
  );
}
