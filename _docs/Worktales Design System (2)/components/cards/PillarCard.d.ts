import * as React from "react";

/**
 * The marquee service card — icon tile, number, name, subtitle, description,
 * feature list, and a bottom link. Lifts and glows on hover.
 *
 * @startingPoint section="Cards" subtitle="Service pillar card" viewport="700x520"
 */
export interface PillarCardProps {
  /** Font Awesome glyph for the icon tile. @default "fa-user-tie" */
  icon?: string;
  /** Eyebrow number, e.g. "01 / Hire". */
  number?: string;
  /** Service name. */
  name: string;
  /** Sage uppercase subtitle. */
  subtitle?: string;
  /** Paragraph description. */
  description?: string;
  /** Dashed-rule feature bullets. */
  features?: string[];
  /** Bottom link label (shows a sliding arrow). */
  linkLabel?: string;
  href?: string;
  style?: React.CSSProperties;
}

export function PillarCard(props: PillarCardProps): JSX.Element;
