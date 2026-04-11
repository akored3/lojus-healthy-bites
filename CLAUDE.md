# CLAUDE.md — Loju's Healthy Bites

Single-page Bauhaus-style landing for a healthy fast food brand. Ordering runs through WhatsApp deeplinks — no backend, no auth, no cart.

See [claude.md](claude.md) (lowercase) for the full design brief: color tokens, component patterns, section-by-section spec, copy, and WhatsApp flows. This file is the working guide for how we build, not what we build.

## Contacts / brand constants

- **Brand:** Loju's Healthy Bites
- **WhatsApp:** +234 913 892 8572 → `wa.me/2349138928572`
- **Email:** slenderbrizzy@gmail.com

When referencing these, centralize them in one module (e.g. `src/lib/brand.ts`) — never scatter the phone number or email across components.

## Stack

- React 19 (functional components + hooks only)
- TanStack Start (single route `/`, file-based routing)
- Vite 7
- Tailwind CSS v4 — configured via `@theme` + `@utility` in [src/styles.css](src/styles.css). No `tailwind.config.js`.
- Lucide React for icons

## Commands

```bash
npm run dev       # vite dev, port 3000
npm run build
npm run check     # prettier --write + eslint --fix
npm run test      # vitest
```

## Project layout

```
src/
├── routes/
│   ├── __root.tsx      # <html>, head meta, skip link, global scripts
│   └── index.tsx       # single page — composes all sections
├── components/         # one file per section (Navbar, Hero, Menu, ...)
├── lib/                # brand constants, whatsapp helpers, menu data
└── styles.css          # Tailwind import, @theme tokens, @utility classes
```

- One component per section. Sections live in `src/components/` and are composed inside [src/routes/index.tsx](src/routes/index.tsx).
- Static data (menu items, testimonials, gallery clips) goes in `src/lib/` as plain TS modules — not hardcoded inside JSX.
- The WhatsApp deeplink builder is a single helper in `src/lib/brand.ts`. Every CTA imports it.

## Design system — where things live

Tokens, utilities, and global styles are all in [src/styles.css](src/styles.css):

- `@theme` block exposes color tokens as Tailwind classes (`bg-bg-warm`, `text-accent-lemon`, etc.)
- `@utility bauhaus-card`, `bauhaus-card-lg`, `bauhaus-btn`, `bauhaus-chip`, `bauhaus-halftone`, `scrollbar-hide` — use these instead of re-declaring thick borders and hard shadows.
- Comfortaa is loaded globally on `body`. Do not re-declare `font-family` on children.

**Rule:** if you find yourself writing `border-[3px] border-[#1a1a1a] shadow-[6px_6px_0_#1a1a1a]` inline, stop — use `bauhaus-card` instead. If a new pattern repeats 3+ times, promote it to a `@utility` in `styles.css`.

## Code style

- **DRY, but not prematurely.** Extract a helper/component when the same pattern appears 3+ times. Two similar blocks can stay inline.
- **Separation of concerns:** data (`lib/`) ≠ presentation (`components/`) ≠ layout (`routes/`).
- **No comments** explaining what code does. Only explain *why* when it's non-obvious (a workaround, a constraint).
- **No dead code, no "just in case" abstractions, no backwards-compat shims.** If something's unused, delete it.
- **Mobile-first** Tailwind — start with base classes, add `sm:` / `md:` / `lg:` for larger screens.
- **Accessibility is not optional:** semantic HTML, `aria-*` on icon-only controls, `alt` on meaningful images, `alt=""` on decorative ones. See the brief's Accessibility section.
- **No JS animation libraries.** CSS keyframes for the hero slider; `IntersectionObserver` for scroll reveals.
- **No state libraries, no forms, no routing beyond `/`.** This is a static landing page.

## Build order (we are here ↓)

1. ✅ Scaffold + tokens + utilities
2. 🔨 Navbar — **in progress**
3. Hero + slider
4. Menu
5. Why Us
6. Testimonials
7. Gallery
8. CTA
9. Footer
10. WhatsApp FAB
11. SEO meta + JSON-LD polish

Build one section at a time. After each section: check it in the browser, then move on. Do not batch multiple sections into one change.

## Research-first mindset

Before inventing a pattern, check how it's usually solved:
- CSS-only mobile menu → `peer` + `<input type="checkbox">` (no JS state)
- Hero slider → pure CSS `@keyframes` on a flex track
- Scroll snap gallery → `snap-x snap-mandatory` + `snap-start`
- Scroll reveal → `IntersectionObserver` in a tiny custom hook

If a Tailwind v4 / TanStack Start idiom exists, use it instead of rolling your own.
