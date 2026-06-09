import * as React from "react";

/**
 * A single proof figure — big number, orange rule, uppercase label.
 */
export interface StatBlockProps {
  /** The figure, e.g. "90%" or "<2 wks". */
  value: React.ReactNode;
  /** Uppercase caption. */
  label: string;
  /** Show the right divider. @default true */
  bordered?: boolean;
  style?: React.CSSProperties;
}

export function StatBlock(props: StatBlockProps): JSX.Element;

export interface StatRowProps {
  /** Stats to render in a bordered, evenly-divided row. */
  stats: { value: React.ReactNode; label: string }[];
  style?: React.CSSProperties;
}

export function StatRow(props: StatRowProps): JSX.Element;
