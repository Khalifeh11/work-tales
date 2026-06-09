import * as React from "react";

/**
 * Date-chip event card for the webinars grid, with a disabled coming-soon state.
 */
export interface WebinarCardProps {
  /** Month abbreviation for the date chip. @default "JUN" */
  month?: string;
  /** Day number (or em-dash placeholder). @default "—" */
  day?: string;
  /** Status tag. @default "Coming soon" */
  tag?: string;
  title: string;
  /** Secondary meta line, e.g. "Date & time TBD · Online". */
  meta?: string;
  registerLabel?: string;
  /** Render the coming-soon disabled state. @default false */
  disabled?: boolean;
  onRegister?: () => void;
  style?: React.CSSProperties;
}

export function WebinarCard(props: WebinarCardProps): JSX.Element;
