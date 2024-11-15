import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Oita = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag oita  ${className ?? ""}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="-450 -315 900 630"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M-450-315h900v630h-900z" fill="#fff" />
        <circle r="122.5" stroke="#be0428" strokeWidth="35" fill="none" />
        <g id="a">
          <path d="M-3.5-160h7v80h-7z" fill="#fff" />
          <path
            d="M0 28 115.268428 175.53686 0 140-115.268428 175.53686z"
            fill="#be0428"
          />
        </g>
        <use xlinkHref="#a" transform="rotate(120)" />
        <use xlinkHref="#a" transform="rotate(240)" />
      </svg>
    );
  },
);

Oita.displayName = "Oita";

export default Oita;
