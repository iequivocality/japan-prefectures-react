import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Nara = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag nara ${className}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <desc>Flag of Nara Prefecture</desc>
        <rect width="1200" height="800" fill="#ffffff" />
        <circle cx="570" cy="400" r="220" fill="#5b1c1f" />
        <circle cx="430" cy="400" r="76" fill="#FFFFFF" />
        <line
          x1="430"
          y1="400"
          x2="850"
          y2="400"
          stroke="#5b1c1f"
          stroke-width="80"
        />
        <line
          x1="340"
          y1="400"
          x2="365"
          y2="400"
          stroke="#ffffff"
          stroke-width="10"
        />
      </svg>
    );
  },
);

Nara.displayName = "Nara";

export default Nara;
