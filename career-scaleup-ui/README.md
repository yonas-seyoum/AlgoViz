# Career Scaleup (UI-Only)

UI-only professional job and recruitment platform built with Next.js 14 App Router, TypeScript, Tailwind CSS, and lightweight Shadcn-style components.

## Run locally

```bash
pnpm install # or npm install / yarn
pnpm dev
```

App runs on http://localhost:3001

## Project structure

- `src/app`: App Router pages and layouts
- `src/components`: Shared UI and layout components
- `src/data/fixtures`: Mock JSON data
- `src/hooks`: Mock hooks for auth and data
- `src/types`: TypeScript types for data structures

## Notes
- UI only (no backend/API). Replace mock hooks with real data later.
- Components have comments indicating where to integrate backend/AI.
- Design system: flat cards, subtle borders, no radius, accessible focus states.
