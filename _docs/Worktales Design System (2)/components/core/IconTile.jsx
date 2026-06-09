/**
 * Worktales IconTile — a Font Awesome glyph seated in a rounded orange-wash tile.
 * The brand's universal icon container (pillars, advantages, dropdown rows).
 * `solid` fills the tile orange with a white glyph (guarantees / emphasis).
 */
export function IconTile({ icon, size = "md", solid = false, style = {} }) {
  const dims = { sm: 36, md: 48, lg: 56 };
  const fonts = { sm: "0.95rem", md: "1.15rem", lg: "1.3rem" };
  const px = dims[size] || dims.md;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: px + "px",
        height: px + "px",
        borderRadius: "var(--radius-md)",
        background: solid ? "var(--color-accent)" : "var(--color-accent-soft)",
        border: solid ? "1px solid var(--color-accent)" : "1px solid var(--color-border-accent)",
        color: solid ? "#fff" : "var(--color-accent)",
        fontSize: fonts[size] || fonts.md,
        boxShadow: solid ? "var(--shadow-accent)" : "none",
        flex: "none",
        ...style,
      }}
    >
      <i className={`fas ${icon}`} />
    </span>
  );
}
