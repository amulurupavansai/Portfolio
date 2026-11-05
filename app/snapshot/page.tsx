import type { Metadata } from "next";
import SubHeader from "@/components/SubHeader";
import { snapshot, site, contact, skipLink } from "@/data/content";

export const metadata: Metadata = {
  title: snapshot.pageTitle,
  description: snapshot.pageDescription,
  alternates: { canonical: "/snapshot" },
  openGraph: { images: ["/og.png"], url: `${site.url}/snapshot`, title: snapshot.pageTitle, description: snapshot.pageDescription },
};

export default function SnapshotPage() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-3 focus:py-2 focus:text-bg">{skipLink}</a>
      <SubHeader />
      <main id="main" className="pad py-10 md:py-16 print:p-0">
        <div className="snapshot-sheet mx-auto max-w-4xl border border-line bg-card p-8 md:p-12 print:border-0">
          <p className="label text-muted">{snapshot.pageTitle}</p>
          <h1 className="display mt-3 text-5xl sm:text-6xl">{site.name}</h1>
          <p className="mt-3 text-lg font-semibold">{snapshot.headline}</p>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">{snapshot.summary}</p>

          <div className="mt-10 grid gap-8 border-t border-ink pt-8 sm:grid-cols-3">
            {snapshot.columns.map((c) => (
              <section key={c.name} aria-labelledby={`s-${c.name}`}>
                <h2 id={`s-${c.name}`} className="label mb-3">{c.name}</h2>
                <ul className="space-y-2 text-[15px] leading-snug">
                  {c.items.map((i) => <li key={i} className="border-b border-line pb-2">{i}</li>)}
                </ul>
              </section>
            ))}
          </div>

          <section className="mt-10 border-t border-ink pt-8" aria-labelledby="s-highlights">
            <h2 id="s-highlights" className="label mb-3">{snapshot.highlightsHeading}</h2>
            <ul className="list-disc space-y-2 pl-5 text-[15px] leading-snug">
              {snapshot.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </section>

          <p className="mt-10 text-sm text-muted">
            {contact.email} · {contact.linkedinLabel} · {site.url.replace("https://", "")}
          </p>
        </div>
        <p className="mt-8 text-center print:hidden">
          <a href={snapshot.file} download className="label inline-flex min-h-[44px] items-center border border-ink px-5">{snapshot.download}</a>
        </p>
      </main>
    </>
  );
}
