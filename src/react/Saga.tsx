import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Saga = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag saga  ${className ?? ""}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="-315 -210 630 420"
        fill="#df4133"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M-315-210h630v420h-630z" fill="#006462" />
        <g id="b">
          <g id="a">
            <path
              d="M41.177858-71.322142a47.548095 47.548095 0 0 1 64.951905-17.403811L129.903811-75v27.451905A47.548095 47.548095 0 0 1 82.355716 0L-10 5z"
              fill="#fff"
            />
            <path d="M50.891116-72.680045a88.725953 88.725953 0 0 1 11.847607 9.941323l-30.26277 30.26277a12.306352 12.306352 0 0 0 11.887024 20.588929l41.339713-11.076943a88.725953 88.725953 0 0 1 2.685634 15.23099l-45.459098 3.977156a20.094693 20.094693 0 0 1-18.211877-31.544069z" />
          </g>
          <use xlinkHref="#a" transform="scale(-1 1)" />
          <use xlinkHref="#a" transform="rotate(-60)" />
        </g>
        <use xlinkHref="#b" transform="scale(1-1)" />
        <circle r="12.306352" />
      </svg>
    );
  },
);

Saga.displayName = "Saga";

export default Saga;
