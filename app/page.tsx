import Reveal from "@/components/Reveal";
import ThemeToggle from "@/components/ThemeToggle";
import ContactForm from "@/components/ContactForm";
import { hero, about, work, skills, timeline, contact, nav, footer, site } from "@/data/content";

const wrap = "mx-auto w-full max-w-5xl px-5 sm:px-8";
const h2 = "text-3xl font-bold tracking-tight text-slate-900 dark:text-white";
const btn = "inline-flex items-center justify-center rounded-lg px-5 py-2.5 font-medium transition hover:-translate-y-0.5";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
        <div className={`${wrap} flex h-14 items-center justify-between gap-3`}>
          <a href="#top" className="font-semibold text-slate-900 dark:text-white">{site.name}</a>
          <nav className="flex items-center gap-4 text-sm">
            <ul className="hidden gap-5 md:flex">
              {nav.map((n) => (
                <li key={n.href}><a href={n.href} className="hover:text-accent dark:hover:text-accent-dark">{n.label}</a></li>
              ))}
            </ul>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className={`${wrap} grid items-center gap-10 py-16 md:grid-cols-[1.4fr_1fr] md:py-24`}>
          <div className="animate-fadeUp">
            <p className="text-lg text-accent dark:text-accent-dark">{hero.greeting}</p>
            <h1 className="mt-1 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">{hero.name}</h1>
            <p className="mt-4 text-xl font-medium text-slate-800 dark:text-slate-200">{hero.headline}</p>
            <p className="mt-3 max-w-xl">{hero.subline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className={`${btn} bg-accent text-white`}>{hero.buttons.work}</a>
              <a href={hero.resumeFile} download className={`${btn} border border-slate-300 dark:border-slate-700`}>{hero.buttons.resume}</a>
              <a href="#contact" className={`${btn} border border-slate-300 dark:border-slate-700`}>{hero.buttons.contact}</a>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={hero.photo} alt={site.name} width={480} height={640}
            className="mx-auto aspect-[3/4] w-56 rounded-2xl object-cover shadow-xl ring-4 ring-accent/20 md:w-72" />
        </section>

        {/* About */}
        <section id="about" className="bg-slate-50 py-16 dark:bg-slate-900/50">
          <Reveal className={wrap}>
            <h2 className={h2}>{about.heading}</h2>
            <div className="mt-6 grid gap-8 md:grid-cols-[1.6fr_1fr]">
              <div className="space-y-3 text-lg">{about.paragraphs.map((p) => <p key={p}>{p}</p>)}</div>
              <dl className="grid grid-cols-3 gap-3 md:grid-cols-1">
                {about.stats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                    <dt className="text-2xl font-bold text-accent dark:text-accent-dark">{s.value}</dt>
                    <dd className="text-sm">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </section>

        {/* Work */}
        <section id="work" className="py-16">
          <div className={wrap}>
            <Reveal>
              <h2 className={h2}>{work.heading}</h2>
              <p className="mt-2 max-w-2xl">{work.intro}</p>
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {work.caseStudies.map((c) => (
                <Reveal key={c.title}>
                  <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent dark:text-accent-dark">{c.tag}</span>
                    <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{c.title}</h3>
                    <dl className="mt-4 space-y-3 text-sm">
                      {([["Problem", c.problem], ["My role", c.role], ["Approach", c.approach], ["Outcome", c.outcome]] as const).map(([k, v]) => (
                        <div key={k}>
                          <dt className="font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100">{k}</dt>
                          <dd>{v}</dd>
                        </div>
                      ))}
                    </dl>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-12">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{work.more.heading}</h3>
              <ul className="mt-4 grid gap-4 md:grid-cols-3">
                {work.more.items.map((i) => (
                  <li key={i.title} className="rounded-xl border border-slate-200 p-4 text-sm dark:border-slate-800">
                    <p className="font-semibold text-slate-900 dark:text-white">{i.title}</p>
                    <p className="mt-1">{i.text}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="bg-slate-50 py-16 dark:bg-slate-900/50">
          <Reveal className={wrap}>
            <h2 className={h2}>{skills.heading}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {skills.groups.map((g) => (
                <div key={g.name}>
                  <h3 className="mb-3 font-semibold text-slate-900 dark:text-white">{g.name}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <li key={s} className="rounded-full border border-slate-300 bg-white px-3 py-1 text-sm dark:border-slate-700 dark:bg-slate-900">{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Timeline */}
        <section id="timeline" className="py-16">
          <div className={wrap}>
            <Reveal><h2 className={h2}>{timeline.heading}</h2></Reveal>
            <ol className="mt-8 space-y-8 border-l-2 border-slate-200 pl-6 dark:border-slate-800">
              {timeline.items.map((t) => (
                <li key={t.title} className="relative">
                  <span className="absolute -left-[33px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-white dark:ring-slate-950" />
                  <Reveal>
                    <p className="text-sm text-accent dark:text-accent-dark">{t.kind} · {t.period}</p>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{t.title}</h3>
                    <p className="text-sm">{t.org}{t.place ? ` · ${t.place}` : ""}</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">{t.points.map((p) => <li key={p}>{p}</li>)}</ul>
                  </Reveal>
                </li>
              ))}
            </ol>
            <Reveal className="mt-10">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{timeline.certifications.heading}</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">{timeline.certifications.items.map((c) => <li key={c}>{c}</li>)}</ul>
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-slate-50 py-16 dark:bg-slate-900/50">
          <Reveal className={`${wrap} grid gap-10 md:grid-cols-2`}>
            <div>
              <h2 className={h2}>{contact.heading}</h2>
              <p className="mt-3">{contact.intro}</p>
              <ul className="mt-6 space-y-2">
                <li>✉️ <a className="text-accent underline dark:text-accent-dark" href={`mailto:${contact.email}`}>{contact.email}</a></li>
                <li>💼 <a className="break-all text-accent underline dark:text-accent-dark" href={contact.linkedin} target="_blank" rel="noopener noreferrer">{contact.linkedinLabel}</a></li>
              </ul>
            </div>
            <ContactForm />
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-6 text-center text-sm dark:border-slate-800">{footer}</footer>
    </>
  );
}
