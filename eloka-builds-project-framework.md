# Eloka Builds — Project Requirements Framework

**Purpose:** A reusable reference so every project — not just MCS Solicitors — gets a consistent stack decision, a consistent complexity assessment, and the same set of build documents. Use this to scope any new prospect before writing their PRD.

---

## 1. Default Stack (use unless a project's complexity tier says otherwise)

| Layer | Default | Notes |
|---|---|---|
| Framework | **Next.js** (App Router, TypeScript) | Standard for every project going forward, replacing Astro |
| Styling | **Tailwind CSS** | Locked in as default across all projects |
| Hosting | **Vercel** | Unchanged |
| Fonts | `next/font/google` | Self-hosted via Next's font optimizer, no external font-loading requests |
| Images | `next/image` | Automatic optimization, no manual compression pipeline needed |
| Analytics | Vercel Analytics or Plausible | Privacy-respecting, no cookie banner required |
| Forms (no backend needed) | API route + Resend (email) or Formspree | Add Cloudflare Turnstile or hCaptcha for spam protection — never a visible honeypot label |
| Version control | GitHub repo per project | Even for demo builds — makes handoff and Vercel deployment trivial |

## 2. Complexity Tiers — decide this FIRST, before writing a PRD

### Tier 1 — Static / Brochure site
**Use when:** content changes a few times a year at most, one content owner (you, pre-launch), no e-commerce, no accounts, no bookings.
**Stack addition:** none. Content lives in typed data files (`lib/data/*.ts`) or MDX. No CMS, no database, no backend.
**Typical projects:** law firms, trades, clinics, boutiques, most Silent Contractor demos.
**This is the default tier for every unsolicited demo build** — fastest to ship, zero recurring cost, and structured data files make a later CMS migration a copy-paste job rather than a rebuild.

### Tier 2 — Managed Content site
**Use when:** the client will self-edit content regularly (blog, rotating testimonials, changing team/staff, news/updates), site is growing past ~15 pages, or there are multiple content types a non-technical person needs to update without a developer.
**Stack addition:** **Sanity CMS** (headless), Next.js fetches via ISR (Incremental Static Regeneration) so pages stay fast without full rebuilds on every edit.
**Trigger to upgrade a project from Tier 1 → Tier 2:** client says yes to the demo AND wants ongoing content control — this is a natural, sellable phase 2 upsell, not something to build speculatively.

### Tier 3 — Application
**Use when:** the project needs user accounts, bookings/scheduling, payments, dashboards, or real-time data.
**Stack addition:** Postgres database (Supabase or Neon), auth (Clerk or NextAuth), Stripe for payments, Next.js API routes or a separate backend service.
**Typical projects:** booking platforms, client portals, marketplaces — likely future/larger clients, not the initial Silent Contractor demo model.

**Rule of thumb:** never build Tier 2 or Tier 3 speculatively for an unsolicited demo. Ship Tier 1, structure the data cleanly, and pitch the upgrade once there's a paying relationship.

## 3. Standard Document Set (produce these for every project)

| Document | Purpose | Skip when... |
|---|---|---|
| **PRD** | What's being built, why, architecture, page specs, tech requirements | Never — always required |
| **Website Copy** | Every page's actual text, meta titles/descriptions | Never — always required |
| **Design System** | Exact color hex values, type scale, spacing, component styling rules | Never — an agent cannot guess "professional navy tones" into consistent hex codes |
| **Agent Build Brief** | Ordered, step-by-step task list with acceptance criteria per step, written for an AI coding agent to execute directly | Never for agent-built projects |
| **Content & Asset Checklist** | Gaps between what exists and what's needed (bios, photos, logos, legal text) — for the client, not the agent | Only if 100% of content is already confirmed and final |
| **SEO Spec** | Schema markup, sitemap/robots requirements, OG tags, image alt conventions | Can fold into PRD for very small (Tier 1, <5 page) projects |

## 4. Naming & Folder Convention

Project docs: `[client-slug]-prd.md`, `[client-slug]-website-copy.md`, `[client-slug]-design-system.md`, `[client-slug]-agent-build-brief.md`, `[client-slug]-content-checklist.md`.

Repo structure (Tier 1 default) — see MCS Solicitors Agent Build Brief for a fully worked example.

## 5. Migration Path Note (Tier 1 → Tier 2)

Because Tier 1 content lives in typed data files (e.g. `lib/data/services.ts` as an array of objects with `slug`, `title`, `metaTitle`, `metaDescription`, `intro`, `offences[]`), upgrading to Sanity later means: create matching Sanity schemas, write a one-time script to push the existing data objects into Sanity as documents, then swap the data-fetching calls in each page from local imports to Sanity queries. No redesign, no rewritten components — just a data-source swap. Always structure Tier 1 data this way, even though it feels like "unnecessary structure" for a static site, because it's what makes the phase 2 upsell fast and cheap to deliver.
