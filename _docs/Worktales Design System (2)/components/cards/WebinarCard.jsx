import { Badge } from "../core/Badge.jsx";

/**
 * Worktales WebinarCard — date chip, status tag, title, meta, and a register link.
 * Used in the "For Individuals" webinars grid. Supports a disabled (coming-soon) state.
 */
export function WebinarCard({
  month = "JUN",
  day = "—",
  tag = "Coming soon",
  title,
  meta,
  registerLabel = "Register",
  disabled = false,
  onRegister,
  style = {},
}) {
  return (
    <article
      style={{
        position: "relative",
        padding: "28px 26px",
        border: "1px solid var(--color-border-strong)",
        borderRadius: "var(--radius-xl)",
        background: "rgba(35,31,32,0.35)",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        fontFamily: "var(--font-sans)",
        ...style,
      }}
    >
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "56px",
          height: "56px",
          borderRadius: "var(--radius-md)",
          background: "var(--color-accent-soft)",
          border: "1px solid var(--color-border-accent)",
          color: "var(--color-accent)",
          lineHeight: 1,
        }}
      >
        <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>{month}</span>
        <span style={{ fontSize: "1.3rem", fontWeight: 700, marginTop: "3px" }}>{day}</span>
      </div>

      <Badge variant="outline" style={{ alignSelf: "flex-start", color: "var(--wt-sage)" }}>{tag}</Badge>

      <h4 style={{ fontSize: "1.05rem", fontWeight: 600, margin: 0, lineHeight: 1.35, color: "var(--color-text)" }}>
        {title}
      </h4>
      {meta && <p style={{ fontSize: "0.84rem", color: "var(--color-text-secondary)", margin: 0 }}>{meta}</p>}

      <span
        onClick={disabled ? undefined : onRegister}
        style={{
          marginTop: "auto",
          fontSize: "0.82rem",
          fontWeight: 600,
          letterSpacing: "0.04em",
          color: disabled ? "var(--color-text-muted)" : "var(--color-accent)",
          cursor: disabled ? "default" : "pointer",
        }}
      >
        {disabled ? "Registration opening soon" : registerLabel}
      </span>
    </article>
  );
}
