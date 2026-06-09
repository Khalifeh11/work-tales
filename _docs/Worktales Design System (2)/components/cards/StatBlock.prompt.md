The outcomes proof band — big figures with an orange rule and uppercase label. Use `StatRow` to render a bordered, evenly-divided row.

```jsx
<StatRow stats={[
  { value: "90%", label: "Client satisfaction" },
  { value: "65%", label: "Reduction in hiring cost" },
  { value: "92%", label: "Retention at 12 months" },
  { value: <>&lt;2 wks</>, label: "Talent ready to onboard" },
]} />
```

`StatBlock` is the single cell if you need to compose your own layout.
