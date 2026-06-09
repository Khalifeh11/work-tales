/**
 * Worktales Badge / Tag — small uppercase pill used for statuses and meta labels.
 * Variants: outline (hairline), soft (orange wash), solid (orange fill).
 */
export function Badge({ children, variant = "outline", style = {} }) {
  const variants = {
    outline: {
      color: "var(--color-text-secondary)",
      background: "transparent",
      border: "1px solid var(--color-border-strong)",
    },
    soft: {
      color: "var(--color-accent)",
      background: "var(--color-accent-soft)",
      border: "1px solid var(--color-border-accent)",
    },
    solid: {
      color: "#fff",
      background: "var(--color-accent)",
      border: "1px solid var(--color-accent)",
    },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "5px 12px",
        borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-sans)",
        fontSize: "0.68rem",
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        ...variants[variant],
        ...style,
      }}
    >
      {children}
    </span>
  );
}
