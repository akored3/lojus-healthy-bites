# Loju's Healthy Bites

Single-page Bauhaus-style landing page for **Loju's Healthy Bites** — a small healthy fast-food brand serving parfaits, mini pizzas, fresh juices, and wholesome bites.

Ordering runs through WhatsApp deeplinks. No backend, no cart, no auth.

**Live:** [lojus-healthy-bites.vercel.app](https://lojus-healthy-bites.vercel.app)

## Stack

- React 19 + TanStack Start (file-based routing, single route `/`)
- Vite 7 + TypeScript 5.7
- Tailwind CSS v4 — `@theme` tokens + `@utility` blocks declared in [src/styles.css](src/styles.css). No `tailwind.config.js`.
- Lucide React for icons
- SSR via Nitro with the Vercel preset
- Vitest + Testing Library for tests
- Auto-deployed on push to `main` (Vercel)

## Scripts

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
├── lib/                # brand constants, whatsapp helpers, menu data, custom hooks
└── styles.css          # Tailwind import, @theme tokens, @utility classes, keyframes
```

- Import alias `#/` maps to `src/` (configured in `package.json` `imports`).
- Static data (menu items, why-us blurbs) lives in [src/lib/](src/lib/) as plain TS modules.
- The WhatsApp deeplink builder is centralized in [src/lib/brand.ts](src/lib/brand.ts) — every CTA imports it.

## Design conventions

- Bauhaus chrome (3px ink border, hard offset shadow, Comfortaa) is exposed as `bauhaus-card`, `bauhaus-btn`, `bauhaus-chip` `@utility` blocks. Don't redeclare inline.
- All motion = CSS `@keyframes` + `IntersectionObserver` via the `useInView` hook. No JS animation libraries.
- Every animation has a `prefers-reduced-motion` override that shows the final state without motion.
- Mobile-first Tailwind throughout (`sm:` / `md:` / `lg:` for larger screens).
- Semantic HTML and accessible ARIA on every icon-only control.

See [CLAUDE.md](CLAUDE.md) for the full working agreement.
