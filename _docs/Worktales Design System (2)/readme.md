# Worktales — Design System

> Empowering People. Unlocking Performance.

This is the design system for **Worktales**, an integrated workforce consultancy based in Beirut and built for global execution. It captures the brand's visual language, voice, tokens, components, and full-screen UI recreations so that design agents and developers can produce on-brand interfaces, decks, and prototypes.

---

## 1. Product context

**Worktales** is a single-brand, multi-service consultancy. The thesis driving the whole brand: *"People decisions are the real risk in business."* Strategy looks good on paper; execution depends on the people behind it. Worktales helps organizations **hire**, **develop**, and **align** the talent that turns ambition into outcomes.

The offering is organized as **three integrated pillars**, each with a verb and a number:

| # | Pillar | Verb | What it is |
|---|--------|------|------------|
| **01** | **Talent Solutions** | *Hire* | Executive & specialist search, dedicated remote teams ("Talent Hubs") in Lebanon, and employer-of-record / talent-enablement. 0% retainer · 90-day replacement. |
| **02** | **Training & Development** | *Build* | Tailored programs: sales effectiveness, leadership, AI readiness, organizational execution, communication. Workshops, certificates, diplomas. |
| **03** | **Culture & Leadership** | *Connect* | Team effectiveness, leadership alignment, change & sales effectiveness. Official **Insights Discovery** partner. |

There are two audiences, surfaced as the top-level nav split:
- **For Organizations** — the three pillars above.
- **For Individuals** — a Talent Pool (join the ecosystem, get matched) and free Webinars.

A recurring proof point is the **Lebanese talent advantage**: a deep, rigorously-educated, genuinely trilingual (English / French / Arabic), globally-exposed professional pool at a competitive cost structure.

**Contact / facts:** Khanamerian Bldg, 5th Fl, Badaro · Beirut · info@worktales.com · +961 81 850 817. Talent pool & jobs run on RecruitCRM; calls are booked via a RecruitCRM scheduler embed.

### Surfaces represented
The current product is a **marketing website** (dark, single-page-feel with a detail page per service). This design system recreates that website as its primary UI kit, plus a slide-deck kit derived from the same visual language for pitch/brochure use.

---

## 2. Sources

This system was reverse-engineered from the brand's own code. If you have access, explore these to go deeper and stay current:

