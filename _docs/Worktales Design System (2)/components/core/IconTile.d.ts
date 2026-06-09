import * as React from "react";

/**
 * A Font Awesome glyph in a rounded orange-wash tile — the brand's icon container.
 */
export interface IconTileProps {
  /** Font Awesome glyph class, e.g. "fa-user-tie". */
  icon: string;
  /** @default "md" (36 / 48 / 56 px) */
  size?: "sm" | "md" | "lg";
  /** Fill the tile solid orange with a white glyph. @default false */
  solid?: boolean;
  style?: React.CSSProperties;
}

export function IconTile(props: IconTileProps): JSX.Element;
