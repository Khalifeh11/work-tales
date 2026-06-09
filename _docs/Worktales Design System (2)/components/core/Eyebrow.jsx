const { useState: useEyebrowState } = React;

/**
 * Worktales Eyebrow — the uppercase orange section marker.
 * `pill` variant wraps it in a hairline capsule with an optional live pulse dot
 * (the hero eyebrow); `plain` is the bare uppercase label used above headings.
 */
export function Eyebrow({ children, variant = "plain", pulse = false, style = {} }) {
  if (variant === "pill") {
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          padding: "8px 16px",
          borderRadius: "var(--radius-pill)",
          border: "1px solid var(--color-border-strong)",
          background: "rgba(255,255,255,0.03)",
          fontFamily: "var(--font-sans)",
          fontSize: "0.78rem",
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--color-text-secondary)",
          ...style,
        }}
      >
        {pulse && <PulseDot />}
        {children}
      </span>
    );
  }
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "var(--font-sans)",
        textTransform: "uppercase",
        letterSpacing: "var(--tracking-eyebrow)",
        color: "var(--color-accent)",
        fontSize: "var(--text-eyebrow)",
        fontWeight: 700,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

function PulseDot() {
  const [id] = useEyebrowState(() => "wt-pulse-" + Math.random().toString(36).slice(2, 8));
  return (
    <React.Fragment>
      <style>{`
        @keyframes ${id} {
          0% { box-shadow: 0 0 0 0 rgba(239,80,35,0.6); }
          70% { box-shadow: 0 0 0 12px rgba(239,80,35,0); }
          100% { box-shadow: 0 0 0 0 rgba(239,80,35,0); }
        }
      `}</style>
      <span
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "var(--color-accent)",
          animation: `${id} 2s infinite`,
        }}
      />
    </React.Fragment>
  );
}
