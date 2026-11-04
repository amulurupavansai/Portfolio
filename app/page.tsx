import Reveal from "@/components/Reveal";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Counter from "@/components/Counter";
import Typewriter from "@/components/Typewriter";
import Tilt from "@/components/Tilt";
import Spotlight from "@/components/Spotlight";
import WorkGrid from "@/components/WorkGrid";
import GrowLine from "@/components/GrowLine";
import BackToTop from "@/components/BackToTop";
import { hero, about, work, skills, timeline, contact, footer, site } from "@/data/content";

const wrap = "mx-auto w-full max-w-5xl px-5 sm:px-8";
const h2 = "text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white";
const btn = "inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition duration-200 hover:-translate-y-0.5";
const eyebrow = "mb-2 text-sm font-semibold uppercase tracking-widest text-accent dark:text-accent-dark";

const ticker = skills.groups.flatMap((g) => g.items).filter((s) => s.length < 32);

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        {/* Hero */}
        <div className="relative">
          <div className="hero-bg" aria-hidden>
            <div className="grid-bg" />
            <div className="blob b1" /><div className="blob b2" /><div className="blob b3" />
          </div>
          <section className={`${wrap} grid items-center gap-12 py-16 md:grid-cols-[1.4fr_1fr] md:py-28`}>
            <div>
              <p className="fade-up text-lg font-medium text-accent dark:text-accent-dark">👋 {hero.greeting}</p>
              <h1 className="fade-up mt-1 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white" style={{ ["--d" as string]: "100ms" }}>
                <span className="grad-text">{hero.name}</span>
              </h1>
              <p className="fade-up mt-4 text-xl font-semibold text-slate-800 sm:text-2xl dark:text-slate-100" style={{ ["--d" as string]: "200ms" }}>{hero.headline}</p>
              <p className="fade-up mt-2 min-h-[3.25rem] text-lg sm:min-h-0" style={{ ["--d" as string]: "300ms" }}>
                {hero.typedPrefix} <Typewriter words={hero.typed} />
              </p>
              <p className="fade-up mt-3 max-w-xl" style={{ ["--d" as string]: "400ms" }}>{hero.subline}</p>
              <p className="fade-up mt-2 max-w-xl text-sm text-slate-500 dark:text-slate-400" style={{ ["--d" as string]: "450ms" }}>{hero.tagline}</p>
              <div className="fade-up mt-8 flex flex-wrap gap-3" style={{ ["--d" as string]: "550ms" }}>
                <a href="#work" className={`${btn} bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 hover:shadow-xl`}>{hero.buttons.work}</a>
                <a href={hero.resumeFile} download className={`${btn} border border-slate-300 bg-white/60 backdrop-blur hover:border-accent dark:border-slate-700 dark:bg-slate-900/60`}>{hero.buttons.resume}</a>
                <a href="#contact" className={`${btn} border border-slate-300 bg-white/60 backdrop-blur hover:border-accent dark:border-slate-700 dark:bg-slate-900/60`}>{hero.buttons.contact}</a>
              </div>
            </div>
            <div className="fade-up mx-auto" style={{ ["--d" as string]: "300ms" }}>
              <Tilt>
                <div className="relative w-56 md:w-72">
                  <div className="absolute -inset-1 overflow-hidden rounded-3xl blur-sm"><div className="photo-ring absolute -inset-[50%]" /></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={hero.photo} alt={site.name} width={480} height={640} className="relative aspect-[3/4] w-full rounded-3xl object-cover shadow-2xl" />
                </div>
              </Tilt>
            </div>
          </section>
        </div>

        {/* Skills ticker */}
        <div className="marquee-wrap overflow-hidden border-y border-slate-200 bg-slate-50 py-3 dark:border-slate-800 dark:bg-slate-900/60" aria-hidden>
          <div className="marquee">
            {[...ticker, ...ticker].map((s, i) => (
              <span key={i} className="mx-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">✦ {s}</span>
            ))}
          </div>
        </div>

        {/* About */}
        <section id="about" className="py-20">
          <div className={wrap}>
            <Reveal><p className={eyebrow}>Who I am</p><h2 className={h2}>{about.heading}</h2></Reveal>
            <div className="mt-8 grid gap-10 md:grid-cols-[1.5fr_1fr]">
              <div className="space-y-4 text-lg">
                {about.paragraphs.map((p, i) => <Reveal key={p} delay={i * 100}><p>{p}</p></Reveal>)}
              </div>
              <dl className="grid grid-cols-3 gap-3 md:grid-cols-1">
                {about.stats.map((s, i) => (
                  <Reveal key={s.label} delay={i * 120}>
                    <Spotlight className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                      <div className="relative z-10">
                        <dt className="grad-text text-3xl font-extrabold"><Counter value={s.value} suffix={s.suffix} /></dt>
                        <dd className="text-sm">{s.label}</dd>
                      </div>
                    </Spotlight>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="bg-slate-50/70 py-20 dark:bg-slate-900/40">
          <div className={wrap}>
            <Reveal>
              <p className={eyebrow}>Case studies</p>
              <h2 className={h2}>{work.heading}</h2>
              <p className="mt-2 max-w-2xl">{work.intro}</p>
            </Reveal>
            <WorkGrid />
            <Reveal className="mt-14">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{work.more.heading}</h3>
              <ul className="mt-4 grid gap-4 md:grid-cols-3">
                {work.more.items.map((i) => (
                  <li key={i.title}>
                    <Spotlight className="h-full rounded-xl border border-slate-200 bg-white text-sm dark:border-slate-800 dark:bg-slate-900">
                      <div className="relative z-10 p-4">
                        <p className="font-semibold text-slate-900 dark:text-white">{i.title}</p>
                        <p className="mt-1">{i.text}</p>
                      </div>
                    </Spotlight>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20">
          <div className={wrap}>
            <Reveal><p className={eyebrow}>Toolbox</p><h2 className={h2}>{skills.heading}</h2></Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {skills.groups.map((g, gi) => (
                <Reveal key={g.name} delay={gi * 100}>
                  <Spotlight className="h-full rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
                    <div className="relative z-10 p-5">
                      <h3 className="mb-3 font-semibold text-slate-900 dark:text-white">{g.name}</h3>
                      <ul className="flex flex-wrap gap-2">
                        {g.items.map((s) => (
                          <li key={s} className="cursor-default rounded-full border border-slate-300 px-3 py-1 text-sm transition hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10 dark:border-slate-700">{s}</li>
                        ))}
                      </ul>
                    </div>
                  </Spotlight>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="bg-slate-50/70 py-20 dark:bg-slate-900/40">
          <div className={wrap}>
            <Reveal><p className={eyebrow}>Journey</p><h2 className={h2}>{timeline.heading}</h2></Reveal>
            <div className="relative mt-10 pl-8">
              <GrowLine className="absolute left-[7px] top-1 bottom-1 w-0.5 rounded bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500" />
              <ol className="space-y-10">
                {timeline.items.map((t) => (
                  <li key={t.title} className="relative">
                    <span className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 ring-4 ring-slate-50 dark:ring-slate-950" />
                    <Reveal>
                      <Spotlight className="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
                        <div className="relative z-10 p-5">
                          <p className="text-sm font-medium text-accent dark:text-accent-dark">{t.kind} · {t.period}</p>
                          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{t.title}</h3>
                          <p className="text-sm">{t.org}{t.place ? ` · ${t.place}` : ""}</p>
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">{t.points.map((p) => <li key={p}>{p}</li>)}</ul>
                        </div>
                      </Spotlight>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
            <Reveal className="mt-12">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{timeline.certifications.heading}</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">{timeline.certifications.items.map((c) => <li key={c}>{c}</li>)}</ul>
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative overflow-hidden py-20">
          <div className="hero-bg" aria-hidden><div className="blob b1 opacity-30" /><div className="blob b2 opacity-30" /></div>
          <Reveal className={`${wrap} grid gap-10 md:grid-cols-2`}>
            <div>
              <p className={eyebrow}>Say hello</p>
              <h2 className={h2}>{contact.heading}</h2>
              <p className="mt-3">{contact.intro}</p>
              <ul className="mt-6 space-y-3">
                <li><a className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-4 py-2 transition hover:-translate-y-0.5 hover:border-accent dark:border-slate-700 dark:bg-slate-900/70" href={`mailto:${contact.email}`}>✉️ {contact.email}</a></li>
                <li><a className="inline-flex items-center gap-2 break-all rounded-xl border border-slate-300 bg-white/70 px-4 py-2 transition hover:-translate-y-0.5 hover:border-accent dark:border-slate-700 dark:bg-slate-900/70" href={contact.linkedin} target="_blank" rel="noopener noreferrer">💼 {contact.linkedinLabel}</a></li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/80"><ContactForm /></div>
          </Reveal>
        </section>
      </main>
      <footer className="border-t border-slate-200 py-6 text-center text-sm dark:border-slate-800">{footer}</footer>
      <BackToTop />
    </>
  );
}
