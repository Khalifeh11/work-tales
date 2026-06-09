const { useState: usePillarState } = React;
import { IconTile } from "../core/IconTile.jsx";

/**
 * Worktales PillarCard — the marquee service card (Talent Solutions / Training / Culture).
 * Icon tile, optional "01 / Hire" number, name, sage subtitle, description,
 * dashed-rule feature list, and a bottom link with sliding arrow. Lifts + glows on hover.
 */
export function PillarCard({
  icon = "fa-user-tie",
  number,
  name,
  subtitle,
  description,
  features = [],
  linkLabel,
  href = "#",
  style = {},
}) {
  const [hover, setHover] = usePillarState(false);

  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        padding: "32px 28px 28px",
        border: `1px solid ${hover ? "var(--color-border-accent)" : "var(--color-border-strong)"}`,
        borderRadius: "var(--radius-2xl)",
        background: "var(--gradient-card)",
        overflow: "hidden",
        transform: hover ? "translateY(-4px)" : "none",
        transition: "transform .35s ease, border-color .35s ease",
        fontFamily: "var(--font-sans)",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(400px 200px at 0% 0%, rgba(239,80,35,0.12), transparent 60%)",
          opacity: hover ? 1 : 0,
          transition: "opacity .35s ease",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative" }}>
        <div style={{ marginBottom: "20px" }}>
          <IconTile icon={icon} />
        </div>
        {number && (
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              color: "var(--color-accent)",
              marginBottom: "16px",
            }}
          >
            {number}
          </div>
        )}
        <h3 style={{ fontSize: "1.4rem", fontWeight: 600, margin: "0 0 6px", letterSpacing: "-0.01em", color: "var(--color-text)" }}>
          {name}
        </h3>
        {subtitle && (
          <div
            style={{
              fontSize: "0.78rem",
              color: "var(--wt-sage)",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              marginBottom: "18px",
            }}
          >
            {subtitle}
          </div>
        )}
        {description && (
          <p style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)", lineHeight: 1.65, margin: "0 0 24px" }}>
            {description}
          </p>
        )}
        {features.length > 0 && (
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {features.map((f, i) => (
              <li key={i} style={{ fontSize: "0.82rem", color: "var(--color-text)", paddingLeft: "22px", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, top: "8px", width: "12px", height: "1.5px", background: "var(--color-accent)" }} />
                {f}
              </li>
            ))}
          </ul>
        )}
        {linkLabel && (
          <a
            href={href}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: hover ? "var(--color-accent)" : "var(--color-text)",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              borderTop: "1px solid var(--color-border)",
              paddingTop: "18px",
              marginTop: "auto",
              transition: "color .25s ease",
            }}
          >
            {linkLabel}
            <i className="fas fa-arrow-right" style={{ color: "var(--color-accent)", transform: hover ? "translateX(4px)" : "none", transition: "transform .25s ease" }} />
          </a>
        )}
      </div>
    </article>
  );
}
