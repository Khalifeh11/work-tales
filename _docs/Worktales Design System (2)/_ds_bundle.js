/* @ds-bundle: {"format":3,"namespace":"WorktalesDesignSystem_8c64cc","components":[{"name":"AdvantageItem","sourcePath":"components/cards/AdvantageItem.jsx"},{"name":"PillarCard","sourcePath":"components/cards/PillarCard.jsx"},{"name":"StatBlock","sourcePath":"components/cards/StatBlock.jsx"},{"name":"StatRow","sourcePath":"components/cards/StatBlock.jsx"},{"name":"WebinarCard","sourcePath":"components/cards/WebinarCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"IconTile","sourcePath":"components/core/IconTile.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/cards/AdvantageItem.jsx":"3bc9f2100697","components/cards/PillarCard.jsx":"1e146afcdfc7","components/cards/StatBlock.jsx":"883f7c74569b","components/cards/WebinarCard.jsx":"1187844cbde8","components/core/Badge.jsx":"a57da60e8612","components/core/Button.jsx":"da087a3a4c76","components/core/Eyebrow.jsx":"a7e535e5d179","components/core/IconTile.jsx":"771ace29e575","components/navigation/NavBar.jsx":"d0d2fbd4cbfb","ui_kits/website/ConnectPage.jsx":"c3a9d32659e7","ui_kits/website/Footer.jsx":"67fa35370091","ui_kits/website/Header.jsx":"33a253ac7fa7","ui_kits/website/HomePage.jsx":"afd010c55fc7","ui_kits/website/TalentPage.jsx":"b95b39ca9c50","ui_kits/website/TrainingPage.jsx":"6e7f85f6d5b5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WorktalesDesignSystem_8c64cc = window.WorktalesDesignSystem_8c64cc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/StatBlock.jsx
try { (() => {
/**
 * Worktales StatBlock — a single proof figure with the orange rule and uppercase label.
 * Drop several into a bordered row (StatRow) for the outcomes band.
 */
function StatBlock({
  value,
  label,
  bordered = true,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: "center",
      padding: "clamp(28px, 4vw, 44px) 24px",
      borderRight: bordered ? "1px solid var(--color-border-strong)" : "none",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-stat)",
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: "-0.03em",
      color: "var(--color-text)"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "32px",
      height: "2px",
      background: "var(--color-accent)",
      margin: "16px auto 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "12px",
      fontSize: "0.84rem",
      color: "var(--color-text-secondary)",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      lineHeight: 1.5
    }
  }, label));
}

/**
 * A bordered row wrapper for StatBlocks (top + bottom hairlines, internal dividers).
 */
