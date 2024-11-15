import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Fukui = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag fukui  ${className ?? ""}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-52.5 -35 105 70"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M-52.5-35h105v70h-105z" fill="#00006b" />
        <path
          d="M3-.576862A18.6 18.6 0 0 0 0 6.672839 18.6 18.6 0 0 0-3-.576862V-16h6zM19.167358-8.579766a18.6 18.6 0 0 0-6.340585.80327 15 15 0 0 0-25.653547 0 18.6 18.6 0 0 0-6.340585-.80327 21 21 0 0 1 38.3347165 0zM.3 10A18 18 0 0 1 19.431107-7.964426 21 21 0 0 1 .3 20.997857V14.997A15 15 0 0 0 14.923285-1.515112 12 12 0 0 0 6.627467 12.784236 14.4 14.4 0 0 1 .3 14.396875zM-.3 10A18 18 0 0 0-19.431107-7.964426 21 21 0 0 0-.3 20.997857V14.997A15 15 0 0 1-14.923285-1.515112 12 12 0 0 1-6.627467 12.784236 14.4 14.4 0 0 0-.3 14.396875z"
          fill="#fff"
        />
      </svg>
    );
  },
);

Fukui.displayName = "Fukui";

export default Fukui;
