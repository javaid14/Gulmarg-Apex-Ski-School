# Gulmarg Ski Himalaya — Website (Phase 1: Static)

A static-export-ready Next.js 14 (App Router) + Tailwind CSS clone of the
Gulmarg Ski Himalaya site structure, rebuilt with original layout/design and
placeholder Unsplash imagery (swap these for the client's real photos).

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
```

## Build for production

```bash
npm run build
npm start
```

## Structure

- `app/` — every route (Next.js App Router). Package and activity detail
  pages are dynamic routes (`app/packages/[slug]`, `app/activities/[slug]`)
  driven by data files.
- `components/` — Header, Footer, WhatsApp button, cards, contact form.
- `data/packages.js`, `data/activities.js` — all package/tour/trek/activity
  content lives here. Edit this to add or update offerings without touching
  page code.

## Before launch

1. **Images** — replace the Unsplash placeholder URLs in `data/packages.js`,
   `data/activities.js`, and the About/Home hero sections with the client's
   own photography (upload to `/public/images` and update `src` paths, or
   keep using a remote image host and update `next.config.mjs` accordingly).
2. **Copy** — package descriptions, itineraries, and prices are placeholders
   based on the original site's page titles. Confirm real pricing and
   itinerary details with the client.
3. **Legal pages** — Privacy Policy, Terms & Conditions, and the
   Cancellation/Refund Policy are placeholder text and need a real policy
   reviewed by the client (or their counsel) before launch.
4. **Contact form** — currently front-end only (no backend). Wire it to an
   email API route, or a form service like Formspree / Web3Forms, once
   you're ready to accept real enquiries.
5. **Fonts** — loaded via Google Fonts `<link>` tag in `app/layout.js`
   (Bricolage Grotesque + Inter). Swap for `next/font/google` once you're
   building in an environment with normal internet access — it self-hosts
   the font files for better performance.
6. **Static export** — to produce a pure static `/out` folder (no Node
   server needed), add `output: 'export'` to `next.config.mjs` and run
   `npm run build`. Note this disables the Next.js Image Optimization API,
   so remote images will need `unoptimized: true` in the images config.

## Deploy

Works out of the box on Vercel (recommended for Next.js), or as a static
export on Netlify / GitHub Pages / Cloudflare Pages.
