import * as React from "react";

/**
 * Compact icon + heading + paragraph card for advantage / feature grids.
 */
export interface AdvantageItemProps {
  /** Font Awesome glyph. @default "fa-industry" */
  icon?: string;
  title: string;
  description: string;
  style?: React.CSSProperties;
}

export function AdvantageItem(props: AdvantageItemProps): JSX.Element;
