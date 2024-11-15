import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Toyama = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag toyama  ${className ?? ""}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 211.67 141.02"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <g strokeLinecap="round" strokeLinejoin="round">
          <path fill="#fff" d="M0 0h211.67v141.02H0z" />
          <path
            fill="#1a9431"
            d="M94.03 23.57 37.1 117.46h137.47l-55.76-93.9-12.44 20.54zm-6.97 17.7 10.93 17.2-34.3 56.06h-20.9zm38 0 44.06 73.26h-21L116.76 62.2l-8.4 14.33L120.2 96.5h-28z"
          />
        </g>
      </svg>
    );
  },
);

Toyama.displayName = "Toyama";

export default Toyama;