function StatRow({
  stats = [],
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${stats.length || 1}, 1fr)`,
      borderTop: "1px solid var(--color-border-strong)",
      borderBottom: "1px solid var(--color-border-strong)",
      ...style
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement(StatBlock, {
    key: i,
    value: s.value,
    label: s.label,
    bordered: i < stats.length - 1
  })));
}
Object.assign(__ds_scope, { StatBlock, StatRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/**
 * Worktales Badge / Tag — small uppercase pill used for statuses and meta labels.
 * Variants: outline (hairline), soft (orange wash), solid (orange fill).
 */
function Badge({
  children,
  variant = "outline",
  style = {}
}) {
  const variants = {
    outline: {
      color: "var(--color-text-secondary)",
      background: "transparent",
      border: "1px solid var(--color-border-strong)"
    },
    soft: {
      color: "var(--color-accent)",
      background: "var(--color-accent-soft)",
      border: "1px solid var(--color-border-accent)"
    },
    solid: {
      color: "#fff",
      background: "var(--color-accent)",
      border: "1px solid var(--color-accent)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
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
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/cards/WebinarCard.jsx
try { (() => {
/**
 * Worktales WebinarCard — date chip, status tag, title, meta, and a register link.
 * Used in the "For Individuals" webinars grid. Supports a disabled (coming-soon) state.
 */
function WebinarCard({
  month = "JUN",
  day = "—",
  tag = "Coming soon",
  title,
  meta,
  registerLabel = "Register",
  disabled = false,
  onRegister,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      position: "relative",
      padding: "28px 26px",
      border: "1px solid var(--color-border-strong)",
      borderRadius: "var(--radius-xl)",
      background: "rgba(35,31,32,0.35)",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
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
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.68rem",
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase"
    }
  }, month), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "1.3rem",
      fontWeight: 700,
      marginTop: "3px"
    }
  }, day)), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "outline",
    style: {
      alignSelf: "flex-start",
      color: "var(--wt-sage)"
    }
  }, tag), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: "1.05rem",
      fontWeight: 600,
      margin: 0,
      lineHeight: 1.35,
      color: "var(--color-text)"
    }
  }, title), meta && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.84rem",
      color: "var(--color-text-secondary)",
      margin: 0
    }
  }, meta), /*#__PURE__*/React.createElement("span", {
    onClick: disabled ? undefined : onRegister,
    style: {
      marginTop: "auto",
      fontSize: "0.82rem",
      fontWeight: 600,
      letterSpacing: "0.04em",
      color: disabled ? "var(--color-text-muted)" : "var(--color-accent)",
      cursor: disabled ? "default" : "pointer"
    }
  }, disabled ? "Registration opening soon" : registerLabel));
}
Object.assign(__ds_scope, { WebinarCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/WebinarCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;

/**
 * Worktales Button — pill-shaped CTA.
 * Variants: primary (orange fill), ghost (hairline outline), link (uppercase arrow).
 * Self-contained: styling via brand CSS custom properties; hover handled in-component.
 */
function Button({
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
  const withIcon = showIcon ?? variant !== "ghost";
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
    ...style
  };
  const variants = {
    primary: {
      background: hover && !disabled ? "var(--color-accent-hover)" : "var(--color-accent)",
      color: "var(--color-text-on-accent)",
      borderColor: hover && !disabled ? "var(--color-accent-hover)" : "var(--color-accent)"
    },
    ghost: {
      background: "transparent",
      color: hover && !disabled ? "var(--color-accent)" : "var(--color-text)",
      borderColor: hover && !disabled ? "var(--color-accent)" : "rgba(241,241,242,0.30)"
    },
    link: {
      background: "transparent",
      color: "var(--color-accent)",
      borderColor: "transparent"
    }
  };
  const css = {
    ...base,
    ...variants[variant]
  };
  const Tag = href ? "a" : "button";
  const tagProps = href ? {
    href
  } : {
    type,
    disabled
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, tagProps, {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: css
  }, rest), children, withIcon && /*#__PURE__*/React.createElement("i", {
    className: `fas ${icon}`,
    style: {
      fontSize: variant === "link" ? "0.8em" : "0.85em",
      transform: hover && !disabled ? "translateX(4px)" : "none",
      transition: "transform .25s ease"
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
const {
  useState: useEyebrowState
} = React;

/**
 * Worktales Eyebrow — the uppercase orange section marker.
 * `pill` variant wraps it in a hairline capsule with an optional live pulse dot
 * (the hero eyebrow); `plain` is the bare uppercase label used above headings.
 */
function Eyebrow({
  children,
  variant = "plain",
  pulse = false,
  style = {}
}) {
  if (variant === "pill") {
    return /*#__PURE__*/React.createElement("span", {
      style: {
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
        ...style
      }
    }, pulse && /*#__PURE__*/React.createElement(PulseDot, null), children);
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      fontFamily: "var(--font-sans)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-eyebrow)",
      color: "var(--color-accent)",
      fontSize: "var(--text-eyebrow)",
      fontWeight: 700,
      ...style
    }
  }, children);
}
function PulseDot() {
  const [id] = useEyebrowState(() => "wt-pulse-" + Math.random().toString(36).slice(2, 8));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, `
        @keyframes ${id} {
          0% { box-shadow: 0 0 0 0 rgba(239,80,35,0.6); }
          70% { box-shadow: 0 0 0 12px rgba(239,80,35,0); }
          100% { box-shadow: 0 0 0 0 rgba(239,80,35,0); }
        }
      `), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: "var(--color-accent)",
      animation: `${id} 2s infinite`
    }
  }));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconTile.jsx
try { (() => {
/**
 * Worktales IconTile — a Font Awesome glyph seated in a rounded orange-wash tile.
 * The brand's universal icon container (pillars, advantages, dropdown rows).
 * `solid` fills the tile orange with a white glyph (guarantees / emphasis).
 */
function IconTile({
  icon,
  size = "md",
  solid = false,
  style = {}
}) {
  const dims = {
    sm: 36,
    md: 48,
    lg: 56
  };
  const fonts = {
    sm: "0.95rem",
    md: "1.15rem",
    lg: "1.3rem"
  };
  const px = dims[size] || dims.md;
  return /*#__PURE__*/React.createElement("span", {
    style: {
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
      ...style
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `fas ${icon}`
  }));
}
Object.assign(__ds_scope, { IconTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconTile.jsx", error: String((e && e.message) || e) }); }

// components/cards/AdvantageItem.jsx
try { (() => {
/**
 * Worktales AdvantageItem — a compact icon + heading + paragraph card.
 * Used in the "why hire with us" / Lebanese-advantage grids. No hover lift;
 * sits flat in the dark with a hairline border.
 */
function AdvantageItem({
  icon = "fa-industry",
  title,
  description,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "26px 24px",
      border: "1px solid var(--color-border-strong)",
      borderRadius: "var(--radius-xl)",
      background: "rgba(35,31,32,0.35)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconTile, {
    icon: icon,
    size: "md"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "1.05rem",
      fontWeight: 600,
      margin: "0 0 8px",
      letterSpacing: "-0.01em",
      color: "var(--color-text)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.9rem",
      color: "var(--color-text-secondary)",
      lineHeight: 1.6,
      margin: 0
    }
  }, description));
}
Object.assign(__ds_scope, { AdvantageItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/AdvantageItem.jsx", error: String((e && e.message) || e) }); }

// components/cards/PillarCard.jsx
try { (() => {
const {
  useState: usePillarState
} = React;
/**
 * Worktales PillarCard — the marquee service card (Talent Solutions / Training / Culture).
 * Icon tile, optional "01 / Hire" number, name, sage subtitle, description,
 * dashed-rule feature list, and a bottom link with sliding arrow. Lifts + glows on hover.
 */
function PillarCard({
  icon = "fa-user-tie",
  number,
  name,
  subtitle,
  description,
  features = [],
  linkLabel,
  href = "#",
  style = {}
}) {
  const [hover, setHover] = usePillarState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
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
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(400px 200px at 0% 0%, rgba(239,80,35,0.12), transparent 60%)",
      opacity: hover ? 1 : 0,
      transition: "opacity .35s ease",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "20px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconTile, {
    icon: icon
  })), number && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.75rem",
      fontWeight: 700,
      letterSpacing: "0.18em",
      color: "var(--color-accent)",
      marginBottom: "16px"
    }
  }, number), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "1.4rem",
      fontWeight: 600,
      margin: "0 0 6px",
      letterSpacing: "-0.01em",
      color: "var(--color-text)"
    }
  }, name), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.78rem",
      color: "var(--wt-sage)",
      textTransform: "uppercase",
      letterSpacing: "0.14em",
      marginBottom: "18px"
    }
  }, subtitle), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.95rem",
      color: "var(--color-text-secondary)",
      lineHeight: 1.65,
      margin: "0 0 24px"
    }
  }, description), features.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: "0 0 28px",
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontSize: "0.82rem",
      color: "var(--color-text)",
      paddingLeft: "22px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: "8px",
      width: "12px",
      height: "1.5px",
      background: "var(--color-accent)"
    }
  }), f))), linkLabel && /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
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
      transition: "color .25s ease"
    }
  }, linkLabel, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-right",
    style: {
      color: "var(--color-accent)",
      transform: hover ? "translateX(4px)" : "none",
      transition: "transform .25s ease"
    }
  }))));
}
Object.assign(__ds_scope, { PillarCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PillarCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
/**
 * Worktales NavBar — the fixed glass header: logo, nav links, and a primary CTA.
 * Translucent with backdrop blur; gains a stronger background + shadow when `scrolled`.
 * Simplified for the design system (no dropdown logic) — pass plain link items.
 */
function NavBar({
  logoSrc,
  logoAlt = "Worktales",
  links = [],
  ctaLabel = "Schedule a call",
  onCta,
  scrolled = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
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
      ...style
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "24px",
      padding: "0 clamp(20px, 5vw, 120px)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "inline-flex",
      alignItems: "center"
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: logoAlt,
    style: {
      height: "48px",
      width: "auto",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: "1.3rem",
      color: "var(--color-text)"
    }
  }, logoAlt)), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      listStyle: "none",
      alignItems: "center",
      gap: "6px",
      margin: 0,
      padding: 0
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href || "#",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "8px 16px",
      borderRadius: "var(--radius-pill)",
      fontSize: "0.92rem",
      fontWeight: 500,
      color: "var(--color-text)"
    }
  }, l.label, l.hasDropdown && /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chevron-down",
    style: {
      fontSize: "0.7rem"
    }
  }))))), /*#__PURE__*/React.createElement("button", {
    onClick: onCta,
    style: {
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
      whiteSpace: "nowrap"
    }
  }, ctaLabel, " ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-right",
    style: {
      fontSize: "0.8em"
    }
  }))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ConnectPage.jsx
try { (() => {
// Worktales website kit — Culture & Leadership detail page (03 / Connect).
function ConnectPage({
  onNavigate
}) {
  const back = e => {
    e.preventDefault();
    onNavigate("home");
    window.scrollTo({
      top: 0
    });
  };
  const toContact = e => {
    e.preventDefault();
    onNavigate("home");
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView();
    }, 60);
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-grid-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-hero-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-hero-copy"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "back",
    onClick: back
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-left"
  }), " All services"), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", null, "03 / Connect")), /*#__PURE__*/React.createElement("h1", null, "Culture & Leadership: alignment between people, purpose, and ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "ways of working.")), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Organizations don\u2019t succeed through talent alone. As teams expand across functions, geographies, and cultures, the ability to align people, purpose, and ways of working becomes decisive \u2014 so Connect strengthens culture, fosters collaboration, and helps people feel meaningfully aligned with where they work."), /*#__PURE__*/React.createElement("div", {
    className: "hero-ctas"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn-primary",
    onClick: e => e.preventDefault()
  }, "Request program brochures ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-right"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn-ghost",
    onClick: back
  }, "Explore all services"))), /*#__PURE__*/React.createElement("aside", {
    className: "hire-card manifesto-card",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hire-card-glow"
  }), /*#__PURE__*/React.createElement("span", {
    className: "hire-card-eyebrow"
  }, "The Worktales view"), /*#__PURE__*/React.createElement("p", {
    className: "manifesto-q"
  }, "Culture is ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "not accidental.")), /*#__PURE__*/React.createElement("span", {
    className: "manifesto-rule"
  }), /*#__PURE__*/React.createElement("p", {
    className: "manifesto-sub"
  }, "High-performing organizations build it deliberately \u2014 aligning behaviors, values, and ways of working with where the business is going."))), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta hero-proof"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-meta-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "Official"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Insights Discovery partner")), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "4 colours"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "A shared team language")), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "Discussion-led"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Interactive sessions"))))), /*#__PURE__*/React.createElement("section", {
    className: "pillars section-padding"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pillars-intro"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-title"
  }, "What we strengthen"), /*#__PURE__*/React.createElement("h2", null, "Four ways we help your people ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "work better together."))), /*#__PURE__*/React.createElement("div", {
    className: "connect-grid"
  }, EFFECTIVENESS.map(e => /*#__PURE__*/React.createElement("article", {
    className: "pillar-card",
    key: e.name
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar-icon",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: `fas ${e.icon}`
  })), /*#__PURE__*/React.createElement("h3", {
    className: "pillar-name"
  }, e.name), /*#__PURE__*/React.createElement("div", {
    className: "pillar-subtitle"
  }, e.subtitle), /*#__PURE__*/React.createElement("p", {
    className: "pillar-desc connect-desc"
  }, e.desc)))))), /*#__PURE__*/React.createElement("section", {
    className: "section-padding"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pillars-intro"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-title"
  }, "Why connect with Worktales"), /*#__PURE__*/React.createElement("h2", null, "Culture work with a ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "strategist\u2019s mindset."))), /*#__PURE__*/React.createElement("div", {
    className: "whyb-grid"
  }, /*#__PURE__*/React.createElement("article", {
    className: "whyb-card col-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "whyb-ico",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-comments"
  })), /*#__PURE__*/React.createElement("h3", null, "Engaging Sessions"), /*#__PURE__*/React.createElement("p", null, "Our sessions are interactive and discussion-based \u2014 encouraging reflection, dialogue, and peer learning.")), /*#__PURE__*/React.createElement("article", {
    className: "whyb-card col-8 is-accent"
  }, /*#__PURE__*/React.createElement("span", {
    className: "whyb-ico",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-circle-nodes"
  })), /*#__PURE__*/React.createElement("h3", null, "Insights Discovery Partnership"), /*#__PURE__*/React.createElement("p", null, "Through our partnership with Insights Discovery, we use globally recognized psychometric tools to strengthen self-awareness, communication, and team collaboration.")), /*#__PURE__*/React.createElement("article", {
    className: "whyb-card col-4 is-compact"
  }, /*#__PURE__*/React.createElement("span", {
    className: "whyb-ico",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-bullhorn"
  })), /*#__PURE__*/React.createElement("h3", null, "Communication Excellence")), /*#__PURE__*/React.createElement("article", {
    className: "whyb-card col-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "whyb-ico",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-link"
  })), /*#__PURE__*/React.createElement("h3", null, "Connection Formats"), /*#__PURE__*/React.createElement("p", null, "Delivered through workshops, team sessions, leadership offsites, and engagement initiatives.")), /*#__PURE__*/React.createElement("article", {
    className: "whyb-card col-4 is-accent"
  }, /*#__PURE__*/React.createElement("span", {
    className: "whyb-ico",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-bullseye"
  })), /*#__PURE__*/React.createElement("h3", null, "Strategy-Driven Culture Work"), /*#__PURE__*/React.createElement("p", null, "We approach culture and leadership with a strategist\u2019s mindset \u2014 aligning behaviors, values, and ways of working with organizational objectives."))))), /*#__PURE__*/React.createElement("section", {
    className: "pillars section-padding"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pillars-intro"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-title"
  }, "Our Insights Discovery partnership"), /*#__PURE__*/React.createElement("h2", null, "A shared language for how people ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "think, work, and connect."))), /*#__PURE__*/React.createElement("div", {
    className: "insights-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "insights-copy"
  }, /*#__PURE__*/React.createElement("p", null, "A psychometric learning tool grounded in Carl Jung\u2019s psychology of personality types, Insights Discovery builds self-awareness and strengthens workplace relationships. A simple four-colour model explains behavior and communication styles."), /*#__PURE__*/React.createElement("p", null, "Participants gain insight into their strengths, motivations, communication and management style, and their impact on others."), /*#__PURE__*/React.createElement("p", {
    className: "insights-lead"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead-strong"
  }, "The model becomes a shared language"), " that improves collaboration and builds stronger teams.")), /*#__PURE__*/React.createElement("div", {
    className: "energy-grid",
    role: "list",
    "aria-label": "The four colour energies"
  }, ENERGIES.map(c => /*#__PURE__*/React.createElement("div", {
    className: "energy-card",
    role: "listitem",
    key: c.name,
    style: {
      "--e": c.color
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "energy-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "energy-dot",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "energy-name"
  }, c.name)), /*#__PURE__*/React.createElement("ul", {
    className: "energy-traits"
  }, c.traits.map(t => /*#__PURE__*/React.createElement("li", {
    key: t
  }, t))))))), /*#__PURE__*/React.createElement("div", {
    className: "howit-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-title"
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    className: "howit-title"
  }, "From a short questionnaire to a ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "shared way of working."))), /*#__PURE__*/React.createElement("ol", {
    className: "howit-grid"
  }, HOWIT.map((s, i) => /*#__PURE__*/React.createElement("li", {
    className: "howit-step",
    key: s
  }, /*#__PURE__*/React.createElement("span", {
    className: "howit-num"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("p", null, s)))))), /*#__PURE__*/React.createElement("section", {
    className: "cta-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-title"
  }, "Let\u2019s talk"), /*#__PURE__*/React.createElement("h2", null, "Ready to build a culture ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "on purpose?")), /*#__PURE__*/React.createElement("p", null, "Tell us where alignment is breaking down \u2014 across leadership, teams, or change. We\u2019ll design a Connect program around it, using Insights Discovery to give your people a shared language."), /*#__PURE__*/React.createElement("div", {
    className: "btns"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn-primary",
    onClick: toContact
  }, "Schedule a call ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-right"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn-ghost",
    onClick: e => e.preventDefault()
  }, "Request program brochures")))));
}
const EFFECTIVENESS = [{
  icon: "fa-people-group",
  name: "Team Building & Effectiveness",
  subtitle: "Collaboration & communication",
  desc: "Builds stronger collaboration by helping team members understand each other\u2019s working styles, improve communication, and leverage diverse strengths within the team."
}, {
  icon: "fa-user-tie",
  name: "Leadership Effectiveness",
  subtitle: "Impact & self-awareness",
  desc: "Helps leaders understand their impact on others, adapt their leadership style, and lead teams with greater clarity, awareness, and intention."
}, {
  icon: "fa-arrows-rotate",
  name: "Change Effectiveness",
  subtitle: "Resilience & transitions",
  desc: "Helps individuals understand their response to change and build the awareness and resilience needed to navigate transitions effectively."
}, {
  icon: "fa-handshake",
  name: "Sales Effectiveness",
  subtitle: "Customer styles & trust",
  desc: "Helps sales professionals recognize different customer styles and adapt their communication to build trust and communicate value more effectively."
}];
const ENERGIES = [{
  name: "Cool Blue",
  color: "#3B82C4",
  traits: ["cautious", "precise", "deliberate", "questioning", "formal"]
}, {
  name: "Fiery Red",
  color: "#D5392E",
  traits: ["competitive", "demanding", "determined", "strong-willed", "purposeful"]
}, {
  name: "Earth Green",
  color: "#5BA13C",
  traits: ["caring", "encouraging", "sharing", "patient", "relaxed"]
}, {
  name: "Sunshine Yellow",
  color: "#F0B429",
  traits: ["sociable", "dynamic", "demonstrative", "enthusiastic", "persuasive"]
}];
const HOWIT = ["Participants complete a short online questionnaire on their work preferences and behaviors.", "Responses generate a personalized profile based on the four-colour energy model.", "Results are explored through engaging, facilitator-led workshops built for reflection.", "Participants learn to recognize energy styles in themselves and others — and adapt.", "The framework flexes to leadership, team, communication, or sales objectives."];
window.ConnectPage = ConnectPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ConnectPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Worktales website kit — shared footer.
function Footer({
  onNavigate
}) {
  const go = (page, e) => {
    if (e) e.preventDefault();
    onNavigate(page);
    window.scrollTo({
      top: 0
    });
  };
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo-row"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/worktales.png",
    alt: "Worktales",
    className: "footer-logo-img"
  })), /*#__PURE__*/React.createElement("p", {
    className: "tagline"
  }, "Empowering People. Unlocking Performance."), /*#__PURE__*/React.createElement("p", null, "An integrated workforce consultancy operating across hiring, capability development, and culture & leadership alignment."), /*#__PURE__*/React.createElement("div", {
    className: "footer-social"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "LinkedIn"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fab fa-linkedin-in"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Facebook"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fab fa-facebook-f"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Instagram"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fab fa-instagram"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, "For Organizations"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => go("talent", e)
  }, "Talent Solutions")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => go("build", e)
  }, "Training & Development")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => go("connect", e)
  }, "Culture & Leadership")))), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, "For Individuals"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#individuals"
  }, "Join the talent pool")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#individuals"
  }, "Open roles")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#webinars"
  }, "Webinars")))), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, "Company"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#about"
  }, "About")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#insights"
  }, "Insights")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#contact"
  }, "Contact")))), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, "Get in touch"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-map-marker-alt footer-contact-ico"
  }), " Khanamerian Bldg, 5th Fl, Badaro \xB7 Beirut")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-envelope footer-contact-ico"
  }), " info@worktales.com")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-phone footer-contact-ico"
  }), " +961 81 850 817"))))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Worktales. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Empowering People. Unlocking Performance."))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// Worktales website kit — glass header with dropdown menus + mobile nav.
const {
  useState: useHeaderState
} = React;
function Header({
  scrolled,
  onNavigate,
  current
}) {
  const [menuOpen, setMenuOpen] = useHeaderState(false);
  const [openDrop, setOpenDrop] = useHeaderState(null); // mobile accordion

  const isMobile = () => window.matchMedia("(max-width: 980px)").matches;
  const go = (page, e) => {
    if (e) e.preventDefault();
    onNavigate(page);
    setMenuOpen(false);
    setOpenDrop(null);
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  };
  const toggleDrop = (key, e) => {
    if (!isMobile()) return;
    e.preventDefault();
    setOpenDrop(k => k === key ? null : key);
  };
  return /*#__PURE__*/React.createElement("header", {
    className: `header ${scrolled ? "scrolled" : ""}`,
    id: "siteHeader"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "nav container",
    "aria-label": "Primary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-logo"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    "aria-label": "Worktales home",
    onClick: e => go("home", e)
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/worktales.png",
    alt: "Worktales",
    className: "nav-logo-img"
  }))), /*#__PURE__*/React.createElement("button", {
    className: `nav-toggle ${menuOpen ? "open" : ""}`,
    "aria-label": "Toggle navigation",
    "aria-expanded": menuOpen,
    onClick: () => setMenuOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("ul", {
    className: `nav-menu ${menuOpen ? "open" : ""}`,
    id: "navMenu"
  }, /*#__PURE__*/React.createElement("li", {
    className: `has-dropdown ${openDrop === "org" ? "open" : ""}`
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nav-link",
    "aria-haspopup": "true",
    onClick: e => toggleDrop("org", e)
  }, "For Organizations ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chevron-down chev"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dropdown",
    role: "menu"
  }, /*#__PURE__*/React.createElement("a", {
    className: "dropdown-item",
    href: "#",
    role: "menuitem",
    onClick: e => go("talent", e)
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-user-tie"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Talent Solutions"), /*#__PURE__*/React.createElement("span", {
    className: "desc"
  }, "Precision hiring, dedicated teams, employer-of-record."))), /*#__PURE__*/React.createElement("a", {
    className: "dropdown-item",
    href: "#",
    role: "menuitem",
    onClick: e => go("build", e)
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-graduation-cap"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Training & Development"), /*#__PURE__*/React.createElement("span", {
    className: "desc"
  }, "Sales, leadership, AI readiness, communication programs."))), /*#__PURE__*/React.createElement("a", {
    className: "dropdown-item",
    href: "#",
    role: "menuitem",
    onClick: e => go("connect", e)
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-users-line"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Culture & Leadership"), /*#__PURE__*/React.createElement("span", {
    className: "desc"
  }, "Team effectiveness, leadership alignment, Insights Discovery."))))), /*#__PURE__*/React.createElement("li", {
    className: `has-dropdown ${openDrop === "ind" ? "open" : ""}`
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nav-link",
    "aria-haspopup": "true",
    onClick: e => toggleDrop("ind", e)
  }, "For Individuals ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chevron-down chev"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dropdown",
    role: "menu"
  }, /*#__PURE__*/React.createElement("a", {
    className: "dropdown-item",
    href: "#individuals",
    role: "menuitem",
    onClick: () => setMenuOpen(false)
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-compass"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Talent Pool"), /*#__PURE__*/React.createElement("span", {
    className: "desc"
  }, "Join the Worktales talent ecosystem and get matched to roles."))), /*#__PURE__*/React.createElement("a", {
    className: "dropdown-item",
    href: "#webinars",
    role: "menuitem",
    onClick: () => setMenuOpen(false)
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chalkboard-user"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Webinars"), /*#__PURE__*/React.createElement("span", {
    className: "desc"
  }, "Live sessions on careers, skills, and the future of work."))))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    href: "#insights",
    onClick: () => setMenuOpen(false)
  }, "Insights")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    href: "#about",
    onClick: () => setMenuOpen(false)
  }, "About")))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Worktales website kit — Homepage.
const {
  useState: useHomeState
} = React;
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - 80,
    behavior: "smooth"
  });
}
function HomePage({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "home"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-grid-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero-eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pulse"
  }), " Built in Beirut \xB7 Designed for global execution"), /*#__PURE__*/React.createElement("h1", {
    className: "hero-title"
  }, "People decisions are the ", /*#__PURE__*/React.createElement("span", {
    className: "em"
  }, "real risk"), " in business."), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "Strategy looks good on paper. Execution depends on the people behind it. Worktales helps organizations ", /*#__PURE__*/React.createElement("strong", null, "hire"), ", ", /*#__PURE__*/React.createElement("strong", null, "develop"), ", and ", /*#__PURE__*/React.createElement("strong", null, "align"), " the talent that turns ambition into outcomes."), /*#__PURE__*/React.createElement("div", {
    className: "hero-ctas"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "btn btn-primary",
    onClick: e => {
      e.preventDefault();
      scrollToId("contact");
    }
  }, "Schedule a call ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-right"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#services",
    className: "btn btn-ghost",
    onClick: e => {
      e.preventDefault();
      scrollToId("services");
    }
  }, "Explore services"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-visual",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-orbit outer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-orbit"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-orbit inner"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-core"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-node h1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar-num"
  }, "01 Hire"), "Talent"), /*#__PURE__*/React.createElement("div", {
    className: "hero-node h2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar-num"
  }, "02 Build"), "Training"), /*#__PURE__*/React.createElement("div", {
    className: "hero-node h3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar-num"
  }, "03 Connect"), "Culture"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-meta-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "3"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Integrated pillars")), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-certificate hero-meta-cert"
  })), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Insights Discovery Partner")), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "90%"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Client satisfaction"))))), /*#__PURE__*/React.createElement("section", {
    className: "pillars section-padding",
    id: "services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pillars-intro"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-title"
  }, "For organizations"), /*#__PURE__*/React.createElement("h2", null, "One consultancy, ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "three pillars"), ", ", /*#__PURE__*/React.createElement("span", {
    className: "nowrap"
  }, "one outcome: people who deliver."))), /*#__PURE__*/React.createElement("div", {
    className: "pillar-grid"
  }, PILLARS.map(p => /*#__PURE__*/React.createElement("article", {
    className: "pillar-card",
    key: p.name
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar-icon",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: `fas ${p.icon}`
  })), /*#__PURE__*/React.createElement("span", {
    className: "pillar-num"
  }, p.num), /*#__PURE__*/React.createElement("h3", {
    className: "pillar-name"
  }, p.name), /*#__PURE__*/React.createElement("div", {
    className: "pillar-subtitle"
  }, p.subtitle), /*#__PURE__*/React.createElement("p", {
    className: "pillar-desc"
  }, p.desc), /*#__PURE__*/React.createElement("ul", {
    className: "pillar-features"
  }, p.features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f
  }, f))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "pillar-link",
    onClick: e => {
      e.preventDefault();
      p.talent ? onNavigate("talent") : p.build ? onNavigate("build") : p.connect ? onNavigate("connect") : scrollToId("contact");
      window.scrollTo({
        top: p.talent || p.build || p.connect ? 0 : window.scrollY
      });
    }
  }, "Explore ", p.name, " ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-right"
  }))))))), /*#__PURE__*/React.createElement("section", {
    className: "outcomes section-padding"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container outcomes-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "outcomes-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-title"
  }, "Outcomes that matter to executives"), /*#__PURE__*/React.createElement("h2", null, "The numbers behind the work.")), /*#__PURE__*/React.createElement("div", {
    className: "outcomes-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "outcome"
  }, /*#__PURE__*/React.createElement("div", {
    className: "big"
  }, "90%"), /*#__PURE__*/React.createElement("div", {
    className: "rule"
  }), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Client satisfaction")), /*#__PURE__*/React.createElement("div", {
    className: "outcome"
  }, /*#__PURE__*/React.createElement("div", {
    className: "big"
  }, "65%"), /*#__PURE__*/React.createElement("div", {
    className: "rule"
  }), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Reduction in hiring cost")), /*#__PURE__*/React.createElement("div", {
    className: "outcome"
  }, /*#__PURE__*/React.createElement("div", {
    className: "big"
  }, "92%"), /*#__PURE__*/React.createElement("div", {
    className: "rule"
  }), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Retention at 12 months")), /*#__PURE__*/React.createElement("div", {
    className: "outcome"
  }, /*#__PURE__*/React.createElement("div", {
    className: "big"
  }, "<2\xA0wks"), /*#__PURE__*/React.createElement("div", {
    className: "rule"
  }), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Talent ready to onboard"))))), /*#__PURE__*/React.createElement("section", {
    className: "individuals section-padding",
    id: "individuals"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pillars-intro"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-title"
  }, "For individuals"), /*#__PURE__*/React.createElement("h2", null, "Building your career? ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "Start with us."))), /*#__PURE__*/React.createElement("div", {
    className: "indiv-grid"
  }, /*#__PURE__*/React.createElement("article", {
    className: "indiv-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar-icon",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-compass"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "indiv-title"
  }, "Join our talent pool"), /*#__PURE__*/React.createElement("p", {
    className: "indiv-desc"
  }, "Looking for your next role? Join the Worktales talent ecosystem and we\u2019ll match you with opportunities as they open \u2014 from dedicated remote teams to executive roles across the region and beyond."), /*#__PURE__*/React.createElement("div", {
    className: "indiv-ctas"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn-primary",
    onClick: e => e.preventDefault()
  }, "Join the talent pool ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-right"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn-ghost",
    onClick: e => e.preventDefault()
  }, "View open roles"))), /*#__PURE__*/React.createElement("article", {
    className: "indiv-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar-icon",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chalkboard-user"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "indiv-title"
  }, "Learn with our webinars"), /*#__PURE__*/React.createElement("p", {
    className: "indiv-desc"
  }, "Live sessions on careers, skills, and the future of work \u2014 practical, interactive, and free to attend. Register for an upcoming session below."), /*#__PURE__*/React.createElement("a", {
    href: "#webinars",
    className: "btn-link",
    onClick: e => {
      e.preventDefault();
      scrollToId("webinars");
    }
  }, "See upcoming webinars ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-right"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "webinars",
    id: "webinars"
  }, /*#__PURE__*/React.createElement("div", {
    className: "webinars-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-title"
  }, "Upcoming webinars"), /*#__PURE__*/React.createElement("h3", null, "Sessions worth your time.")), /*#__PURE__*/React.createElement("div", {
    className: "webinar-grid"
  }, WEBINARS.map((w, i) => /*#__PURE__*/React.createElement(WebinarItem, _extends({
    key: i
  }, w))))))), /*#__PURE__*/React.createElement("section", {
    className: "cta-band",
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-title"
  }, "Let\u2019s talk"), /*#__PURE__*/React.createElement("h2", null, "Let\u2019s write your next ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "worktale"), "."), /*#__PURE__*/React.createElement("p", null, "Whether you\u2019re hiring, building capability, or aligning your leadership team \u2014 start with a conversation. Pick a time that works and we\u2019ll listen first, then propose."), /*#__PURE__*/React.createElement(SchedulerMock, null), /*#__PURE__*/React.createElement("div", {
    className: "btns"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn-ghost",
    onClick: e => e.preventDefault()
  }, "Request a brochure")))));
}
function WebinarItem({
  month,
  tag,
  registered
}) {
  const [done, setDone] = useHomeState(false);
  return /*#__PURE__*/React.createElement("article", {
    className: "webinar-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "webinar-date"
  }, /*#__PURE__*/React.createElement("span", {
    className: "webinar-month"
  }, month), /*#__PURE__*/React.createElement("span", {
    className: "webinar-day"
  }, "\u2014")), /*#__PURE__*/React.createElement("span", {
    className: "webinar-tag"
  }, tag), /*#__PURE__*/React.createElement("h4", {
    className: "webinar-title"
  }, "Webinar title to be announced"), /*#__PURE__*/React.createElement("p", {
    className: "webinar-meta"
  }, "Date & time TBD \xB7 Online"), /*#__PURE__*/React.createElement("span", {
    className: `webinar-register ${done ? "" : "is-disabled"}`,
    style: done ? {
      color: "var(--accent)",
      cursor: "default"
    } : {},
    onClick: () => setDone(true),
    role: "button"
  }, done ? "✓ You're on the list" : "Notify me"));
}

// Fake scheduler replacing the RecruitCRM iframe — demonstrates interactivity.
function SchedulerMock() {
  const [step, setStep] = useHomeState(1);
  const [day, setDay] = useHomeState(null);
  const [time, setTime] = useHomeState(null);
  const days = [{
    d: "Mon",
    n: 9
  }, {
    d: "Tue",
    n: 10
  }, {
    d: "Wed",
    n: 11
  }, {
    d: "Thu",
    n: 12
  }, {
    d: "Fri",
    n: 13
  }];
  const times = ["09:30", "11:00", "13:30", "15:00", "16:30"];
  return /*#__PURE__*/React.createElement("div", {
    className: "scheduler"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sched-card"
  }, step < 3 && /*#__PURE__*/React.createElement("div", {
    className: "sched-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sched-eyebrow"
  }, "Schedule a call"), /*#__PURE__*/React.createElement("span", {
    className: "sched-title"
  }, "30-minute intro \xB7 with the Worktales team")), step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "sched-prompt"
  }, "Pick a day in June"), /*#__PURE__*/React.createElement("div", {
    className: "sched-days"
  }, days.map(x => /*#__PURE__*/React.createElement("button", {
    key: x.n,
    className: `sched-day ${day === x.n ? "is-sel" : ""}`,
    onClick: () => setDay(x.n)
  }, /*#__PURE__*/React.createElement("span", {
    className: "sd-d"
  }, x.d), /*#__PURE__*/React.createElement("span", {
    className: "sd-n"
  }, x.n)))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary sched-next",
    disabled: !day,
    onClick: () => setStep(2)
  }, "Choose a time ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-right"
  }))), step === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "sched-prompt"
  }, "Times for Thu, June ", day, " ", /*#__PURE__*/React.createElement("span", {
    className: "sched-tz"
  }, "\xB7 Beirut (GMT+3)")), /*#__PURE__*/React.createElement("div", {
    className: "sched-times"
  }, times.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    className: `sched-time ${time === t ? "is-sel" : ""}`,
    onClick: () => setTime(t)
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "sched-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: () => setStep(1)
  }, "Back"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    disabled: !time,
    onClick: () => setStep(3)
  }, "Confirm booking ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-right"
  })))), step === 3 && /*#__PURE__*/React.createElement("div", {
    className: "sched-done"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sched-check"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check"
  })), /*#__PURE__*/React.createElement("h3", null, "You\u2019re booked."), /*#__PURE__*/React.createElement("p", null, "June ", day, " at ", time, " \xB7 Beirut time. A calendar invite is on its way to your inbox."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: () => {
      setStep(1);
      setDay(null);
      setTime(null);
    }
  }, "Book another time"))));
}
const PILLARS = [{
  num: "01 / Hire",
  icon: "fa-user-tie",
  name: "Talent Solutions",
  subtitle: "Precision hiring & teams",
  talent: true,
  desc: "Strategic search, dedicated remote teams, and employer-of-record services. We own the full hiring journey so each hire is intentional, culture-aligned, and ready to contribute from day one.",
  features: ["Executive & specialist search", "Dedicated remote teams in Lebanon", "EOR — no local entity required", "0% retainer · 90-day replacement"]
}, {
  num: "02 / Build",
  icon: "fa-graduation-cap",
  name: "Training & Development",
  subtitle: "Skills that move the business",
  build: true,
  desc: "Tailored programs in sales performance, leadership, AI readiness, organizational execution, and communication — designed around the real capability gaps slowing your teams down.",
  features: ["Sales & commercial effectiveness", "AI / technology & future skills", "Leadership & execution", "Workshops · certificates · diplomas"]
}, {
  num: "03 / Connect",
  icon: "fa-users",
  name: "Culture & Leadership",
  subtitle: "Teams that work together",
  connect: true,
  desc: "High-performing organizations build culture deliberately. We align leadership, sharpen team dynamics, and run Insights Discovery to make collaboration faster, clearer, and more accountable.",
  features: ["Team building & effectiveness", "Leadership alignment", "Change & sales effectiveness", "Insights Discovery partner"]
}];
const WEBINARS = [{
  month: "JUN",
  tag: "Coming soon"
}, {
  month: "JUN",
  tag: "Coming soon"
}, {
  month: "JUL",
  tag: "Coming soon"
}];
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TalentPage.jsx
try { (() => {
// Worktales website kit — Talent Solutions detail page (recruitment).
function TalentPage({
  onNavigate
}) {
  const back = e => {
    e.preventDefault();
    onNavigate("home");
    window.scrollTo({
      top: 0
    });
  };
  const toContact = e => {
    e.preventDefault();
    onNavigate("home");
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView();
    }, 60);
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-grid-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-hero-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-hero-copy"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "back",
    onClick: back
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-left"
  }), " All services"), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", null, "01 / Hire")), /*#__PURE__*/React.createElement("h1", null, "Talent Solutions: the right hire, ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "identified through context.")), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Effective hiring begins with understanding how an organization truly operates \u2014 how decisions are made, what success looks like, and how culture shapes performance. We own the full hiring journey so every hire is intentional, culture-aligned, and ready to contribute from day one."), /*#__PURE__*/React.createElement("div", {
    className: "hero-ctas"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn-primary",
    onClick: toContact
  }, "Schedule a call ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-right"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn-ghost",
    onClick: back
  }, "Explore all services"))), /*#__PURE__*/React.createElement("aside", {
    className: "hire-card",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hire-card-glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hire-card-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hire-card-eyebrow"
  }, "Our process"), /*#__PURE__*/React.createElement("span", {
    className: "hire-card-title"
  }, "Every hire, start to finish")), /*#__PURE__*/React.createElement("ol", {
    className: "hire-steps"
  }, /*#__PURE__*/React.createElement("li", {
    className: "is-done"
  }, /*#__PURE__*/React.createElement("span", {
    className: "step-dot"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check"
  })), /*#__PURE__*/React.createElement("span", {
    className: "step-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "step-name"
  }, "Sourced"), /*#__PURE__*/React.createElement("span", {
    className: "step-note"
  }, "AI-assisted, context-first"))), /*#__PURE__*/React.createElement("li", {
    className: "is-done"
  }, /*#__PURE__*/React.createElement("span", {
    className: "step-dot"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check"
  })), /*#__PURE__*/React.createElement("span", {
    className: "step-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "step-name"
  }, "Assessed"), /*#__PURE__*/React.createElement("span", {
    className: "step-note"
  }, "Standardized fit, not just CVs"))), /*#__PURE__*/React.createElement("li", {
    className: "is-active"
  }, /*#__PURE__*/React.createElement("span", {
    className: "step-dot"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-right"
  })), /*#__PURE__*/React.createElement("span", {
    className: "step-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "step-name"
  }, "Onboarded"), /*#__PURE__*/React.createElement("span", {
    className: "step-note"
  }, "Ready to contribute day one")))))), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta hero-proof"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-meta-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "0%"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Retainer")), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "90-day"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Replacement")), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "End-to-end"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Ownership"))))), /*#__PURE__*/React.createElement("section", {
    className: "pillars section-padding"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pillars-intro"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-title"
  }, "What we do"), /*#__PURE__*/React.createElement("h2", null, "Three ways we ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "build your team."))), /*#__PURE__*/React.createElement("div", {
    className: "pillar-grid"
  }, SERVICES.map(s => /*#__PURE__*/React.createElement("article", {
    className: "pillar-card",
    key: s.name
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar-icon",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: `fas ${s.icon}`
  })), /*#__PURE__*/React.createElement("h3", {
    className: "pillar-name"
  }, s.name), /*#__PURE__*/React.createElement("div", {
    className: "pillar-subtitle"
  }, s.subtitle), /*#__PURE__*/React.createElement("p", {
    className: "pillar-desc"
  }, s.desc), /*#__PURE__*/React.createElement("ul", {
    className: "pillar-features"
  }, s.features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f
  }, f)))))))), /*#__PURE__*/React.createElement("section", {
    className: "section-padding"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pillars-intro"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-title"
  }, "Why hire with Worktales"), /*#__PURE__*/React.createElement("h2", null, "A hiring partner, ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "not a job board."))), /*#__PURE__*/React.createElement("div", {
    className: "adv-grid"
  }, ADVANTAGES.map((a, i) => /*#__PURE__*/React.createElement("div", {
    className: "adv-item",
    key: a.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "adv-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "adv-index"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    className: "adv-ico",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: `fas ${a.icon}`
  }))), /*#__PURE__*/React.createElement("h3", null, a.title), /*#__PURE__*/React.createElement("p", null, a.desc)))), /*#__PURE__*/React.createElement("div", {
    className: "guarantee"
  }, /*#__PURE__*/React.createElement("div", {
    className: "guarantee-lead"
  }, /*#__PURE__*/React.createElement("span", {
    className: "guarantee-eyebrow"
  }, "The Worktales guarantee"), /*#__PURE__*/React.createElement("h3", null, "You only pay for a hire that sticks."), /*#__PURE__*/React.createElement("p", null, "No upfront retainer. Fees apply only on a successful placement \u2014 and every one is backed for a full quarter, no questions asked.*")), /*#__PURE__*/React.createElement("div", {
    className: "guarantee-aside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "guarantee-figures"
  }, /*#__PURE__*/React.createElement("div", {
    className: "g-fig"
  }, /*#__PURE__*/React.createElement("span", {
    className: "g-num"
  }, "0%"), /*#__PURE__*/React.createElement("span", {
    className: "g-rule"
  }), /*#__PURE__*/React.createElement("span", {
    className: "g-lbl"
  }, "Upfront retainer")), /*#__PURE__*/React.createElement("div", {
    className: "g-fig"
  }, /*#__PURE__*/React.createElement("span", {
    className: "g-num"
  }, "90", /*#__PURE__*/React.createElement("span", {
    className: "g-num-unit"
  }, "d")), /*#__PURE__*/React.createElement("span", {
    className: "g-rule"
  }), /*#__PURE__*/React.createElement("span", {
    className: "g-lbl"
  }, "Replacement window"))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn-primary guarantee-cta",
    onClick: toContact
  }, "Schedule a call ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-right"
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "pillars section-padding"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lebanon-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lebanon-intro"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/lebanon.png",
    alt: "",
    className: "lebanon-map",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "section-title"
  }, "The Lebanese talent advantage"), /*#__PURE__*/React.createElement("h2", null, "Deep, multilingual, ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "globally ready talent.")), /*#__PURE__*/React.createElement("p", null, "The teams we build draw on one of the region\u2019s deepest professional pools \u2014 rigorously educated, genuinely trilingual, and used to working across borders from day one.")), /*#__PURE__*/React.createElement("ul", {
    className: "lebanon-list"
  }, LEBANON.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.title
  }, /*#__PURE__*/React.createElement("span", {
    className: "lb-ico",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: `fas ${l.icon}`
  })), /*#__PURE__*/React.createElement("div", {
    className: "lb-body"
  }, /*#__PURE__*/React.createElement("h3", null, l.title), /*#__PURE__*/React.createElement("p", null, l.desc)))))))), /*#__PURE__*/React.createElement("section", {
    className: "cta-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-title"
  }, "Let\u2019s talk"), /*#__PURE__*/React.createElement("h2", null, "Ready to make your next ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "hire count?")), /*#__PURE__*/React.createElement("p", null, "Tell us what you\u2019re building and the kind of people you need. We\u2019ll listen first, then propose a hiring approach designed around how your organization actually works."), /*#__PURE__*/React.createElement("div", {
    className: "btns"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn-primary",
    onClick: toContact
  }, "Schedule a call ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-right"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn-ghost",
    onClick: e => e.preventDefault()
  }, "Request a brochure")), /*#__PURE__*/React.createElement("p", {
    className: "scheduler-fallback"
  }, "*Terms and conditions apply."))));
}
const SERVICES = [{
  icon: "fa-user-tie",
  name: "Executive Search",
  subtitle: "Sourcing to onboarding",
  desc: "We manage the entire hiring journey — from sourcing to onboarding — ensuring every hire is intentional and culturally aligned, identified through context rather than credentials alone.",
  features: ["AI-assisted sourcing", "Standardized fit assessments", "Structured onboarding"]
}, {
  icon: "fa-people-group",
  name: "Talent Hubs",
  subtitle: "Dedicated remote teams",
  desc: "Build or outsource dedicated remote teams in Lebanon to access high-quality talent, optimize costs, and scale sustainably — with delivery managed to performance.",
  features: ["Exclusive dedicated teams", "Fast workflow integration", "Performance-managed delivery"]
}, {
  icon: "fa-file-contract",
  name: "Talent Enablement",
  subtitle: "Employer of record",
  desc: "Hire in Lebanon without setting up a local entity. We legally employ your team while you focus on leading them — payroll, benefits, and compliance handled end to end.",
  features: ["Fully compliant employment", "Payroll & benefits managed", "No local entity required"]
}];
const ADVANTAGES = [{
  icon: "fa-briefcase",
  title: "Industry expertise",
  desc: "Experience across multiple industries lets us quickly understand sector-specific hiring needs."
}, {
  icon: "fa-filter",
  title: "Strategic talent pipelines",
  desc: "We build tailored talent pipelines with hiring strategies aligned to each company's specific needs."
}, {
  icon: "fa-wand-magic-sparkles",
  title: "Modern talent sourcing",
  desc: "AI-assisted sourcing and structured assessment surface the right candidates faster."
}, {
  icon: "fa-circle-nodes",
  title: "Connected talent ecosystem",
  desc: "A strong, diverse talent pool constantly developing and engaging in knowledge transfer."
}];
const LEBANON = [{
  icon: "fa-graduation-cap",
  title: "Strong education",
  desc: "A dense network of respected universities produces a deep, well-qualified professional pool."
}, {
  icon: "fa-language",
  title: "English & French fluency",
  desc: "Genuinely trilingual professionals who work seamlessly across English, French, and Arabic markets."
}, {
  icon: "fa-globe",
  title: "Global exposure",
  desc: "A globally connected workforce accustomed to collaborating across time zones and cultures."
}, {
  icon: "fa-scale-balanced",
  title: "Competitive cost",
  desc: "Senior-level capability at a cost structure that lets you scale teams sustainably."
}];
window.TalentPage = TalentPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TalentPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TrainingPage.jsx
try { (() => {
// Worktales website kit — Training & Development detail page (02 / Build).
function TrainingPage({
  onNavigate
}) {
  const back = e => {
    e.preventDefault();
    onNavigate("home");
    window.scrollTo({
      top: 0
    });
  };
  const toContact = e => {
    e.preventDefault();
    onNavigate("home");
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView();
    }, 60);
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-grid-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-hero-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-hero-copy"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "back",
    onClick: back
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-left"
  }), " All services"), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", null, "02 / Build")), /*#__PURE__*/React.createElement("h1", null, "Training & Development: capability that ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "keeps pace with the work.")), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Industries are evolving faster than traditional skills frameworks \u2014 roles are changing, technologies are advancing, and organizations must continuously strengthen the capabilities of their people. We design and deliver tailored training programs built around real performance gaps and aligned with your business strategy."), /*#__PURE__*/React.createElement("div", {
    className: "hero-ctas"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn-primary",
    onClick: e => e.preventDefault()
  }, "Request program brochures ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-right"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn-ghost",
    onClick: back
  }, "Explore all services"))), /*#__PURE__*/React.createElement("aside", {
    className: "hire-card format-card",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hire-card-glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hire-card-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hire-card-eyebrow"
  }, "Program formats"), /*#__PURE__*/React.createElement("span", {
    className: "hire-card-title"
  }, "Delivered the way your teams learn")), /*#__PURE__*/React.createElement("ul", {
    className: "format-list"
  }, FORMATS.map(f => /*#__PURE__*/React.createElement("li", {
    key: f.name
  }, /*#__PURE__*/React.createElement("span", {
    className: "fmt-ico",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: `fas ${f.icon}`
  })), /*#__PURE__*/React.createElement("span", {
    className: "fmt-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fmt-name"
  }, f.name), /*#__PURE__*/React.createElement("span", {
    className: "fmt-note"
  }, f.note))))))), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta hero-proof"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-meta-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "Accredited"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Local & international")), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "Global"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Training partners")), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "Tailored"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "To real performance gaps"))))), /*#__PURE__*/React.createElement("section", {
    className: "pillars section-padding"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pillars-intro"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-title"
  }, "What we develop"), /*#__PURE__*/React.createElement("h2", null, "Five focus areas, ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "built around how work is changing."))), /*#__PURE__*/React.createElement("div", {
    className: "focus-grid"
  }, FOCUS.map((f, i) => /*#__PURE__*/React.createElement("article", {
    className: "focus-card",
    key: f.title
  }, /*#__PURE__*/React.createElement("span", {
    className: "focus-disc",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: `fas ${f.icon}`
  })), /*#__PURE__*/React.createElement("span", {
    className: "focus-num"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", null, f.title)))))), /*#__PURE__*/React.createElement("section", {
    className: "section-padding"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pillars-intro"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-title"
  }, "Why build with Worktales"), /*#__PURE__*/React.createElement("h2", null, "Development that\u2019s ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "proven, accredited, and ready."))), /*#__PURE__*/React.createElement("div", {
    className: "whyb-grid"
  }, /*#__PURE__*/React.createElement("article", {
    className: "whyb-card col-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "whyb-ico",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-award"
  })), /*#__PURE__*/React.createElement("h3", null, "Proven Experience"), /*#__PURE__*/React.createElement("p", null, "We bring proven experience working with organizations to build stronger teams, leaders, and cultures.")), /*#__PURE__*/React.createElement("article", {
    className: "whyb-card col-8 is-accent"
  }, /*#__PURE__*/React.createElement("span", {
    className: "whyb-ico",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-earth-americas"
  })), /*#__PURE__*/React.createElement("h3", null, "Global Partnerships"), /*#__PURE__*/React.createElement("p", null, "Worktales partners with internationally renowned training providers to offer a diverse and specialized library of accredited training programs.")), /*#__PURE__*/React.createElement("article", {
    className: "whyb-card col-4 is-compact"
  }, /*#__PURE__*/React.createElement("span", {
    className: "whyb-ico",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-truck-fast"
  })), /*#__PURE__*/React.createElement("h3", null, "Ready to mobilize")), /*#__PURE__*/React.createElement("article", {
    className: "whyb-card col-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "whyb-ico",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-clipboard-check"
  })), /*#__PURE__*/React.createElement("h3", null, "Accreditation"), /*#__PURE__*/React.createElement("p", null, "Selected programs are accredited by local and international bodies, reflecting recognized standards in professional development.")), /*#__PURE__*/React.createElement("article", {
    className: "whyb-card col-4 is-accent"
  }, /*#__PURE__*/React.createElement("span", {
    className: "whyb-ico",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-lightbulb"
  })), /*#__PURE__*/React.createElement("h3", null, "Program Formats"), /*#__PURE__*/React.createElement("p", null, "Programs are tailored to organizational needs and delivered as workshops, professional certificates, or structured diploma programs."))))), /*#__PURE__*/React.createElement("section", {
    className: "pillars section-padding"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lebanon-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lebanon-intro"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-title"
  }, "How development works at Worktales"), /*#__PURE__*/React.createElement("h2", null, "Organizations stay competitive when their ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "people evolve with the work.")), /*#__PURE__*/React.createElement("p", null, "At Worktales, development focuses on reskilling, leadership growth, and practical capability building \u2014 so individuals and teams remain effective as the nature of work evolves.")), /*#__PURE__*/React.createElement("ul", {
    className: "lebanon-list"
  }, APPROACH.map(a => /*#__PURE__*/React.createElement("li", {
    key: a.title
  }, /*#__PURE__*/React.createElement("span", {
    className: "lb-ico",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: `fas ${a.icon}`
  })), /*#__PURE__*/React.createElement("div", {
    className: "lb-body"
  }, /*#__PURE__*/React.createElement("h3", null, a.title), /*#__PURE__*/React.createElement("p", null, a.desc)))))))), /*#__PURE__*/React.createElement("section", {
    className: "cta-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-title"
  }, "Let\u2019s talk"), /*#__PURE__*/React.createElement("h2", null, "Ready to build the ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "capability you need next?")), /*#__PURE__*/React.createElement("p", null, "Tell us where the performance gaps are. We\u2019ll design a program around them \u2014 aligned to your strategy, delivered in the format that fits, and accredited where it counts."), /*#__PURE__*/React.createElement("div", {
    className: "btns"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn-primary",
    onClick: toContact
  }, "Schedule a call ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-right"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn-ghost",
    onClick: e => e.preventDefault()
  }, "Request program brochures")))));
}
const FORMATS = [{
  icon: "fa-chalkboard-user",
  name: "Workshops",
  note: "Focused, hands-on sessions"
}, {
  icon: "fa-certificate",
  name: "Professional certificates",
  note: "Accredited, role-specific"
}, {
  icon: "fa-graduation-cap",
  name: "Diploma programs",
  note: "Structured, longer-form"
}];
const FOCUS = [{
  icon: "fa-chart-line",
  title: "Sales Performance & Commercial Effectiveness"
}, {
  icon: "fa-microchip",
  title: "AI, Technology & Future Skills"
}, {
  icon: "fa-diagram-project",
  title: "Organizational Performance & Execution"
}, {
  icon: "fa-bullhorn",
  title: "Communication, Public Speaking & Influence"
}, {
  icon: "fa-people-arrows",
  title: "Human Skills in an AI-Driven Workplace"
}];
const APPROACH = [{
  icon: "fa-magnifying-glass-chart",
  title: "Start with the gap",
  desc: "We diagnose the real performance gaps slowing your teams down before designing anything."
}, {
  icon: "fa-compass-drafting",
  title: "Design around strategy",
  desc: "Programs are tailored to your context and aligned with where the business is heading."
}, {
  icon: "fa-arrows-rotate",
  title: "Reskill for what's next",
  desc: "Reskilling and leadership growth keep people effective as roles and technology shift."
}, {
  icon: "fa-chart-simple",
  title: "Measure the impact",
  desc: "Capability building is tied to outcomes, so development translates into execution."
}];
window.TrainingPage = TrainingPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TrainingPage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AdvantageItem = __ds_scope.AdvantageItem;

__ds_ns.PillarCard = __ds_scope.PillarCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.StatRow = __ds_scope.StatRow;

__ds_ns.WebinarCard = __ds_scope.WebinarCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.IconTile = __ds_scope.IconTile;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
