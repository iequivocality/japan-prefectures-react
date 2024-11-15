import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Tottori = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag tottori  ${className ?? ""}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M0 0H1260V840H0z" fill="#2e328c" />
        <path
          d="M85.22444 6.122202A35 35 0 0 1 140 35v82.030303A210 210 0 0 1 210 105h315l-131.25 87.5h-183.75A115.7 115.7 0 0 0 94.5 315 115.5 115.5 0 1 0 258.117045 210h133.74829A210 210 0 1 1 6.6830275 262.443281L60.952624 52.5H17.5z"
          fill="#fff"
          transform="translate(341.25 131.25) scale(1.1)"
        />
      </svg>
    );
  },
);

Tottori.displayName = "Tottori";

export default Tottori;
