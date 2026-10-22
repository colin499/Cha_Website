# French teacher website

Bilingual (EN/FR) marketing site for a DAEFLE-certified French teacher in New York City: private lessons for adults and children, a homeschool French curriculum, and downloadable resources.

- **Framework:** [Astro](https://astro.build) (static output, no client framework)
- **Editing:** [Pages CMS](https://pagescms.org) — config in `.pages.yml`
- **Hosting:** Netlify (`netlify.toml`), with Netlify Forms for the contact form
- **Booking:** Calendly inline embed (URL set in Site settings)
- **Paid resources:** Stripe Payment Links / Gumroad (link per resource; no checkout code here)

See **EDITING_GUIDE.md** for the non-technical guide.

## Develop

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview
```

## Where things live

```
src/content/pages/*.yml      one file per page (home, lessons, curriculum, resources, about, contact)
src/content/units/*.yml      curriculum units
src/content/resources/*.yml  downloadable resources
src/content/testimonials/    testimonials
src/data/settings.json       site name, email, Calendly URL, socials
src/i18n/ui.ts               interface strings (nav, buttons, form labels)
src/views/*.astro            one component per page, rendered for both languages
src/pages/*.astro            English routes (thin wrappers)
src/pages/fr/*.astro         French routes (thin wrappers)
src/styles/global.css        design tokens and all styles
public/uploads/              images and PDFs uploaded through the CMS
```

Every content field exists twice (`_en` and `_fr`). `loc(obj, 'key', lang)` in `src/i18n/ui.ts` picks the right one and falls back to English. Rich-text fields hold Markdown and are rendered with `marked` via `src/components/Prose.astro`.

Content is validated at build time by the schemas in `src/content.config.ts`; a bad edit fails the build instead of breaking the live site.

## Deploy (one-time setup)

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import from GitHub**, pick the repo. Build command and publish dir are read from `netlify.toml`.
3. Netlify → **Forms**: after the first deploy the `contact` form appears. Add an email notification under *Forms → Form notifications*.
4. Netlify → **Domain management**: add the custom domain. Then update `site` in `astro.config.mjs`.
5. Pages CMS: go to https://app.pagescms.org, sign in with GitHub, install the GitHub App on this repo, open it. Add your wife as a collaborator on the GitHub repo so she can sign in too.

## Later: student accounts

The site is fully static today. When student logins with progress tracking are wanted, the lightest paths are:

- **Supabase Auth + database** behind a `/portal` route (switch that route to server rendering with `@astrojs/netlify`).
- Or an off-the-shelf platform (Teachable, Thinkific, Google Classroom) linked from a "Student login" nav item.

Nothing in the current structure blocks either option.
