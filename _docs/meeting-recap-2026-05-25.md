# Meeting Recap & Action Plan — Homepage Restructure

**Meeting:** Impromptu Google Meet, 2026-05-25 (31 min)
**Recap written:** 2026-05-26
**Goal:** Restructure the WorkTales homepage around two audience paths and get the site live by mid-June.

---

## 1. What the meeting decided

- **Two audience paths** replace the service-based layout:
  - **For Organizations** — Recruitment · Training & Culture (Team Dynamics) · Talent Solutions (Connect)
  - **For Individuals** — Join Talent Pool · View Webinars
- **Homepage = curated glimpses**, not full content: brief service overviews, each with a CTA to a dedicated detail page.
- **"Lebanese Talent Advantage"** section to highlight the talent pool's unique benefits.
- **Webinars & Articles** section combined (engagement + SEO).
- **Partner logos** (e.g. Insights Discovery) added to relevant service sections for credibility.
- **Single "Schedule a Call" CTA** replaces the multi-button approach; form tailored for organizations (hiring vs. training needs).

**Timeline (hard):** live by **mid-June** — supports a mid-June webinar and an end-of-June bootcamp. Call with Nidale to finalize scope.

### Original action items
- Update homepage: remove "Why Lebanon"; add 3 services + 2–3 webinars; add Insights Discovery logo; add metrics; add B2C CTAs; embed form.
- Schedule call with Nidale re: webinar/bootcamp registration.

---

## 2. Gap analysis (current `redesign-v1` site → meeting requirements)

| Meeting item | Current state | Action |
|---|---|---|
| For Organizations / For Individuals paths | absent (3-pillar layout) | restructure |
| 3 service glimpses → detail pages | pillars link to `#contact` | add pages + relink |
| Webinars & Articles section | absent | add (placeholder) |
| Insights Discovery logo | text/icon only | add logo image |
| Metrics | **done** (outcomes band: 90% / 65% / 92% / <2wks) | keep |
| B2C CTAs (Join Talent Pool / View Webinars) | absent (dropped May 20) | add |
| Single "Schedule a Call" CTA | dual hero buttons | collapse to one |
| Embedded org form | mailto only | embed scheduler |
| Why Lebanon | full interactive hex section (added May 26) | remove |

> **Note:** the "Why Lebanon" interactive hex section was committed on May 26 — *after* the meeting that asked to remove it. Confirmed decision: remove it (see below).

---

## 3. Decisions confirmed (Karim, 2026-05-26)

1. **Why Lebanon → remove entirely.** Its value props move onto the Recruitment detail page instead of a standalone homepage section.
2. **Form → embed the RecruitCRM scheduler** (static GitHub Pages site has no backend).
3. **Build 3 service detail pages.**
4. **B2C content → placeholders** for now (real webinar details supplied later).

---

## 4. Implementation plan

### Files
- `index.html` — restructure (new section order below)
- `homepage.css` — styles for For-Orgs / For-Individuals / Webinars / scheduler embed; remove `.why-lebanon` rules
- `homepage.js` — keep nav toggle/dropdown; remove why-hex tooltip JS
- **New:** `recruitment.html`, `training.html`, `culture-leadership.html`
- **New asset:** `assets/insights-discovery.png` (client to supply)

### Homepage section order (replaces Hero → Pillars → Outcomes → Why Lebanon → CTA)
1. **Header/Nav** — drop `#why-lebanon`; point Services dropdown at the 3 detail pages; add a "For Individuals" entry; keep the single `Schedule a call` nav CTA.
2. **Hero** — collapse dual CTAs into one primary **Schedule a Call** → `#contact`. Keep eyebrow, headline, orbit, stat band.
3. **For Organizations** (`#organizations`) — intro + 3 existing pillar cards reused as glimpses, each linking to its detail page; Insights Discovery logo on the Culture & Leadership card.
4. **Outcomes band** — keep (metrics already done).
5. **For Individuals** (`#individuals`) — Join Talent Pool → `https://recruitcrm.io/talent_pool_submission/Worktales`; View Webinars → `#webinars`. (Open roles `https://recruitcrm.io/jobs/Worktales_jobs` available if wanted.)
6. **Webinars & Articles** (`#webinars`) — 2–3 placeholder webinar cards (title/date/register TBD) + articles teaser. Legacy `insights.html`/`article.html` on `main` = reference for a future articles system.
7. **Schedule a Call** (`#contact`) — embed RecruitCRM scheduler via iframe (`config_id=7d47f2ee-6221-486e-abdf-6eff839f6ad5`) + short org-focused copy + button fallback if the iframe is blocked.
8. **Footer** — remove "Why Lebanon"; point Services links at detail pages; add For Individuals / Webinars link.

**Remove:** entire `.why-lebanon` section + its CSS/JS.

### Detail pages (reuse shared header/footer, `homepage.css`, `homepage.js`)
- `recruitment.html` — Talent Solutions / Hire: search, dedicated remote teams, EOR, 0% retainer · 90-day replacement. **Folds in the Lebanese talent advantage** (education, English & French, global exposure, competitive cost) — salvaged from the removed Why Lebanon section.
- `training.html` — Training & Development / Build: sales, leadership, AI readiness, communication; workshops/certificates/diplomas.
- `culture-leadership.html` — Culture & Leadership / Connect: team effectiveness, leadership alignment, change/sales effectiveness, **Insights Discovery** (logo + partner copy).

---

## 5. Recovered assets (from legacy `main` branch)
- RecruitCRM scheduler: `https://scheduler.recruitcrm.io/scheduler?config_id=7d47f2ee-6221-486e-abdf-6eff839f6ad5`
- Talent pool submission: `https://recruitcrm.io/talent_pool_submission/Worktales`
- Open roles: `https://recruitcrm.io/jobs/Worktales_jobs`
- Legacy articles system: `insights.html` + `article.html` (on `main`)

---

## 6. Open items / dependencies before launch
- **Naming:** meeting labels ("Recruitment / Training & Culture / Talent Solutions (Connect)") don't cleanly map to the live pillars ("Talent Solutions / Training & Development / Culture & Leadership"). Built around existing pillars — **confirm final naming on the Nidale call.**
- Insights Discovery logo image (licensed brand asset).
- Real webinar titles, dates, registration URLs (mid-June event).
- Confirm the RecruitCRM `config_id` is current and iframe-embeddable (some configs block framing via `X-Frame-Options`).

## 7. Verification (when built)
- Static site, no build step — open `index.html` + each detail page in a browser.
- Nav dropdown → 3 detail pages; hero shows one CTA; glimpses link out; Insights Discovery logo renders; **scheduler iframe loads**; no dead `#why-lebanon` anchors.
- Responsive pass at ≤560px (recent commits show this breakpoint matters).
