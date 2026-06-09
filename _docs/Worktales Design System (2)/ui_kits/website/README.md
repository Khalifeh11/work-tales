# Worktales — Website UI Kit

A high-fidelity, interactive recreation of the **Worktales** marketing site, built on the brand tokens and the real product stylesheet.

## Screens
- **Homepage** (`HomePage.jsx`) — glass nav, the orbital hero emblem, the three-pillar services grid, the outcomes proof band, the "For Individuals" talent-pool + webinars block, and an **interactive booking widget** (`SchedulerMock`) that stands in for the live RecruitCRM scheduler: pick a June day → pick a time → confirm.
- **Talent Solutions** (`TalentPage.jsx`) — the service detail page: split hero with the "Our process" glass step-card, the three hiring services, the "why hire with us" advantage grid + guarantee banner, and the editorial Lebanese-talent-advantage split.

## Interactions
- Page routing between Home and Talent Solutions (header logo, "For Organizations → Talent Solutions" dropdown, pillar links, footer).
- Sticky glass header that strengthens its background + shadow on scroll.
- Hover-reveal dropdown menus (desktop) / tap-accordion menu (mobile via the hamburger).
- The webinar cards have a "Notify me" toggle; the scheduler is a 3-step flow.

## Files
| File | Role |
|------|------|
| `index.html` | Entry point — loads React + the screen scripts, owns routing + scroll state. |
| `Header.jsx` | Fixed glass nav with dropdowns + mobile toggle. |
| `Footer.jsx` | Shared footer. |
| `HomePage.jsx` | Homepage sections + `SchedulerMock` + `WebinarItem`. |
| `TalentPage.jsx` | Talent Solutions detail page. |
| `site.css` | The product stylesheet (from `homepage.css`) plus scheduler-mock styles. |

## Notes
- Self-contained: styled with `site.css` (which carries the brand `:root` tokens identical to the design system) + Font Awesome 6.4 + Montserrat, so it renders without the compiled `_ds_bundle.js`. The canonical primitives (`Button`, `PillarCard`, `IconTile`, `NavBar`, …) live in `/components` and mirror this markup.
- Assets are referenced from `../../assets/` (logo, favicon, Lebanon map).
- This is a **recreation**, not production code — the scheduler and form actions are mocked, and sections not present in the source (a full Insights/About page) are intentionally omitted.
