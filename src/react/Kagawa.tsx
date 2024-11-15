import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Kagawa = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag kagawa  ${className ?? ""}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <clipPath id="a">
          <path d="M0 0h400v360H0z" />
        </clipPath>
        <path d="M0 0H900V600H0z" fill="#005933" />
        <g
          clipPath="url(#a)"
          stroke="#fff"
          fill="none"
          transform="translate(250 108)"
          strokeWidth="80"
        >
          <circle cx="-100" cy="400" r="340" />
          <path d="M360 400A460 460 0 0 0 176 32m48 0A460 460 0 0 0 40 400" />
        </g>
      </svg>
    );
  },
);

Kagawa.displayName = "Kagawa";

export default Kagawa;
