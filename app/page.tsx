import Reveal from "@/components/Reveal";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import Cursor from "@/components/Cursor";
import Orb from "@/components/Orb";
import Counter from "@/components/Counter";
import WorkList from "@/components/WorkList";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { hero, about, work, skills, snapshot, blog, timeline, contact, footer, site } from "@/data/content";
import { getPosts, formatDate } from "@/lib/blog";

const sec = "pad relative z-10 py-24 md:py-36";
const idx = (n: string, t: string) => (
  <h2 className="label mb-8 text-muted">({n}) — {t}</h2>
);

export default function Home() {
  const posts = getPosts().slice(0, 3);
  const marquee = `${hero.marquee} `;
  return (
    <>
      <div className="cols" aria-hidden>{Array.from({ length: 13 }).map((_, i) => <span key={i} />)}</div>
      <Navbar />
      <ThemeToggle />
      <Cursor />

      <main id="top" className="relative">
        {/* ---------------- Hero ---------------- */}
        <section className="relative flex h-[100svh] min-h-[620px] items-center overflow-hidden">
          <div className="hero-marquee select-none whitespace-nowrap" aria-hidden>
            {[0, 1].map((k) => (
              <span key={k} className="display pr-[0.3em] text-[clamp(7rem,17vw,19rem)]">{marquee}</span>
            ))}
          </div>
          <h1 className="sr-only">{hero.name} — {hero.headline}</h1>
          <Orb />

          <div className="pad absolute inset-x-0 bottom-24 z-20 grid grid-cols-4 items-end gap-y-4 md:bottom-7 md:grid-cols-12">
            <p className="label rise col-span-4 md:col-span-3" style={{ ["--d" as string]: "300ms" }}>{hero.captions.left}</p>
            <p className="label rise col-span-4 hidden leading-snug text-muted md:col-span-3 md:col-start-4 md:block" style={{ ["--d" as string]: "400ms" }}>
              {hero.captions.middle.map((l) => <span key={l} className="block">{l}</span>)}
            </p>
            <a href="#about" data-cursor className="label rise col-span-4 hidden items-center gap-2 md:col-span-2 md:col-start-9 md:flex" style={{ ["--d" as string]: "500ms" }}>
              <span className="flex h-6 w-4 justify-center rounded-full border border-ink pt-1"><span className="h-1 w-1 animate-bounce rounded-full bg-ink" /></span>
              {hero.captions.scroll}
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" data-cursor className="label rise col-span-4 hidden justify-self-end md:col-span-2 md:col-start-11 md:block" style={{ ["--d" as string]: "600ms" }}>{hero.captions.right}</a>
          </div>
        </section>

        {/* ---------------- About ---------------- */}
        <section id="about" className={sec}>
          {idx("01", about.heading)}
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-8">
              <p className="display text-4xl sm:text-5xl lg:text-7xl">{about.paragraphs[1]}</p>
            </Reveal>
            <Reveal delay={150} className="md:col-span-3 md:col-start-10">
              <div className="group relative overflow-hidden rounded-sm" data-cursor>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={hero.photo} alt={site.name} width={480} height={640} className="aspect-[3/4] w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
              </div>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-12">
            <Reveal className="space-y-4 text-lg leading-relaxed text-muted md:col-span-5 md:col-start-4">
              {about.paragraphs.filter((_, i) => i !== 1).map((p) => <p key={p}>{p}</p>)}
            </Reveal>
          </div>
          <div className="mt-20 grid grid-cols-1 border-t border-ink sm:grid-cols-3">
            {about.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 120}>
                <div className="border-b border-line py-8 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0">
                  <p className="display text-6xl md:text-8xl"><Counter value={s.value} suffix={s.suffix} /></p>
                  <p className="label mt-3 text-muted">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- Work ---------------- */}
        <section id="work" className={sec}>
          {idx("02", work.heading)}
          <Reveal><p className="display mb-14 max-w-4xl text-4xl sm:text-6xl lg:text-7xl">Selected work.</p></Reveal>
          <p className="mb-10 max-w-xl text-muted">{work.intro}</p>
          <WorkList />

          <Reveal className="mt-24">
            <p className="label mb-6">{work.more.heading}</p>
            <ul className="grid gap-x-10 gap-y-10 border-t border-ink pt-8 md:grid-cols-3">
              {work.more.items.map((i) => (
                <li key={i.title}>
                  <p className="text-xl font-semibold tracking-tight">{i.title}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{i.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* ---------------- Skills ---------------- */}
        <section id="skills" className={sec}>
          {idx("03", skills.heading)}
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {skills.groups.map((g, gi) => (
              <Reveal key={g.name} delay={gi * 100}>
                <h3 className="display mb-6 text-4xl">{g.name}</h3>
                <ul className="border-t border-ink">
                  {g.items.map((s) => (
                    <li key={s} data-cursor className="border-b border-line py-3 text-[15px] transition-all duration-300 hover:translate-x-2 hover:text-accent">{s}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- PM Snapshot ---------------- */}
        <section id="snapshot" className={sec}>
          {idx("04", snapshot.heading)}
          <Reveal><p className="display max-w-4xl text-4xl sm:text-6xl">{snapshot.headline}</p></Reveal>
          <p className="mt-6 max-w-xl text-muted">{snapshot.intro}</p>
          <div className="mt-10 grid gap-8 border-t border-ink pt-8 md:grid-cols-3">
            {snapshot.columns.map((c) => (
              <div key={c.name}>
                <h3 className="label mb-3">{c.name}</h3>
                <ul className="space-y-1.5 text-[15px] text-muted">{c.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={snapshot.file} download data-cursor className="label inline-flex min-h-[44px] items-center border border-ink px-5">{snapshot.download}</a>
            <Link href="/snapshot" data-cursor className="label inline-flex min-h-[44px] items-center border-b border-ink">{snapshot.viewPage}</Link>
          </div>
        </section>

        {/* ---------------- Timeline ---------------- */}
        <section id="timeline" className={sec}>
          {idx("05", timeline.heading)}
          <div className="border-t border-ink">
            {timeline.items.map((t) => (
              <Reveal key={t.title}>
                <div className="grid gap-4 border-b border-line py-10 md:grid-cols-12">
                  <p className="label text-muted md:col-span-3">{t.period}</p>
                  <div className="md:col-span-6">
                    <h3 className="display text-3xl sm:text-4xl">{t.title}</h3>
                    <p className="mt-2 text-muted">{t.org}{t.place ? ` · ${t.place}` : ""}</p>
                    <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-muted">{t.points.map((p) => <li key={p}>{p}</li>)}</ul>
                  </div>
                  <p className="label md:col-span-3 md:text-right">{t.kind}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 grid gap-4 md:grid-cols-12">
            <p className="label md:col-span-3">{timeline.certifications.heading}</p>
            <ul className="space-y-2 text-[15px] text-muted md:col-span-8">{timeline.certifications.items.map((c) => <li key={c}>{c}</li>)}</ul>
          </Reveal>
        </section>

        {/* ---------------- Writing ---------------- */}
        <section id="writing" className={sec}>
          {idx("06", blog.heading)}
          <p className="mb-10 max-w-xl text-muted">{blog.teaser}</p>
          <ul className="border-t border-ink">
            {posts.map((p) => (
              <li key={p.slug} className="border-b border-line">
                <Link href={`/blog/${p.slug}`} data-cursor className="grid gap-3 py-8 md:grid-cols-12">
                  <time dateTime={p.date} className="label text-muted md:col-span-3">{formatDate(p.date)}</time>
                  <span className="display text-3xl sm:text-4xl md:col-span-9">{p.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/blog" data-cursor className="label mt-8 inline-flex min-h-[44px] items-center border-b border-ink">{blog.viewAll}</Link>
        </section>

        {/* ---------------- Contact ---------------- */}
        <section id="contact" className={`${sec} pb-32`}>
          {idx("07", contact.heading)}
          <Reveal>
            <a href={`mailto:${contact.email}`} data-cursor className="display block text-[clamp(1.6rem,6.2vw,7rem)] transition-opacity hover:opacity-60">{contact.email}</a>
          </Reveal>
          <div className="mt-16 grid gap-14 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <p className="text-lg leading-relaxed">{contact.intro}</p>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" data-cursor className="label mt-6 inline-block border-b border-ink pb-0.5">LinkedIn ↗</a>
            </Reveal>
            <Reveal delay={150} className="md:col-span-6 md:col-start-7"><ContactForm /></Reveal>
          </div>
        </section>
      </main>

      <footer className="pad relative z-10 flex flex-wrap items-center justify-between gap-2 border-t border-line py-6 pb-24">
        <p className="label">{footer}</p>
        <a href="#top" data-cursor className="label">Back to top ↑</a>
      </footer>
    </>
  );
}
