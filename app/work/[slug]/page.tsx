import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SubHeader from "@/components/SubHeader";
import SubFooter from "@/components/SubFooter";
import { work, caseStudyPage, site, skipLink } from "@/data/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return work.caseStudies.map((c) => ({ slug: c.slug }));
}

const find = (slug: string) => work.caseStudies.findIndex((c) => c.slug === slug);

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = work.caseStudies[find(params.slug)];
  if (!c) return {};
  const title = `${c.title} — ${work.heading}`;
  return {
    title,
    description: c.summary,
    alternates: { canonical: `/work/${c.slug}` },
    openGraph: { images: ["/og.png"], type: "article", url: `${site.url}/work/${c.slug}`, title, description: c.summary },
    twitter: { title, description: c.summary },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const i = find(params.slug);
  if (i < 0) notFound();
  const c = work.caseStudies[i];
  const prev = work.caseStudies[(i - 1 + work.caseStudies.length) % work.caseStudies.length];
  const next = work.caseStudies[(i + 1) % work.caseStudies.length];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.title,
    description: c.summary,
    author: { "@type": "Person", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/work/${c.slug}`,
  };
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-3 focus:py-2 focus:text-bg">{skipLink}</a>
      <SubHeader />
      <main id="main" className="pad relative z-10 py-16 md:py-24">
        <Link href="/#work" className="label inline-flex min-h-[44px] items-center text-muted underline-offset-4 hover:underline">{caseStudyPage.back}</Link>
        <p className="label mt-8 text-muted">{c.tag}</p>
        <h1 className="display mt-4 max-w-5xl text-5xl sm:text-7xl lg:text-8xl">{c.title}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">{c.summary}</p>

        <div className="mt-16 border-t border-ink">
          {caseStudyPage.sections.map((s) => (
            <section key={s.key} aria-labelledby={`h-${s.key}`} className="grid gap-4 border-b border-line py-10 md:grid-cols-12">
              <h2 id={`h-${s.key}`} className="label md:col-span-3">{s.label}</h2>
              <p className="max-w-2xl text-lg leading-relaxed md:col-span-8">{c[s.key]}</p>
            </section>
          ))}
        </div>

        <nav aria-label="More case studies" className="mt-16 grid gap-6 sm:grid-cols-2">
          <Link href={`/work/${prev.slug}`} className="block border border-line p-6 hover:border-ink">
            <span className="label text-muted">{caseStudyPage.previous}</span>
            <span className="display mt-3 block text-2xl">{prev.title}</span>
          </Link>
          <Link href={`/work/${next.slug}`} className="block border border-line p-6 hover:border-ink sm:text-right">
            <span className="label text-muted">{caseStudyPage.next}</span>
            <span className="display mt-3 block text-2xl">{next.title}</span>
          </Link>
        </nav>
      </main>
      <SubFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
