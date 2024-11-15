import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Fukushima = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag fukushima ${className}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1500 1000"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M0 0H1500V1000H0z" fill="#d84b24" />
        <g fill="#fff" transform="translate(600 440)">
          <path d="M47.270823-386.370331a60 60 0 0 0 30.374884 96.592583 300 300 0 1 1-174.455702 5.827354 225 225 0 0 0 75.911691 85.045238 200 200 0 1 0 72.662106 5.719991 200 200 0 0 1-148.236191-193.185165z" />
          <path
            id="a"
            d="M293.277436 140.047654a100 100 0 0 0 108.683731 62.257116 450 450 0 0 1-64.329808 95.193239 200 200 0 0 1-107.010267-68.502568 325 325 0 0 0 62.656344-88.947787z"
          />
          <use xlinkHref="#a" transform="scale(-1 1)" />
        </g>
      </svg>
    );
  },
);

Fukushima.displayName = "Fukushima";

export default Fukushima;
