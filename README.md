# RCTUB — Membership Landing Page

Membership recruitment landing page for the Robotics Club TU Berlin. Students fill out the application form to join the club.

**Live site:** https://rctub-join.vercel.app

## What's on the page

- **Hero** — full-viewport section with the club headline
- **About** — one-sentence description of the community
- **Apply** — floating card with the application form link and contact email
- **Footer** — logo, tagline, copyright, and contact

## Updating the form link

The Google Form URL is a single constant at the top of `src/components/site/Apply.tsx`:

```ts
const FORM_URL = "https://forms.gle/DBw9egb8NzTrt5zn8";
```

Replace the value and push — Vercel deploys automatically on every push to `main`.

## Stack

- [TanStack Start](https://tanstack.com/start) — SSR framework with file-based routing
- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Vite 8](https://vite.dev) + [Nitro](https://nitro.build) (Vercel preset)
- [Bun](https://bun.sh) — package manager and runtime

## Getting started

```bash
bun install
bun run dev
```

## Deploy

Pushes to `main` deploy to production automatically via Vercel's GitHub integration.

To deploy manually:

```bash
bun run build
vercel --prod --yes
```
