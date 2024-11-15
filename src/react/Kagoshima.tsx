import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Kagoshima = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag kagoshima  ${className ?? ""}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M0 0H900V600H0z" fill="#fff" />
        <g transform="translate(450 300) scale(1.8)">
          <path d="M-30 95.39392A100 100 0 1 1 88.661294 46.251216 10 10 0 0 0 77.700021 62.950034 100 100 0 0 1 30 95.39392L50.676265 46.375597a55 55 0 1 0-101.352531 0z" />
          <circle cy="25" r="40" fill="#bd0227" />
        </g>
      </svg>
    );
  },
);

Kagoshima.displayName = "Kumamoto";

export default Kagoshima;
