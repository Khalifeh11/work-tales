The fixed, translucent glass site header with the brand wordmark, nav links, and a primary CTA.

```jsx
<NavBar
  logoSrc="assets/worktales.png"
  links={[
    { label: "For Organizations", hasDropdown: true },
    { label: "For Individuals", hasDropdown: true },
    { label: "Insights" }, { label: "About" },
  ]}
  ctaLabel="Schedule a call"
  scrolled={false}
/>
```

Backdrop-blurred and translucent; pass `scrolled` to apply the stronger background + far shadow + hairline used once the page scrolls. Dropdown menus are visual-only here (the `hasDropdown` flag just renders a chevron) — wire real menus in the consuming view.
