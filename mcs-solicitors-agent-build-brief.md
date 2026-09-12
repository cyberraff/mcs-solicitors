# MCS Solicitors — Agent Build Brief

Read alongside: `mcs-solicitors-prd.md` (requirements), `mcs-solicitors-design-system.md` (visual tokens), `mcs-solicitors-website-copy.md` (all page text). This document is the ordered task list — execute in sequence, each task has explicit acceptance criteria.

## Folder Structure (target state)

```
mcs-solicitors/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                        Home
│   ├── about/page.tsx
│   ├── services/
│   │   ├── page.tsx                    Services hub
│   │   └── [slug]/page.tsx             Dynamic service page (generateStaticParams)
│   ├── funding/page.tsx
│   ├── testimonials/page.tsx
│   ├── contact/page.tsx
│   ├── api/contact/route.ts            Form submission handler
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileCallBar.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── TrustBar.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── WhoWeAre.tsx
│       ├── WhyChooseUs.tsx
│       ├── HowWeHelp.tsx
│       ├── PracticeAreaGrid.tsx
│       ├── TestimonialCarousel.tsx
│       ├── ContactForm.tsx
│       └── ServiceCTA.tsx
├── lib/
│   ├── data/
│   │   ├── services.ts
│   │   ├── testimonials.ts
│   │   └── team.ts
│   └── constants.ts
├── public/
│   └── images/
├── styles/
│   └── globals.css
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
├── package.json
└── .env.example
```

## Task Sequence

### Task 1 — Project scaffold
`npx create-next-app@latest mcs-solicitors --typescript --tailwind --app`
**Acceptance:** project builds and runs locally with `npm run dev`, App Router confirmed (not Pages Router).

### Task 2 — Design tokens
Configure `tailwind.config.ts` with the exact color/spacing/radius values from `mcs-solicitors-design-system.md`. Set up `next/font/google` for Fraunces and Inter in `app/layout.tsx`, exposed as CSS variables.
**Acceptance:** a test page rendering all color tokens and both fonts visually matches the design system doc.

### Task 3 — Data layer
Create `lib/constants.ts` (PHONE, EMAIL, ADDRESS, HOURS) and `lib/data/services.ts`, `testimonials.ts`, `team.ts` populated from `mcs-solicitors-website-copy.md`. Use the `Service` type shape defined in the PRD Section 6.
**Acceptance:** all 10 services present with unique `metaTitle`/`metaDescription`/`intro`/`offences`; no content duplicated verbatim from the PRD example beyond the fraud service (that one is illustrative — pull the rest from the copy doc).

### Task 4 — Shared layout
Build `Header.tsx` (logo, nav: About / Services / Funding / Contact, click-to-call button), `Footer.tsx` (accreditation logos, SRA number, Companies House number, Cyber Essentials link, legal text from copy doc — verbatim, this is compliance text), `MobileCallBar.tsx` (sticky, mobile-only, per design system spec).
**Acceptance:** header and footer render on every route via `app/layout.tsx`; mobile call bar visible only below `md` breakpoint.

### Task 5 — Home page
Build `Hero`, `TrustBar`, `WhoWeAre`, `WhyChooseUs`, `HowWeHelp`, `PracticeAreaGrid` (maps over `services` data), `TestimonialCarousel` (maps over `testimonials` data) — assemble in `app/page.tsx`.
**Acceptance:** matches PRD Section 7.1 content requirements; practice area grid links resolve to `/services/[slug]` for all 10 services; Lighthouse mobile score check run once complete.

### Task 6 — About page
Build from `team` data. Render bio/photo conditionally (fallback state for Mukesh/Yunus until client provides real bios — do not fabricate bios).
**Acceptance:** page does not silently show blank space where bios are missing — render a clear "Bio coming soon" placeholder state instead, so the gap is visible to whoever reviews the demo, not hidden.

### Task 7 — Services hub + dynamic service pages
Build `app/services/page.tsx` (grid, same pattern as homepage grid) and `app/services/[slug]/page.tsx` with `generateStaticParams()` and `generateMetadata()` pulling from `services` data.
**Acceptance:** all 10 slugs from the PRD sitemap resolve to a correctly rendered page with unique meta tags; visiting an invalid slug returns a proper 404, not a crash.

### Task 8 — Funding page
Static content per copy doc — no data file needed.
**Acceptance:** matches copy doc content and structure (Legal Aid vs Private, then Police Station/Magistrates'/Crown Court/Appeals subsections).

### Task 9 — Testimonials page
Render all entries from `testimonials` data plus JSON-LD `Review`/`AggregateRating` schema.
**Acceptance:** JSON-LD validates in Google's Rich Results Test tool; page flags the "Stefan Salhan" discrepancy as an HTML comment for whoever does final review (not visible to site visitors, just a dev note) rather than silently resolving it.

### Task 10 — Contact page + form handler
Build `ContactForm.tsx` (First name, Surname, Email, Telephone, Message + Turnstile widget) and `app/api/contact/route.ts` (verifies Turnstile token server-side, sends via Resend to `EMAIL` constant). Add a Google Maps iframe embed for the McLaren Building address.
**Acceptance:** submitting the form with a valid Turnstile token sends a real email via Resend in a test environment; submitting without a valid token is rejected server-side; no honeypot text is visible anywhere in the rendered DOM.

### Task 11 — SEO infrastructure
Build `app/sitemap.ts` (enumerate all static + dynamic routes) and `app/robots.ts`. Add `LegalService` JSON-LD to the homepage.
**Acceptance:** `/sitemap.xml` lists all 15 pages; `/robots.txt` allows crawling; JSON-LD validates.

### Task 12 — Performance & accessibility pass
Run Lighthouse (mobile) and axe DevTools (or equivalent) against every page.
**Acceptance:** Lighthouse mobile performance ≥ 90 on Home and at least one service page; zero critical accessibility violations; all images have alt text; all interactive elements are keyboard-reachable.

### Task 13 — Deploy
Push to GitHub repo `mcs-solicitors-demo`, connect to Vercel, deploy.
**Acceptance:** live Vercel URL loads correctly on both desktop and mobile viewports; environment variables (`RESEND_API_KEY`, `TURNSTILE_SECRET_KEY`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY`) are set in Vercel project settings, not committed to the repo.

## `.env.example`
```
RESEND_API_KEY=
TURNSTILE_SECRET_KEY=
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
```

## Final QA Checklist (run before recording the Loom / sending the pitch)

- [ ] All 15 pages load without errors, on both desktop and mobile
- [ ] Every practice area card/link resolves correctly, no dead links
- [ ] Contact form submits successfully and arrives in a real inbox during testing
- [ ] No visible honeypot or placeholder leakage anywhere in the DOM
- [ ] Phone number, email, and address are identical across every page (single source from `lib/constants.ts`)
- [ ] Mobile sticky call bar is present and tappable on every page
- [ ] Lighthouse mobile score ≥ 90 spot-checked on Home + one service page
- [ ] Meta title/description unique per page (spot-check 3 service pages in browser tab + view-source)
- [ ] "Stefan Salhan" discrepancy and missing team bios are still flagged (not silently fixed or fabricated) — confirm with client before launch, not before the demo
- [ ] Accreditation/legal footer text matches the current site verbatim (compliance-sensitive, do not paraphrase)
