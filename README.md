# Amuluru Pavan Sai — Portfolio

Personal portfolio built with **Next.js 14 (static export)** and **Tailwind CSS**. Deploys on Vercel with zero config.

## Editing content

All text lives in **`data/content.ts`** — hero, about, case studies, skills, timeline and contact details. Edit the values there; no component changes are needed. Source of truth for facts is `public/resume.pdf`.

Things to update there:

- `site.url` — your deployed URL (used for Open Graph / canonical links).
- `contact.formspreeId` — **placeholder `YOUR_FORMSPREE_FORM_ID`**. Create a form at [formspree.io](https://formspree.io), then paste the ID (the part after `/f/` in the form URL). Until then the form is disabled and shows a notice.
- Files in `public/`: replace `resume.pdf` and `photo.jpg` to update them.

### Case studies, blog and snapshot

- **Case-study pages** (`/work/<slug>`) are generated from `work.caseStudies` in `data/content.ts` (Context, Problem, My Role, Approach, Outcome, Learnings). Give every new case study a unique `slug`.
- **Blog**: add a Markdown file to `content/blog/` with frontmatter `title`, `date` (YYYY-MM-DD), `description`, `tags`. Blog UI labels live in `blog` in `data/content.ts`.
- **PM Snapshot**: edit `snapshot` in `data/content.ts`, then regenerate the PDF: `npm run build && npm run snapshot` (requires Playwright + Chromium locally) and commit `public/pm-snapshot.pdf`.
- **SEO**: `app/sitemap.ts`, `app/robots.ts`, JSON-LD in `app/layout.tsx`, and the auto-generated Open Graph image at `/og.png` (`app/og.png/route.tsx`).
- **Analytics**: `@vercel/analytics` is included. Enable *Web Analytics* in the Vercel project (Analytics tab) for data to appear.

Do not add client names, internal product names, or phone/address details to the content file.

## Run locally

```bash
npm install
npm run dev
```

## Verify the production build

```bash
npm run build
```

This type-checks and exports the static site to `out/`. It must succeed before you merge or deploy.

## Deploy

Import the repo in Vercel — framework is auto-detected (Next.js), no configuration needed.
