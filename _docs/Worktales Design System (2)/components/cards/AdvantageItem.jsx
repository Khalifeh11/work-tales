import { IconTile } from "../core/IconTile.jsx";

/**
 * Worktales AdvantageItem — a compact icon + heading + paragraph card.
 * Used in the "why hire with us" / Lebanese-advantage grids. No hover lift;
 * sits flat in the dark with a hairline border.
 */
export function AdvantageItem({ icon = "fa-industry", title, description, style = {} }) {
  return (
    <div
      style={{
        padding: "26px 24px",
        border: "1px solid var(--color-border-strong)",
        borderRadius: "var(--radius-xl)",
        background: "rgba(35,31,32,0.35)",
        fontFamily: "var(--font-sans)",
        ...style,
      }}
    >
      <div style={{ marginBottom: "16px" }}>
        <IconTile icon={icon} size="md" />
      </div>
      <h3 style={{ fontSize: "1.05rem", fontWeight: 600, margin: "0 0 8px", letterSpacing: "-0.01em", color: "var(--color-text)" }}>
        {title}
      </h3>
      <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.6, margin: 0 }}>
        {description}
      </p>
    </div>
  );
}
