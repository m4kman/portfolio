# Blog Table of Contents — Design Spec

## Overview

A minimal sticky table of contents for individual blog posts (`/blog/$slug`), modeled on the OpenAI blog TOC: a plain-text list of section headings in the left gutter, top-aligned with the first line of the post body, pinned while scrolling, with the active section highlighted in white. Validated interactively via a browser mockup (v4, `.superpowers/brainstorm/`).

## Decisions (from brainstorm)

- **h2 only** — flat single-level list; h3 subsections are not listed.
- **Hidden below `xl` (1280px)** — no mobile/tablet fallback UI; the rail only renders where the gutter has room.
- **Heading data via raw-source extraction** — no new dependencies, no build-config changes; fully server-rendered.
- Scrollspy active state, smooth scrolling, and native hash updates are in scope ("standard TOC functionality").

## Layout

- In `src/app/blog/$slug.tsx`, wrap the post body in a `relative` container holding both `BlogPostBody` and the new TOC. The header (title/date) stays outside the wrapper, so the rail's top edge is exactly the starting line of the body.
- The TOC is a rail absolutely positioned in the left gutter: entirely left of the article column (`right-full`), spanning the wrapper's full height, **226px wide** with a **48px gap** (`mr-12`) to the article. The centered `max-w-2xl` article column does not move.
- Inside the full-height rail, the list is `sticky top-24` (96px — matching the page's `pt-24` rhythm): it sits at the body's first line on load, pins near the viewport top on scroll, and stops at the end of the article. Pure CSS; no scroll listeners for positioning.
- Fits at `xl`: 672px article + 2 × (226px rail + 48px gap) = 1220px ≤ 1280px.

## Visual style

- Plain text list: no heading label, no bullets, no borders, no background.
- Instrument Sans, **12px** (`text-xs`), **line-height 1.25** (`leading-[1.25]`), **12px vertical gap** between items (`space-y-3`); long titles wrap to two lines.
- Inactive items `text-muted-foreground` (#929292 dark); active section white; hover brightens toward white; `transition-colors duration-200`.
- Entrance: existing `AnimatedText` blur/fade/slide at delay 0.3s (header 0s, body 0.2s).
- A post with no h2 headings renders no rail at all.

## Data layer (`src/lib/`)

- `slugify.ts` — shared helper: lowercase, non-alphanumerics stripped, spaces to hyphens. Single source of truth for anchor ids.
- `posts.ts` — add a second `import.meta.glob` over the same MDX files with `query: "?raw"`, and export `getPostHeadings(slug): { id: string; text: string }[]`:
  - Parses lines starting with `## ` (h2 only).
  - Tracks ``` fences line-by-line so headings inside code blocks are skipped.
  - Runs at module scope like the existing glob — SSR-safe, zero dependencies.

## Anchor ids

- The `h2` renderer in `src/components/mdx-components.tsx` computes `id={slugify(childrenText)}` and adds `scroll-mt-24` so anchored headings land 96px below the viewport top.
- Because the parser and the renderer share `slugify`, TOC hrefs and heading ids always agree.

## Components

- `src/components/blog/table-of-contents.tsx` — `<nav aria-label="Table of contents">` rail; receives `headings` as a prop, maps to `TocLink` items, calls the scrollspy hook. Route file stays compositional.
- `src/components/blog/toc-link.tsx` — a single anchor item; white text + `aria-current="true"` when active.
- `src/lib/use-active-heading.ts` — scrollspy hook: IntersectionObserver over the heading elements. Active = the last heading scrolled above the upper ~third of the viewport; before the first section, the first item is active.

## Behavior

- Links are plain `<a href="#id">` anchors — native hash updates (shareable URLs) and native jumps.
- Smooth scrolling via `scroll-behavior: smooth` on `html` in `globals.css`, wrapped in `@media (prefers-reduced-motion: no-preference)`. Additive change only — no existing tokens touched.

## Known limitations (accepted)

- Two h2s with identical text produce identical ids; the anchor jumps to the first occurrence.
- Headings containing MDX expressions would appear raw in the TOC text; this blog does not use them.

## Verification

- `tsc --noEmit` and `vite build` pass.
- Visual check in the user's open browser against the reference screenshot: gutter placement, first-line alignment, sticky pinning, active-section tracking, smooth scroll, hidden below `xl`.
- The existing oxlint failure (ultracite removal in progress) is expected and out of scope.
