import * as React from "react";

/**
 * The fixed glass header — logo, nav links, primary CTA. Gains a stronger
 * background, shadow, and hairline when `scrolled`.
 *
 * @startingPoint section="Navigation" subtitle="Glass site header" viewport="1280x90"
 */
export interface NavBarProps {
  /** Logo image src (use the light wordmark on the dark header). */
  logoSrc?: string;
  logoAlt?: string;
  links?: { label: string; href?: string; hasDropdown?: boolean }[];
  ctaLabel?: string;
  onCta?: () => void;
  /** Apply the scrolled (stronger) treatment. @default false */
  scrolled?: boolean;
  style?: React.CSSProperties;
}

export function NavBar(props: NavBarProps): JSX.Element;
