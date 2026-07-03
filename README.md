# RCTUB — Robotics Club TU Berlin

Website for Berlin's student robotics community at TU Berlin — covering autonomous drones, humanoids, and everything in between.

**Live site:** https://rctub-robotics-hub-lmzn.vercel.app

## Stack

- [TanStack Start](https://tanstack.com/start) — SSR framework
- [TanStack Router](https://tanstack.com/router) — file-based routing
- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)
- [Vite](https://vite.dev) + [Nitro](https://nitro.build) (Vercel preset)

## Getting started

```bash
bun install
bun run dev
```

## Deploy

The project deploys automatically to Vercel on every push to `main`. To deploy manually:

```bash
bun run build
vercel deploy --prebuilt
```

To promote a preview to production:

```bash
vercel deploy --prod
```
