Pill-shaped call-to-action — the brand's primary interactive element. Use `primary` for the main action, `ghost` for secondary, `link` for inline "see more" affordances.

```jsx
<Button variant="primary">Schedule a call</Button>
<Button variant="ghost">Explore services</Button>
<Button variant="link" icon="fa-arrow-right">See upcoming webinars</Button>
```

Variants: `primary` (orange fill, lifts on hover), `ghost` (hairline outline, turns orange on hover), `link` (uppercase orange with sliding arrow). Sizes: `sm` · `md` · `lg`. Pass `href` to render an `<a>`. The trailing Font Awesome icon shows by default on primary/link — override with `icon` or `showIcon={false}`. Requires Font Awesome 6.4 loaded for the glyph.
