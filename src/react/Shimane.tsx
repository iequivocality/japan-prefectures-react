import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Shimane = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag shimane  ${className ?? ""}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="-75 -50 150 100"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M-75-50h150v100H-75z" fill="#950017" />
        <g id="b">
          <path
            id="a"
            d="M0 0L10-8.944272A12 12 0 0 1 17.272078-11.977902v8.044693a4 4 0 1 0 1.455844 0v-8.044693A12 12 0 1 1 6 0z"
            fill="#ffd700"
          />
          <use xlinkHref="#a" transform="rotate(180)" />
        </g>
        <use xlinkHref="#b" transform="rotate(90)" />
      </svg>
    );
  },
);

Shimane.displayName = "Shimane";

export default Shimane;
