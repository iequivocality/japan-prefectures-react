import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Yamagata = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag yamagata  ${className ?? ""}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <rect width="600" height="400" fill="#006bbd" />
        <path
          d="M102,263.8 170.86801,130.6 235.62601,254.8 300,130.6 364.37401,254.8 429.13201,130.6l68.86795,133.2h-72l-24.036,-46.35 -23.964,46.35h-81l-24.036,-46.35 -23.964,46.35h-81L143.964,217.45 120,263.8h-18z"
          fill="#fff"
        />
      </svg>
    );
  },
);

Yamagata.displayName = "Yamagata";

export default Yamagata;
