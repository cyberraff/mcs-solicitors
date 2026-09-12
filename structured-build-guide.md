# MCS Solicitors — Structured Build Guide (Start → Finish)

Target: AI agent execution | Tier 1 static site | Next.js 14+ App Router + Tailwind + TypeScript
Repo target: `mcs-solicitors` → Vercel deploy

---

## Phase 0 — Context (read first)
1. `eloka-builds-project-framework.md` — stack rules, tier rules (Tier 1 = static, no CMS)
2. `mcs-solicitors-prd.md` — requirements, sitemap (15 pages), data model
3. `mcs-solicitors-design-system.md` — exact tokens, fonts, spacing
4. `mcs-solicitors-website-copy.md` — all page text + meta tags
5. `mcs-solicitors-agent-build-brief.md` — ordered tasks with acceptance criteria
6. `mcs-solicitors-content-checklist.md` — known gaps (bios missing, "Stefan Salhan" unconfirmed)

---

## Phase 1 — Project Scaffold (Task 1)
- `npx create-next-app@latest mcs-solicitors --typescript --tailwind --app`
- Confirm App Router (not Pages Router)
- Acceptance: `npm run dev` runs

---

## Phase 2 — Design Tokens (Task 2)
- Configure `tailwind.config.ts` with navy/gold/slate/charcoal tokens
- Set `next/font/google`: Fraunces (headings) + Inter (body) in `app/layout.tsx`
- Acceptance: test page shows correct colors + fonts

---

## Phase 3 — Data Layer (Task 3)
- `lib/constants.ts` — PHONE, EMAIL, ADDRESS, HOURS
- `lib/data/services.ts` — 10 services with unique meta/offences
- `lib/data/testimonials.ts`, `lib/data/team.ts`
- Acceptance: all content from copy doc imported; no duplication beyond fraud example

---

## Phase 4 — Shared Layout (Task 4)
- `components/layout/Header.tsx`, `Footer.tsx`, `MobileCallBar.tsx`
- Footer includes SRA number, Companies House number, Cyber Essentials, legal text VERBATIM
- Mobile call bar: sticky, mobile-only (`md:hidden`), `z-50`

---

## Phase 5 — Pages Build (Tasks 5–10)

| Task | Page | Key Components / Notes |
|---|---|---|
| 5 | Home (`/`) | Hero, TrustBar, WhoWeAre, WhyChooseUs, HowWeHelp, PracticeAreaGrid (10 cards), TestimonialCarousel |
| 6 | About (`/about`) | Team from `team` data; MISSING BIOS → render "Bio coming soon" placeholder visibly |
| 7 | Services hub + dynamic (`/services`, `[slug]`) | `generateStaticParams()` + `generateMetadata()` for 10 slugs; proper 404 for invalid |
| 8 | Funding (`/funding`) | Static; Legal Aid vs Private + stage subsections |
| 9 | Testimonials (`/testimonials`) | All quotes; JSON-LD `Review`/`AggregateRating`; HTML comment flagging "Stefan Salhan" discrepancy |
| 10 | Contact (`/contact`) | Form with Turnstile; API route (`/api/contact/route.ts`) verifies server-side, sends via Resend; Google Maps embed; NO visible honeypot |

---

## Phase 6 — SEO Infra (Task 11)
- `app/sitemap.ts` — list all 15 pages
- `app/robots.ts` — allow crawl
- `LegalService` JSON-LD on homepage
- Acceptance: sitemap + robots load; JSON-LD validates

---

## Phase 7 — Performance & A11y (Task 12)
- Lighthouse mobile ≥ 90 (Home + 1 service page)
- axe: zero critical violations; alt text on all images; keyboard reachable

---

## Phase 8 — Deploy (Task 13)
- Push to `mcs-solicitors` (GitHub)
- Connect Vercel; set env vars (`RESEND_API_KEY`, `TURNSTILE_SECRET_KEY`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY`) in Vercel, NOT in repo
- Acceptance: live URL loads on desktop + mobile

---

## Phase 9 — Final QA (before pitch/demo)
- All 15 pages load, no dead links
- Practice area links resolve correctly
- Contact form submits + arrives in real inbox during test
- No visible honeypot or placeholder leakage in DOM
- Phone/email/address identical across every page (single source from `constants.ts`)
- Mobile sticky call bar present + tappable
- Lighthouse mobile ≥ 90 spot-checked
- Meta title/description unique per page (spot-check 3 services)
- "Stefan Salhan" discrepancy + missing team bios STILL FLAGGED (not silently fixed)
- Footer legal text matches current site VERBATIM (compliance-sensitive)

---

## Rules / Constraints (do NOT break)
- NEVER fabricate bios for Mukesh/Yunus — use visible placeholder state
- NEVER silently resolve "Stefan Salhan" — flag with HTML comment on testimonials page
- NEVER paraphrase footer legal text — copy verbatim
- NEVER commit `.env` or env vars to repo — set in Vercel only
- NEVER add a visible honeypot label — use Turnstile (invisible)
- Always reference `lib/constants.ts` for contact info — never retype
- Structure Tier 1 data as typed arrays so future Sanity migration is a source swap
