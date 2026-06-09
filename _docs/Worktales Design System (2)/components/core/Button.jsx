const { useState } = React;

/**
 * Worktales Button — pill-shaped CTA.
 * Variants: primary (orange fill), ghost (hairline outline), link (uppercase arrow).
 * Self-contained: styling via brand CSS custom properties; hover handled in-component.
 */
export function Button({
  variant = "primary",
  size = "md",
  children,
  icon = "fa-arrow-right",
  showIcon,
  href,
  onClick,
  disabled = false,
  type = "button",
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const withIcon = showIcon ?? (variant !== "ghost");

  const pad = size === "sm" ? "9px 20px" : size === "lg" ? "16px 34px" : "13px 28px";
  const fontSize = size === "sm" ? "0.84rem" : size === "lg" ? "1rem" : "0.92rem";

  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: variant === "link" ? "0" : pad,
    borderRadius: "var(--radius-pill)",
    fontWeight: 600,
    fontSize: variant === "link" ? "0.88rem" : fontSize,
    letterSpacing: variant === "link" ? "0.04em" : "0.02em",
    border: "1.5px solid transparent",
    fontFamily: "var(--font-sans)",
    cursor: disabled ? "not-allowed" : "pointer",
    whiteSpace: "nowrap",
    textTransform: variant === "link" ? "uppercase" : "none",
    transition: "transform .25s ease, background .25s ease, border-color .25s ease, color .25s ease",
    transform: hover && !disabled && variant === "primary" ? "translateY(-1px)" : "none",
    opacity: disabled ? 0.5 : 1,
    ...style,
  };

  const variants = {
    primary: {
      background: hover && !disabled ? "var(--color-accent-hover)" : "var(--color-accent)",
      color: "var(--color-text-on-accent)",
      borderColor: hover && !disabled ? "var(--color-accent-hover)" : "var(--color-accent)",
    },
    ghost: {
      background: "transparent",
      color: hover && !disabled ? "var(--color-accent)" : "var(--color-text)",
      borderColor: hover && !disabled ? "var(--color-accent)" : "rgba(241,241,242,0.30)",
    },
    link: {
      background: "transparent",
      color: "var(--color-accent)",
      borderColor: "transparent",
    },
  };

  const css = { ...base, ...variants[variant] };
  const Tag = href ? "a" : "button";
  const tagProps = href ? { href } : { type, disabled };

  return (
    <Tag
      {...tagProps}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={css}
      {...rest}
    >
      {children}
      {withIcon && (
        <i
          className={`fas ${icon}`}
          style={{
            fontSize: variant === "link" ? "0.8em" : "0.85em",
            transform: hover && !disabled ? "translateX(4px)" : "none",
            transition: "transform .25s ease",
          }}
        />
      )}
    </Tag>
  );
}
