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

  const field = "w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100";
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <label className="block text-sm font-medium">
        {contact.form.name}
        <input name="name" required className={`${field} mt-1`} />
      </label>
      <label className="block text-sm font-medium">
        {contact.form.email}
        <input name="email" type="email" required className={`${field} mt-1`} />
      </label>
      <label className="block text-sm font-medium">
        {contact.form.message}
        <textarea name="message" rows={5} required className={`${field} mt-1`} />
      </label>
      <button
        disabled={!configured || status === "sending"}
        className="rounded-lg bg-accent px-5 py-2.5 font-medium text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {contact.form.submit}
      </button>
      {!configured && <p className="text-sm text-amber-600 dark:text-amber-400">{contact.form.notConfigured}</p>}
      {status === "ok" && <p role="status" className="text-sm text-emerald-600">{contact.form.success}</p>}
      {status === "error" && <p role="alert" className="text-sm text-red-600">{contact.form.error}</p>}
    </form>
  );
}
