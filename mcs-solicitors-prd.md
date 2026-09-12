# MCS Solicitors — Website Rebuild PRD (v2, Next.js)

**Prepared by:** Eloka Builds
**Client:** MCS Solicitors Ltd, Birmingham
**Project type:** Unsolicited demo build (Silent Contractor model)
**Current site:** mcs-solicitors.com (WPBakery, single-page)
**Complexity tier:** Tier 1 — Static / Brochure (see `eloka-builds-project-framework.md`)

---

## 1. Background & Problem Statement

MCS Solicitors is a genuinely strong criminal defence practice — SRA-regulated, Cyber Essentials certified, 35+ years of combined experience, a 5.0★ reputation, and testimonials that read like they were written by people whose lives were actually changed. None of that comes through on the current website.

The current site is a single scrolling WordPress page built with WPBakery. Every practice area (Fraud, Murder, Firearms, Sexual Offences, etc.) exists only as an anchor-linked section on that one page — there is no dedicated URL for any individual offence type. This has three compounding effects:

1. **Zero SEO capture.** Someone searching "fraud solicitor Birmingham" or "firearms solicitor Birmingham" has no page on the site that can rank for that specific term.
2. **Trust erosion at the exact wrong moment.** A visible honeypot label ("This field should be left blank") sits directly in the live contact form.
3. **Domain/brand inconsistency.** The site lives at `mcs-solicitors.com` while the listed contact email is `@mcssolicitors.net`.

## 2. Objectives

| Priority | Objective |
|---|---|
| P0 | Give every practice area its own indexable, SEO-optimized page |
| P0 | Fix the leaked honeypot field and rebuild the contact form properly |
| P0 | Resolve the domain/email inconsistency in all displayed contact info |
| P1 | Surface trust signals above the fold |
| P1 | Make click-to-call the single most prominent action on mobile |
| P2 | Testimonials page with structured data for star-rating rich snippets |
| P2 | Lighthouse mobile performance score 90+ |

## 3. Target Audience

- **Primary:** People just arrested, charged, or summoned — searching from a phone, often at night, in crisis. Speed to a phone call matters more than anything else.
- **Secondary:** Family/friends researching on someone's behalf — more sensitive to trust signals and site polish.
- **Tertiary:** Referral sources checking credibility before referring a client.

## 4. Tech Stack (Tier 1 default — see framework doc)

| Layer | Choice | Rationale |
|---|---|---|
| Framework | **Next.js 14+, App Router, TypeScript** | Standard going forward for all Eloka Builds projects |
| Styling | **Tailwind CSS** | Standard going forward |
| Content | **Local typed data files** (`lib/data/*.ts`) — NOT a CMS | Tier 1 project: content changes rarely pre-launch. Structured as objects so a future Sanity migration (phase 2 upsell) is a data-source swap, not a rebuild |
| Fonts | `next/font/google` — Fraunces (headings), Inter (body) | See Design System doc for full rationale |
| Images | `next/image`, all images in `/public/images/` | Automatic optimization |
| Forms | Next.js API route (`/app/api/contact/route.ts`) → sends via **Resend** to Enquiries@mcssolicitors.net | No third-party form service dependency, full control over spam protection |
| Spam protection | **Cloudflare Turnstile** widget on the form | Invisible to the user, replaces the leaked honeypot label entirely |
| Hosting | **Vercel** | Standard |
| Analytics | **Vercel Analytics** | Lightweight, no cookie banner needed |
| Version control | GitHub repo `mcs-solicitors-demo` | Enables clean handoff if client accepts |

**Explicitly NOT included in this build (documented so no scope creep happens by accident):**
- No CMS (Sanity is the phase 2 upsell once the client says yes and wants self-editing)
- No database, no user accounts, no booking system
- No blog (proposed as a phase 2 content-marketing upsell — strong channel for this niche, but out of scope now)

## 5. Information Architecture / Sitemap

```
/                                Home
/about                           About / Meet the Team
/services                        Services hub
/services/fraud
/services/money-laundering
/services/drug-trafficking
/services/murder-manslaughter
/services/sexual-offences
/services/confiscation-restraint
/services/serious-assault
/services/firearms
/services/appeals
/services/motoring-offences
/funding                         Legal Aid & Private Funding
/testimonials
/contact
/sitemap.xml                     Generated via app/sitemap.ts
/robots.txt                      Generated via app/robots.ts
```

## 6. Data Model

All content-bearing pages pull from typed data files, not hardcoded JSX, so content stays centralized and the phase 2 CMS migration is trivial.

**`lib/data/services.ts`**
```ts
export type Service = {
  slug: string;
  title: string;           // H1
  metaTitle: string;
  metaDescription: string;
  intro: string;           // unique per-page paragraph, for SEO
  offences: string[];      // bulleted list
};

export const services: Service[] = [
  {
    slug: "fraud",
    title: "Fraud Solicitors in Birmingham",
    metaTitle: "Fraud Solicitors in Birmingham | MCS Solicitors",
    metaDescription: "Facing a fraud charge? Our Birmingham-based fraud solicitors provide expert defence for fraud, false accounting, and benefit fraud cases. Call 0121 812 5587.",
    intro: "Fraud allegations are often complex, document-heavy, and carry serious consequences. Our team has extensive experience defending fraud cases at every level, from initial police interview through to Crown Court trial.",
    offences: [
      "Fraud by False Representation",
      "Fraud by Failing to Disclose Information",
      "Fraud by Abuse of Position",
      "Possession of Articles for Use in Fraud",
      "Obtaining Services Dishonestly",
      "Conspiracy to Defraud",
      "False Accounting",
      "Benefit Fraud"
    ]
  }
  // ...remaining 9 services follow the same shape — full content in mcs-solicitors-website-copy.md
];
```