- **GitHub:** [`Khalifeh11/work-tales`](https://github.com/Khalifeh11/work-tales) — branch **`redesign-v1`**. The canonical files are `homepage.css` (the full token + component stylesheet), `index.html` (homepage), and `recruitment.html` (Talent Solutions detail page). `homepage.js` holds the nav/dropdown interactions.
- Brand assets live in that repo's `assets/` folder (logos, map, imagery). Key logos are mirrored into `assets/` here.

Reading those repositories directly will let you build richer, more accurate Worktales designs than this summary alone.

---

## 3. Content fundamentals (voice & tone)

The Worktales voice is **executive, declarative, and confident** — it speaks to decision-makers (founders, heads of people, executives), not to a general consumer audience.

**Tone & stance**
- **Provocative but grounded.** Headlines state a sharp thesis: *"People decisions are the real risk in business."* / *"A hiring partner, not a job board."* They make a claim, then back it with specifics.
- **Outcome-first.** Copy leads with results and proof: `90%` client satisfaction, `65%` reduction in hiring cost, `92%` retention at 12 months, `<2 wks` to onboard. Numbers are large and unhedged.
- **Plain, senior English.** No jargon-stuffing, no hype words like "revolutionary." Sentences are short and load-bearing.

**Person & address**
- Addresses the reader as **"you" / "your organization"**; refers to the company as **"we"**. ("We own the full hiring journey…", "Tell us what you're building.")
- Never first-person-singular. Never cutesy.

**Casing & punctuation**
- **Sentence case** for headlines and body. *Not* title case.
- **UPPERCASE** is reserved for eyebrows / section labels ("FOR ORGANIZATIONS", "WHAT WE DO", "OUTCOMES THAT MATTER TO EXECUTIVES") and small tags — always with wide letter-spacing.
- Em dashes ( — ) are the signature connective. The brand uses real typographic dashes and curly quotes (`&mdash;`, `&rsquo;`).
- A single accent word or phrase per headline is colored orange (the `<span class="accent">` / gradient `em`), e.g. "the **real risk**", "three **pillars**", "your next **worktale**."

**Signature phrases**
- Tagline: **"Empowering People. Unlocking Performance."**
- **"Let's write your next worktale."** (the brand name doubles as a noun — a "worktale" is a successful people-outcome).
- Pillar verbs: **Hire · Build · Connect**, numbered **01 / 02 / 03**.
- "Identified through context, not just credentials." · "0% retainer · 90-day replacement."

**Vibe**
- Premium, calm, slightly editorial. Think a strategy consultancy crossed with a modern tech brand. Dark, focused, no clutter.

**Emoji:** never. The brand uses Font Awesome glyphs, never emoji.

---

## 4. Visual foundations

### Canvas & mood
Pure **black (`#000`)** canvas everywhere — the brand is dark-mode-native. Depth comes from **layered radial glows** (warm orange at top-left, deep maroon at bottom-right) and a faint **technical grid** masked to a soft ellipse behind the hero. Sections alternate between flat black and a subtle `#000 → #060404 → #000` vertical gradient to create quiet bands without hard edges.

### Color
- **Signal orange `#EF5023`** is the single action/brand color — buttons, eyebrows, icons, accent words, focus rings. Its gradient partner `#FF7A3F` appears in the wordmark flame and gradient text. Hover lightens to `#FF6638`.
- **Maroon `#4A1114`** supplies warmth/depth — the guarantee banner, the molten core of the hero emblem, the strong surface tint.
- **Sage `#B3C9C6`** is the cool, quiet accent and the default **body-text** color (a desaturated blue-green that reads softer than white on black).
- Text is **off-white `#F1F1F2`** for headlines, **sage** for body, **gray `#8A8D8F`** for muted/disabled.
- Orange is used **surgically** — one accent word per headline, icon tiles, CTAs. It never floods a surface.

### Type
- **Montserrat** for everything (a geometric sans; 400–800).
- **Headlines** run **medium (500)** — not bold — with **tight negative tracking** (`-0.015em` to `-0.025em`) and large fluid sizing (up to `4rem`). This gives an airy, confident, expensive feel rather than a shouty one.
- **Eyebrows / labels** run **bold (700)**, **UPPERCASE**, wide tracking (`0.12em`), small (≈0.8rem), orange.
- **Stats** are big (up to `3.6rem`), semibold (600), very tight tracking.
- **Pillar numbers** ("01 / Hire") are bold, orange, widest tracking (`0.18em`).
- Body copy is `~0.95rem`, line-height `1.6–1.65`, sage.

### Shape, borders & cards
- **Cards**: `18px` radius (pillar cards), `16px` (advantage/webinar), `20px` (glass hire-card). Background is a top-to-bottom translucent gradient (`rgba(35,31,32,.4) → rgba(0,0,0,.6)`) over a **hairline border** `rgba(241,241,242,.18)`. No drop shadow on flat cards — they sit *in* the dark rather than floating above it.
- **Glass cards** (hire-card, header, dropdown) add `backdrop-filter: blur(12–14px)` and a soft far shadow (`0 30px 70px rgba(0,0,0,.45)`), often with an orange radial **glow** bleeding from one corner.
- **Icon tiles**: `48×48`, `12px` radius, orange-wash fill (`rgba(239,80,35,.15)`) + orange hairline border, orange glyph inside.
- **Buttons & chips** are fully **pill-shaped** (`999px`).
- **Hairlines** (`rgba(241,241,242,.10–.18)`) divide sections, separate stats in a row, and underline footer columns.

### Backgrounds & texture
- Hero: dual radial color glows + a `60px` technical grid masked by a radial ellipse (fades at the edges) at low opacity.
- Section bands: vertical near-black gradients, bordered top/bottom with hairlines.
- A faint **map of Lebanon** (`assets/lebanon.png`) sits at low opacity behind the "Lebanese talent advantage" editorial split.
- No photography-heavy backgrounds; imagery is sparing and abstract. The mood is cool-warm: warm orange glows against cold black, never bright or saturated washes.

### Motion
- **Easing** is a gentle overshoot bounce — `cubic-bezier(0.175, 0.885, 0.32, 1.275)` — for the "premium spring" feel; plus plain `ease` for color/opacity.
- Hover: buttons & cards **lift** (`translateY(-1px to -4px)`); icon tiles brighten their orange wash and lift `-2px`; links nudge their arrow `translateX(4px)`; card borders shift toward orange and an internal radial glow fades in.
- A live **pulse** dot (expanding orange ring) sits in the hero eyebrow.
- The hero emblem is **three concentric dashed/solid orbit rings** slowly rotating (60–80s) around a molten gradient **core** with three floating pillar nodes.
- Press states aren't heavily styled; focus uses a `2px` orange outline offset `3px`. All animation respects `prefers-reduced-motion`.

### Layout
- **Fixed glass header** (blur, translucent) that gains a stronger background + shadow + hairline on scroll.
- Full-width container with fluid side padding `clamp(20px, 5vw, 120px)`; sections pad `clamp(64px, 9vw, 120px)` vertically.
- Heavy use of **CSS grid** with `gap`: 3-up pillar grids, 4-up stat bands (with internal divider rules), editorial 2-column splits.
- Dropdown menus are glass panels with an arrow nub and an invisible hover-bridge so they don't close mid-traverse.

### Transparency & blur — when
- **Blur** is for *floating chrome*: the fixed header, dropdown panels, the glass hire-card, hero nodes. Flat content cards do **not** blur.
- **Translucency** layers warm tints over the black canvas so glows show through; borders are always semi-transparent white hairlines, never solid.

---

## 5. Iconography

- **System:** **Font Awesome 6.4.0** (free, solid `fas` + brands `fab`), loaded from CDN. This is the brand's icon language across nav, pillars, advantages, footer, and social.
- **Style:** solid, single-weight, monochrome. Icons are almost always **orange**, sized `~1rem–1.3rem`, and seated inside a rounded **orange-wash tile** (`48×48`, `12px` radius) — not used bare except inline in footer contact lines and link arrows.
- **Common glyphs in use:** `user-tie`, `graduation-cap`, `users` / `users-line` / `people-group` (the three pillars); `compass`, `chalkboard-user` (individuals); `arrow-right` / `arrow-left` / `chevron-down` (movement & disclosure); `shield-halved`, `certificate` (guarantees & partnerships); `industry`, `diagram-project`, `microchip`, `handshake-angle` (advantages); `language`, `globe`, `scale-balanced` (Lebanese advantage); `map-marker-alt`, `envelope`, `phone` (contact); `linkedin-in`, `facebook-f`, `instagram` (`fab` social).
- **Brand SVGs:** the repo also ships a handful of decorative `vector2836-*.svg` shapes and a `shape.svg`; these are incidental and not part of the core icon language. Prefer Font Awesome glyphs.
- **Emoji / Unicode icons:** never. The only non-FA glyphs used as "icons" are typographic — em dashes as list/separator marks and the short rule (`width:12px` orange bar) used as a custom bullet in pillar feature lists.

> When building Worktales designs, load Font Awesome 6.4.0 from CDN and seat orange glyphs in orange-wash tiles. Do **not** hand-draw SVG icons or substitute emoji.

---

## 6. Index / manifest

**Root**
- `styles.css` — global entry point (imports only). Link this.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill wrapper for download/use in Claude Code.

**Tokens** (`tokens/`)
- `colors.css` · `typography.css` · `spacing.css` · `fonts.css` (Montserrat) · `base.css` (canvas + small utilities).

**Foundation specimen cards** (`guidelines/`) — populate the Design System tab (Colors, Type, Spacing, Brand groups).

**Components** (`components/`) — reusable React primitives, each with `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and a `@dsCard` HTML:
- `core/` — `Button`, `Eyebrow`, `IconTile`, `Badge`
- `cards/` — `PillarCard`, `StatBlock` (+ `StatRow`), `AdvantageItem`, `WebinarCard`
- `navigation/` — `NavBar`

**UI kits** (`ui_kits/`)
- `website/` — high-fidelity, interactive recreation of the Worktales marketing site (homepage + Talent Solutions detail), with a mock booking flow. Built on `site.css` (the real product stylesheet).

**Assets** (`assets/`) — logos (`worktales.png` light, `worktales-logo.png` dark), `favicon.ico`, `lebanon.png`, `map.png`, `man.png`.

**Starting points** — `Button` (Core), `PillarCard` (Cards), `NavBar` (Navigation).

> No slide-template kit ships here — the source brand had no deck to recreate. Build slides directly on the tokens + components if needed.

---

*Namespace for `@dsCard` HTML: `window.WorktalesDesignSystem_8c64cc`.*
