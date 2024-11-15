import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Tokushima = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag tokushima ${className}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#234794"
        ref={ref}
        width={width ?? 285.71428}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M0 0H900V630H0z" />
        <g transform="translate(450 315) scale(4.2)">
          <g fill="#fcd400">
            <circle r="45" />
            <path d="M-50-45h30l70 90h-30zM0 45v-90h55.815630565z" />
          </g>
          <circle r="20" />
          <path d="M0-20h50v4H0zM-1 18l21 27h-5.067446334l-21-27z" />
        </g>
      </svg>
    );
  },
);

Tokushima.displayName = "Tokushima";

export default Tokushima;
