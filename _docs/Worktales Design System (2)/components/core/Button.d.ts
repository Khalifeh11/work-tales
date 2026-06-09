import * as React from "react";

/**
 * Worktales pill CTA. Primary = orange fill, ghost = hairline outline, link = uppercase arrow.
 *
 * @startingPoint section="Core" subtitle="Pill CTA — primary, ghost, link" viewport="700x220"
 */
export interface ButtonProps {
  /** Visual style. @default "primary" */
  variant?: "primary" | "ghost" | "link";
  /** Size. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Button label / contents. */
  children?: React.ReactNode;
  /** Font Awesome glyph class for the trailing icon. @default "fa-arrow-right" */
  icon?: string;
  /** Force the trailing icon on/off. Defaults on for primary/link, off for ghost. */
  showIcon?: boolean;
  /** If set, renders an anchor instead of a button. */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
