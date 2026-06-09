The marquee service card used for the three pillars (Talent Solutions, Training & Development, Culture & Leadership). Composes `IconTile`.

```jsx
<PillarCard
  icon="fa-user-tie"
  number="01 / Hire"
  name="Talent Solutions"
  subtitle="Precision hiring & teams"
  description="Strategic search, dedicated remote teams, and employer-of-record services."
  features={["Executive & specialist search", "Dedicated remote teams", "0% retainer · 90-day replacement"]}
  linkLabel="Explore Talent Solutions"
  href="#"
/>
```

Lifts `-4px` and reveals an internal orange glow on hover; border shifts to orange. Drop `linkLabel` for a plain card, drop `number` to omit the eyebrow. Lay out 3-up in a grid with `gap: var(--grid-gap)`.
