import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Osaka = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag osaka  ${className ?? ""}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="-15 -10 30 20"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M-15-10h30v20h-30z" fill="#33419a" />
        <g id="b">
          <circle
            id="a"
            cx="6"
            r="2"
            stroke="#fff"
            stroke-width="2"
            fill="none"
          />
          <use xlinkHref="#a" transform="rotate(120 2 0)" />
        </g>
        <use xlinkHref="#b" transform="rotate(180)" />
        <path
          id="c"
          d="M6 0a1 1 0 0 0 0 1.7320508075688773h-3A1 1 0 0 0 3 0z"
          fill="#fff"
          transform="rotate(60 3 0)"
        />
        <use xlinkHref="#c" transform="rotate(120 2 0)" />
        <use xlinkHref="#c" transform="scale(-1 1)" />
      </svg>
    );
  },
);

Osaka.displayName = "Osaka";

export default Osaka;
