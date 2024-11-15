import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Nagano = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag nagano ${className}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M0 0H900V600H0z" fill="#f66637" />
        <circle cx="300" cy="300" r="250" fill="#fff" />
        <path
          d="M10 300h600M150 25a275 275 0 0 1 0 550"
          fill="none"
          stroke="#f66637"
          stroke-width="50"
        />
      </svg>
    );
  },
);

Nagano.displayName = "Nagano";

export default Nagano;
