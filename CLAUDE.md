# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Worktales marketing site — a **static, hand-written multi-page site** (no framework, no build step, no package manager, no tests). Deployed via GitHub Pages on the custom domain `worktales.com` (see `CNAME`). Repo: `Khalifeh11/work-tales`.

There is nothing to build, lint, or test. To preview, open the `.html` files in a browser or serve the directory statically (e.g. `python3 -m http.server`). Per the user's global instructions, do not run or suggest build/dev tooling.

## Structure

- **Pages** (each a complete standalone HTML document): `index.html` (homepage) plus the three "For Organizations" service pages `attract.html`, `develop.html`, `accelerate.html`.
- **`homepage.css`** — the single stylesheet for every page (~50KB). Dark theme: black background, Montserrat (Google Fonts), Font Awesome icons, accent color `rgba(239,80,35,...)`. CSS custom props like `--text`, `--text-secondary`. All styling lives here.
- **`homepage.js`** — the single script for every page. Handles: header shadow on scroll, mobile nav toggle, nav dropdowns (click on mobile ≤980px, hover/focus via CSS on desktop), and the contact form. The contact form has **no backend** — it builds a `mailto:info@worktales.com` draft on submit.
- **`assets/`** — images, logos, SVGs, favicon.
- **`_docs/`** — source/reference material only (sales PDFs, design system export, meeting notes). Tracked in git but **not part of the deployed site**.
- **`temp.txt`** — scratch CSS snippet, not loaded anywhere.

## Architecture notes that matter

- **The header/nav and footer are duplicated verbatim in all four HTML pages** — there are no includes/partials. Any change to navigation, logo, or footer must be applied to `index.html`, `attract.html`, `develop.html`, and `accelerate.html` individually, or they drift out of sync.
- The nav markup must stay in sync with `homepage.js`, which targets specific IDs/classes: `#siteHeader`, `#navToggle`, `#navMenu`, `.has-dropdown`, `.nav-link`, `.dropdown-item`. Renaming these in HTML breaks the JS silently.
- The desktop dropdown open-on-hover is pure CSS; JS only takes over for the `max-width: 980px` mobile breakpoint. Keep that breakpoint consistent between CSS and the `matchMedia` checks in `homepage.js`.
- Each page carries its own full SEO head block (title, `meta description`, `canonical`, Open Graph, Twitter card). When adding or copying a page, update these per-page rather than leaving the homepage's values.

## Conventions

- Image `alt` text describes the image content.
- Active branch work happens on feature branches (e.g. `redesign-v1`, `sales-redesign`); `main` is the baseline. Use conventional commit messages. Do not commit or push unless asked.
