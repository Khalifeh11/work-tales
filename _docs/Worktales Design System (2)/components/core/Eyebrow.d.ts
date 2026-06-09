import * as React from "react";

/**
 * The uppercase orange section marker. `plain` for the label above a heading;
 * `pill` for the hairline capsule (with optional live pulse dot) used in heroes.
 */
export interface EyebrowProps {
  children?: React.ReactNode;
  /** @default "plain" */
  variant?: "plain" | "pill";
  /** Show the animated orange pulse dot (pill variant only). @default false */
  pulse?: boolean;
  style?: React.CSSProperties;
}

export function Eyebrow(props: EyebrowProps): JSX.Element;
