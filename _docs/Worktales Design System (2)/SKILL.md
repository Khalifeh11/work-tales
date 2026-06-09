---
name: worktales-design
description: Use this skill to generate well-branded interfaces and assets for Worktales, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Worktales in one breath
An integrated workforce consultancy — Beirut-built, globally executed. Thesis: *"People decisions are the real risk in business."* Three pillars: **01 Hire** (Talent Solutions), **02 Build** (Training & Development), **03 Connect** (Culture & Leadership). Tagline: *"Empowering People. Unlocking Performance."*

## The look, fast
- **Canvas:** pure black `#000`, dark-mode-native. Depth from warm orange + deep maroon radial glows and a faint masked technical grid.
- **Color:** signal **orange `#EF5023`** (single action color, used surgically — one accent word per headline), **maroon `#4A1114`** for warmth, **sage `#B3C9C6`** as the cool accent and default body-text color, off-white `#F1F1F2` headlines.
- **Type:** **Montserrat**. Headlines at **medium (500)** with tight negative tracking; eyebrows **bold (700) UPPERCASE** orange with wide tracking; big semibold stats.
- **Shape:** pill CTAs (`999px`); cards at `18px` radius with a translucent gradient fill + white hairline border (flat, no shadow); glass chrome (header, dropdowns, hero card) with `backdrop-filter` blur and a far ambient shadow; icon glyphs seated in orange-wash rounded tiles.
- **Icons:** **Font Awesome 6.4** (solid), orange, in tiles. Never emoji.
- **Motion:** gentle overshoot easing `cubic-bezier(0.175,0.885,0.32,1.275)`; hover lifts (`-1` to `-4px`) and orange-glow reveals; sliding link arrows.
- **Voice:** executive, declarative, outcome-first. "You/your org" + "we". Sentence case. Em dashes. No hype, no emoji.

## How to build
1. Link `styles.css` (it `@import`s all tokens + Montserrat). Reference tokens like `var(--color-accent)`, `var(--gradient-card)`, `var(--radius-pill)`.
2. Load Font Awesome 6.4 from CDN for icons.
3. For React: load `_ds_bundle.js`, read components from `window.<Namespace>` (run the design-system check to get the current namespace), and compose `Button`, `PillarCard`, `IconTile`, `NavBar`, etc. See each component's `.prompt.md`.
4. For quick static mocks, copy markup patterns from `ui_kits/website/` and its `site.css`.
5. Pull logos and imagery from `assets/` (`worktales.png` on dark, `worktales-logo.png` on light).

Full detail — voice, visual foundations, iconography, component API — is in `README.md` and the per-component `.prompt.md` files.
