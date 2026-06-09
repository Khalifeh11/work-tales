Event card with a date chip, status tag, title, meta line, and register affordance. Composes `Badge`.

```jsx
<WebinarCard
  month="JUL" day="18"
  tag="Live" title="AI readiness for hiring teams"
  meta="Jul 18 · 5:00pm · Online"
  registerLabel="Register" onRegister={() => {}}
/>
<WebinarCard disabled title="Webinar title to be announced" meta="Date & time TBD · Online" />
```

`disabled` renders the muted "Registration opening soon" state used for TBD sessions. Lay out 3-up.
