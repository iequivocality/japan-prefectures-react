import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Kanagawa = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag kanagawa ${className}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M0 0H900V600H0z" fill="#fff" />
        <path
          d="M0 23a5 5 0 0 0 5-5V6m.32 7.76A6 6 0 1 1 13 8v13a1 1 0 0 1-4 0V8a6 6 0 1 1 7.68 5.76M17 6v12a5 5 0 0 0 5 5M7 0v2m8-2v2"
          stroke="#f00"
          stroke-width="2"
          fill="none"
          transform="scale(18.75) translate(13 4)"
        />
      </svg>
    );
  },
);

Kanagawa.displayName = "Kanagawa";

export default Kanagawa;
