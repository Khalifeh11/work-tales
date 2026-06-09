/**
 * Worktales StatBlock — a single proof figure with the orange rule and uppercase label.
 * Drop several into a bordered row (StatRow) for the outcomes band.
 */
export function StatBlock({ value, label, bordered = true, style = {} }) {
  return (
    <div
      style={{
        flex: 1,
        textAlign: "center",
        padding: "clamp(28px, 4vw, 44px) 24px",
        borderRight: bordered ? "1px solid var(--color-border-strong)" : "none",
        fontFamily: "var(--font-sans)",
        ...style,
      }}
    >
      <div style={{ fontSize: "var(--text-stat)", fontWeight: 600, lineHeight: 1, letterSpacing: "-0.03em", color: "var(--color-text)" }}>
        {value}
      </div>
      <div style={{ width: "32px", height: "2px", background: "var(--color-accent)", margin: "16px auto 0" }} />
      <div style={{ marginTop: "12px", fontSize: "0.84rem", color: "var(--color-text-secondary)", letterSpacing: "0.06em", textTransform: "uppercase", lineHeight: 1.5 }}>
        {label}
      </div>
    </div>
  );
}

/**
 * A bordered row wrapper for StatBlocks (top + bottom hairlines, internal dividers).
 */
export function StatRow({ stats = [], style = {} }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${stats.length || 1}, 1fr)`,
        borderTop: "1px solid var(--color-border-strong)",
        borderBottom: "1px solid var(--color-border-strong)",
        ...style,
      }}
    >
      {stats.map((s, i) => (
        <StatBlock key={i} value={s.value} label={s.label} bordered={i < stats.length - 1} />
      ))}
    </div>
  );
}
