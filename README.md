# Tayyab Hussain: Portfolio

Personal portfolio built with Next.js 15, Tailwind CSS v4, Framer Motion and Lenis.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
npm run lint && npm run typecheck   # checks
```

## Editing content

All text lives in `src/lib/data.ts`: profile, services, process, projects, milestones and FAQs.

- **Projects:** add an entry to `projects`. Put screenshots in `public/work/` and videos in `public/video/`.
  A project without a `cover` shows a designed mock UI (`mock` field).
- **Photo:** `public/me/hero.png` (transparent cutout), `public/me/avatar.png` (round nav avatar).
  `public/me/og.jpg` is the social share image.
- **Colors:** design tokens live at the top of `src/app/globals.css` (`--volt` is the signature accent).

## Security

`next.config.ts` sends a strict Content-Security-Policy plus frame, MIME-sniffing, referrer and
permissions headers on every route, and hides the `X-Powered-By` header. The site has no backend,
no API keys and no environment variables.

## Deploy

Push to GitHub and import the repo on Vercel. No environment variables are needed.
The contact form opens the visitor's email app with the message pre-filled, so it needs no backend.