**`lib/data/testimonials.ts`** — array of `{ quote: string; attribution: string }`
**`lib/data/team.ts`** — array of `{ name: string; credentials: string; title?: string; bio?: string; photo?: string }`
**`lib/constants.ts`** — `PHONE`, `EMAIL`, `ADDRESS`, `HOURS` as single source of truth (fixes the domain-mismatch bug structurally: one constant, referenced everywhere, never re-typed per page)

## 7. Page-by-Page Requirements

### 7.1 Home (`/`)
- Hero: firm name, positioning line, click-to-call button, "24/7 Emergency" badge
- Trust bar: SRA Regulated · Cyber Essentials Certified · 35+ Years Combined Experience · Legal Aid & Private Funding
- "Who We Are" section
- "How We Can Help" (Police Station / Magistrates' / Crown Court / Appeal)
- Practice areas grid — 10 cards, generated by mapping over `services` data, linking to `/services/[slug]`
- Testimonial carousel (pulls from `testimonials` data)
- Footer contact band

### 7.2 About (`/about`)
- Firm history/positioning
- Team profiles generated from `team` data
- Accreditations list
- **Content gap flagged:** bios/photos missing for Mukesh Salhan and Yunus Razaq — see Content & Asset Checklist

### 7.3 Services hub (`/services`)
- Intro paragraph
- Grid of all 10 services, generated by mapping over `services` data

### 7.4 Individual service pages (`/services/[slug]`)
- Single dynamic route: `app/services/[slug]/page.tsx`
- `generateStaticParams()` returns all slugs from `services` data — statically generated at build time, not client-rendered
- `generateMetadata()` pulls `metaTitle`/`metaDescription` per slug for unique SEO tags
- Renders: H1 (`title`) → `intro` paragraph → `offences` bulleted list → shared "Why Choose Us" component → shared CTA component

### 7.5 Funding (`/funding`)
- Legal Aid vs Private sections; Police Station / Magistrates' / Crown Court / Appeals subsections
- Static content, no data file needed (low likelihood of frequent change)

### 7.6 Testimonials (`/testimonials`)
- All entries from `testimonials` data, full text
- JSON-LD structured data (Review/AggregateRating schema) injected via `<script type="application/ld+json">` in the page component
- **Content gap flagged:** one testimonial references "Stefan Salhan" — not on the team list. Confirm with client before publishing (see Content & Asset Checklist)

### 7.7 Contact (`/contact`)
- Form fields: First name, Surname, Email, Telephone, Message
- Submits to `/app/api/contact/route.ts`, which validates via Turnstile token then sends via Resend
- No visible honeypot text anywhere in the rendered form
- Map embed (Google Maps iframe, no API key required for a basic embed) of the McLaren Building
- Contact details pulled from `lib/constants.ts`, never re-typed

## 8. Design Direction

Full detail in **`mcs-solicitors-design-system.md`** — summary: deep navy/charcoal base, single gold accent reserved for CTAs, serif headings (Fraunces) for authority, clean sans body (Inter), no stock gavel/handcuff imagery, mobile-first with a sticky click-to-call element.

## 9. Content Fixes Required (flag to client, do not guess)

| Issue | Current state | Fix |
|---|---|---|
| Email domain mismatch | Website mcs-solicitors.com, email @mcssolicitors.net | Confirm canonical domain with client; represent consistently via `lib/constants.ts` |
| Missing team bios | Mukesh Salhan and Yunus Razaq have credentials only, no bio/photo | Request bios + headshots |
| Testimonial attribution | Initials only; one references unlisted "Stefan Salhan" | Confirm names permission and clarify the Stefan Salhan discrepancy |
| Cyber Essentials certificate | Raw PDF link only | Keep as link, but surface the badge visually in the homepage trust bar |

Full detail in **`mcs-solicitors-content-checklist.md`**.

## 10. Technical Requirements

- **Performance target:** Lighthouse mobile 90+ (current WPBakery site is bloated with builder overhead)
- **SEO:** unique `generateMetadata()` per page, `LegalService` JSON-LD on Home, `Review`/`AggregateRating` JSON-LD on Testimonials, `app/sitemap.ts` and `app/robots.ts`
- **Accessibility:** WCAG AA minimum — contrast ratios verified against the dark palette (see Design System doc), keyboard-navigable forms, alt text on all images
- **Spam protection:** Cloudflare Turnstile, server-side token verification in the API route — never a client-visible honeypot label
- **Environment variables:** `RESEND_API_KEY`, `TURNSTILE_SECRET_KEY`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY` — see `.env.example` in Agent Build Brief

## 11. Out of Scope (this phase)

- Sanity CMS / any backend (phase 2 upsell once client accepts and wants self-editing — see framework doc, Tier 1 → Tier 2 migration path)
- Blog / content marketing pages (phase 2 upsell)
- Live chat, client portal, case management integration

## 12. Success Metrics (quotable in the pitch)

- 15 indexable pages vs. 1 (current single-page site)
- Every practice area individually searchable on Google
- Contact form no longer leaks placeholder/honeypot text
- Single source of truth for contact details — domain/email inconsistency structurally impossible going forward

---

**Companion documents:**
- `mcs-solicitors-website-copy.md` — full page copy
- `mcs-solicitors-design-system.md` — exact colors, type scale, spacing, component styling
- `mcs-solicitors-agent-build-brief.md` — step-by-step build tasks + acceptance criteria, folder structure
- `mcs-solicitors-content-checklist.md` — what's still needed from the client
- `eloka-builds-project-framework.md` — reusable stack/tier framework for all future projects
