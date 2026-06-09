/**
 * Worktales NavBar — the fixed glass header: logo, nav links, and a primary CTA.
 * Translucent with backdrop blur; gains a stronger background + shadow when `scrolled`.
 * Simplified for the design system (no dropdown logic) — pass plain link items.
 */
export function NavBar({
  logoSrc,
  logoAlt = "Worktales",
  links = [],
  ctaLabel = "Schedule a call",
  onCta,
  scrolled = false,
  style = {},
}) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        background: scrolled ? "var(--wt-glass-header-scrolled)" : "var(--wt-glass-header)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.10)" : "1px solid transparent",
        boxShadow: scrolled ? "var(--shadow-header)" : "none",
        padding: "14px 0",
        transition: "background .3s ease, border-color .3s ease, box-shadow .3s ease",
        fontFamily: "var(--font-sans)",
        ...style,
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          padding: "0 clamp(20px, 5vw, 120px)",
        }}
      >
        <a href="#" style={{ display: "inline-flex", alignItems: "center" }}>
          {logoSrc ? (
            <img src={logoSrc} alt={logoAlt} style={{ height: "48px", width: "auto", display: "block" }} />
          ) : (
            <span style={{ fontWeight: 700, fontSize: "1.3rem", color: "var(--color-text)" }}>{logoAlt}</span>
          )}
        </a>

        <ul style={{ display: "flex", listStyle: "none", alignItems: "center", gap: "6px", margin: 0, padding: 0 }}>
          {links.map((l, i) => (
            <li key={i}>
              <a
                href={l.href || "#"}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "8px 16px",
                  borderRadius: "var(--radius-pill)",
                  fontSize: "0.92rem",
                  fontWeight: 500,
                  color: "var(--color-text)",
                }}
              >
                {l.label}
                {l.hasDropdown && <i className="fas fa-chevron-down" style={{ fontSize: "0.7rem" }} />}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={onCta}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "11px 24px",
            borderRadius: "var(--radius-pill)",
            fontWeight: 600,
            fontSize: "0.88rem",
            background: "var(--color-accent)",
            color: "#fff",
            border: "1.5px solid var(--color-accent)",
            cursor: "pointer",
            fontFamily: "inherit",
            whiteSpace: "nowrap",
          }}
        >
          {ctaLabel} <i className="fas fa-arrow-right" style={{ fontSize: "0.8em" }} />
        </button>
      </nav>
    </header>
  );
}
