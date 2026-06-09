import * as React from "react";

/**
 * Small uppercase pill for statuses and meta labels.
 */
export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "outline" */
  variant?: "outline" | "soft" | "solid";
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
