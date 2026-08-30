# Gulmarg Apex Ski School

The official website for Gulmarg Apex Ski School, built with Next.js 14
(App Router, JavaScript) + Tailwind CSS, deployed on Vercel.

## Getting started

```bash
npm install
npm run dev
```

Visit:

```
http://localhost:3000
```

## Environment variables

The contact form is wired to Nodemailer. Create a `.env.local` file with
your SMTP credentials before running locally:

```bash
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
CONTACT_TO_EMAIL=
```

Add the same variables in Vercel under **Project Settings → Environment
Variables** for production.

## Build for production

```bash
npm run build
npm start
```

## Deployment

Deployed on **Vercel**, connected to the `main` branch, every push
triggers an automatic production deployment. Pull requests get their own
preview deployments.

- **`main`**, production
- **`dev`**, active development branch, merge into `main` when ready to
  ship:
  ```bash
  git checkout main
  git fetch origin
  git merge origin/dev
  git push origin main
  ```

## Project structure

```
app/                          Next.js App Router pages
├── layout.js                 root layout, Google Fonts <link>, metadata
├── page.js                   homepage, hero, packages, activities, testimonials
├── globals.css               Tailwind directives, font vars, .slope-edge clip-paths
├── packages/page.js          all packages listing
├── packages/[slug]/page.js   dynamic package detail page
├── activities/page.js        activities listing
├── activities/[slug]/page.js dynamic activity detail page
├── about-us/page.js
├── contact-us/page.js        uses ContactForm component
├── api/contact/route.js      Nodemailer API route handling form submissions
├── privacy-policy/page.js
├── terms-and-conditions/page.js
└── cancellation-and-refund-policy/page.js

components/
├── Header.js          nav + logo (next/image)
├── Footer.js           contact info, package links, copyright
├── WhatsAppButton.js   floating WhatsApp CTA
├── PackageCard.js
├── ActivityCard.js
├── Testimonial.js
└── ContactForm.js      'use client', submits to /api/contact (Nodemailer)

data/
├── packages.js   packages, tours, treks, allPackages, getPackageBySlug
└── activities.js activities, getActivityBySlug

public/images/
├── logo/
├── hero/
├── about/
├── packages/
└── activities/
```

## Design system

- **Colors:** deep alpine navy (`alpine-900`/`950`), ice blue (`ice-100`–`600`),
  amber/ember accent (`ember-400`–`600`) for CTAs, evokes alpenglow on snow.
- **Signature layout element:** angled "slope edge" section dividers via CSS
  `clip-path` (`.slope-edge`, `.slope-edge-top` in `globals.css`).
- **Fonts:** Bricolage Grotesque (display/headings) + Inter (body), loaded via
  a Google Fonts `<link>` tag in `app/layout.js` `<head>`. Can be switched to
  `next/font/google` to self-host the fonts for better performance.
  ```css
  :root {
    --font-display: "Bricolage Grotesque", sans-serif;
    --font-body: "Inter", sans-serif;
  }
  ```
  Exposed as Tailwind classes `font-display` / `font-body`.

## Contact form

The contact form on `/contact-us` posts to an API route
(`app/api/contact/route.js`) that sends the enquiry via Nodemailer to
`CONTACT_TO_EMAIL` using the SMTP credentials set in the environment
variables above. Make sure these are configured in Vercel before relying on
the form in production.

## Notes

- Images use Next.js's built-in Image Optimization (no `unoptimized` flag
  needed on Vercel).
- `jsconfig.json` uses a `@/*` path alias.
- Confirm real package pricing, itineraries, and the legal pages (Privacy
  Policy, Terms & Conditions, Cancellation/Refund Policy) have been reviewed
  and approved before treating any given deploy as final.
