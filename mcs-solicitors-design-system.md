# MCS Solicitors — Design System

Purpose: remove every visual judgment call from the agent's hands. Every value below is meant to be copied directly into `tailwind.config.ts` or component code.

## 1. Color Tokens

| Token | Hex | Usage |
|---|---|---|
| `navy-950` | `#0B1220` | Primary background (dark sections, header, footer) |
| `navy-900` | `#111C2F` | Secondary background (cards on dark sections) |
| `slate-100` | `#F4F5F7` | Light section background |
| `white` | `#FFFFFF` | Card backgrounds on light sections, text on dark backgrounds |
| `charcoal-800` | `#1F2937` | Body text on light backgrounds |
| `gold-500` | `#C9A227` | Primary accent — CTAs, links, active states, icon accents. Use sparingly, never as a large fill |
| `gold-600` | `#A8841D` | Hover/active state for gold elements |
| `slate-400` | `#94A3B8` | Muted/secondary text, captions |

**Contrast check (WCAG AA):** `gold-500` on `navy-950` = 5.1:1 (passes for large text/UI, borderline for small body text — use gold only for buttons, links, and headings ≥18px, never for small body copy). `white` on `navy-950` = 17.9:1 (passes everywhere). `charcoal-800` on `slate-100` = 12.6:1 (passes everywhere).

## 2. Typography

| Role | Font | Weight | Tailwind config |
|---|---|---|---|
| Headings (H1–H3) | **Fraunces** | 600 (semibold) | `next/font/google` import, `variable: --font-fraunces` |
| Body / UI text | **Inter** | 400 (body), 500 (buttons/labels) | `next/font/google` import, `variable: --font-inter` |

**Type scale (Tailwind classes):**
- H1: `text-4xl md:text-5xl font-heading font-semibold leading-tight`
- H2: `text-3xl md:text-4xl font-heading font-semibold`
- H3: `text-xl md:text-2xl font-heading font-semibold`
- Body: `text-base leading-relaxed font-sans`
- Small/caption: `text-sm text-slate-400`

**Why these fonts:** Fraunces is a serif with enough weight and character to read as authoritative without tipping into generic "law firm template" territory (avoid Times New Roman / Playfair Display clichés). Inter is neutral, highly legible at small sizes, and standard for UI text.

## 3. Spacing & Layout

- Max content width: `max-w-6xl mx-auto`
- Section vertical padding: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Grid gap (practice area cards): `gap-6 md:gap-8`
- Border radius: `rounded-lg` (8px) — consistent across cards, buttons, form inputs. No fully-rounded ("pill") buttons — reads as too casual for this niche.

## 4. Component Styling Rules

### Primary Button (CTA — "Call Now", "Send Message")
```
bg-gold-500 hover:bg-gold-600 text-navy-950 font-medium
px-6 py-3 rounded-lg transition-colors
```
Always paired with an icon (phone icon for call CTAs) at 20px, left of text.

### Secondary Button
```
border border-white/20 text-white hover:bg-white/10
px-6 py-3 rounded-lg transition-colors
```

### Card (practice area grid, testimonial cards)
```
bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow
border border-slate-200
```

### Trust Bar (below hero)
Horizontal row on desktop, stacked on mobile, each item: small gold checkmark icon + `text-sm text-slate-400` label, separated by `border-l border-slate-700` dividers on desktop.

### Mobile Sticky Call Bar
Fixed to bottom of viewport on mobile only (`md:hidden`), full-width, `bg-gold-500 text-navy-950`, phone icon + "Call Now — 0121 812 5587", `z-50`. This is the single highest-priority mobile UI element — a visitor in crisis should never need to scroll to find it.

## 5. Imagery Direction

- **Avoid:** gavels, handcuffs, scales of justice clipart, generic "person in suit shaking hands" stock photography — all overused clichés in this niche that actively read as generic/untrustworthy now.
- **Preferred:** real team photography (once client provides it — see Content Checklist) shot against a clean, dark, editorial background; or, until photos exist, a clean typographic hero (firm name + positioning line) over a subtle dark gradient or a photo of the McLaren Building / Birmingham skyline at dusk.
- All images through `next/image`, WebP format, explicit `width`/`height` to prevent layout shift.

## 6. Icons

Use **lucide-react** (already available in the standard toolkit) for all icons — phone, mail, map-pin, check-circle (trust bar), chevron (accordions if used). Consistent stroke width `1.5`, sized `20px` inline with text, `24px` standalone.

## 7. Responsive Breakpoints (Tailwind defaults — do not customize)

`sm: 640px` `md: 768px` `lg: 1024px` `xl: 1280px` — mobile-first, design and build for `base` (mobile) styles first, layer up with `md:`/`lg:` overrides.
