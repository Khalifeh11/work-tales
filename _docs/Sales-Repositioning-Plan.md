# WorkTales — Sales Repositioning Plan

## Context
The client delivered a new Company Profile (`_docs/WT Company Profile - Sales (1).pdf`) that narrows WorkTales from a broad talent/training/culture firm to a **sales-exclusive** firm. New tagline: *"Empowering People. Unlocking Sales Performance." / "Built in Beirut. Designed for Global Execution."*

The three pillars are renamed and one is merged with another, freeing a slot for a brand-new pillar:
- **Hire / Talent Solutions** → **01 Attract** (sales talent search & recruitment)
- **Training & Development** + **Culture & Leadership** → merged into **02 Develop**
- *(new)* → **03 Accelerate** (100-Day Sales Acceleration Program)

**Constraints:** keep the exact same layout — text changes + figure swaps only. 3 pillars still map to 3 pages. Site is not in production, so no old-URL/redirect concerns. Insights wheel already exists (CSS/SVG on culture page). No new image assets needed — all diagrams are CSS/SVG built in code.

## Page → file mapping
| New pillar | File (reused) | Effort |
|---|---|---|
| 01 Attract | `recruitment.html` | Small — copy reframe |
| 02 Develop | `training.html` (absorbs culture content) | Large — the merge |
| 03 Accelerate | `culture-leadership.html` (repurposed) | Medium — new content, old shell |

No files added or deleted; `culture-leadership.html` is repurposed in place.

## Nav decision
Surface the pillar names publicly (they're public-facing in the new profile). Dropdown = single-word label + existing one-line description slot:
```
For Organizations ▾
  Attract     — Hire sales talent that can deliver results.
  Develop     — Build the skills to win and grow business.
  Accelerate  — Turn potential into consistent performance.
```
Pure text swap — the dropdown design already supports label + description.

## Develop content decision
Reorganize from today's **five focus areas** (Sales Performance / AI & Future Skills / Organizational Execution / Communication / Human Skills — `training.html` lines 166–194) into the profile's **three Impact lanes** (Personal / Client / Team). The broad non-sales topics (AI/Future Skills, Organizational Execution, general Communication, Human Skills) fall away under the sales-only positioning. Keep "Why Build with Worktales" grid + Insights Discovery (moved over from culture). The minor "Program Formats" bits (hero `format-list`, the Program Formats card) can be quietly kept or folded in — not a client decision.

## "For Salespeople" decision
Client wants **"For Individuals" → "For Salespeople"** (kept, not removed). Creates a clean parallel: For Organizations (buyers) vs For Salespeople (talent). Content under it (Talent Pool, Webinars) must be reframed to **sales** talent pool / **sales** career webinars so the label matches the content. Wording options to confirm with client: Salespeople / Sales Professionals / Sales Talent (lean "Sales Professionals" — matches the profile's voice).

---

## Phases

### Phase 1 — Shared shell + homepage (do once, touches every file)
- Nav dropdown + footer across **all 4 files**: Hire/Build/Connect → Attract/Develop/Accelerate (label + `href` + description).
  - Nav markup is duplicated per page (`index.html`, `recruitment.html`, `training.html`, `culture-leadership.html`).
- `index.html`: hero tagline; three pillar cards (`.pillar-card`) renamed + new descriptions; outcomes band (`.outcomes`) → 90% client satisfaction / 65% hiring-cost reduction / 92% retention at 12 months / "talent ready in under 2 weeks"; add/refresh problem-framing copy (*"The real risk to growth is not strategy…"* — Unstable / Underpowered / Misaligned).
- Meta/`<title>`/OG tags across pages → sales language.
- Rename "For Individuals" nav dropdown → **"For Salespeople"** (final wording TBC with client); reframe its Talent Pool + Webinars copy to sales.

### Phase 2 — Attract (`recruitment.html`)
- Reframe copy to "sales talent" throughout; section header → **01 – Attract**.
- Confirm 6-step process labels: Align → Identify → Assess → Evaluate → Present → Support.
- "Why Hire with Worktales" grid copy refresh. Figure/text swaps only.

### Phase 3 — Develop (`training.html`) — the heavy merge
- Header → **02 – Develop**.
- Replace the **five focus areas** section (lines 166–194) with three Impact lanes (reuse `.format-card`): **Personal Impact / Client Impact / Team Impact**, each with its skill bullet list (Personal Branding, Executive Presence… / Consultative Selling, Business Development… / Leadership, Sales Effectiveness…).
- Move **Insights Discovery** partnership section + the existing CSS/SVG colour-energies wheel over from `culture-leadership.html`.
- Keep/refresh "Why Build with Worktales" card grid; keep or fold in the minor Program Formats bits.

### Phase 4 — Accelerate (repurpose `culture-leadership.html`)
- Replace culture content; header → **03 – Accelerate**, subtitle "100-Day Sales Acceleration Program".
- Intro copy (fixed-fee, hands-on engagement; works alongside leadership, not leave-behind consulting).
- **3-phase timeline** — the one spot that may need a small new layout component:
  - Phase 1 — Diagnose & Align (Days 1–21)
  - Phase 2 — Optimize & Execute (Days 22–70)
  - Phase 3 — Accelerate & Embed (Days 71–100)
  - Try to reuse existing card/step components before building new CSS.
- "Why Accelerate with Worktales" grid (Performance-Focused Approach, Sales Leadership Expertise, Hands-On Implementation, Objective Assessment, Sustainable Results).

### Phase 5 — Cleanup & QA
- Cross-page link/anchor check (footer + nav point to correct pillars).
- Contact info consistency: info@worktales.com · +961 81 850817 · Khanamerian Bldg, 5th Floor, Badaro – Beirut.
- Responsive pass on the merged Develop page and new Accelerate timeline.

## Dependencies / ordering
Phase 1 is the trunk (sets the nav contract). Phases 2, 3, 4 are independent of each other once Phase 1 lands and can be done in parallel. Phase 3 (Develop merge) is the long pole.

## Verification
- Open each page locally in the browser; confirm nav dropdown shows Attract/Develop/Accelerate on every page and each links to the right file.
- Develop page: three Impact lanes render, Insights wheel displays, old formats block gone.
- Accelerate page: 3-phase timeline renders and is responsive.
- Homepage: pillar cards + outcomes numbers updated; problem-framing section present.
- Quick mobile/responsive check (≤980px nav, ≤720px stacking) on the two most-changed pages.

## Out of scope (this round)
- About page / Alhasan welcome message (material exists in the profile but not requested now).
- New photo assets (impact-card photos, leadership headshot) — staying text/CSS only.
