import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Miyazaki = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag miyazaki  ${className ?? ""}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        width={width ?? 280}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M0 0h1400v1000H0z" fill="#159939" />
        <path
          d="M312.109375 215H703.8L574.6 405h380L825.4 595h402.021875L1098.90625 770H695.4l129.2-190h-380l129.2-190H183.59375z"
          fill="#ffff01"
        />
      </svg>
    );
  },
);

Miyazaki.displayName = "Miyazaki";

export default Miyazaki;
