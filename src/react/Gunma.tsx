import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Gunma = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag gunma  ${className ?? ""}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="-150 -100 300 200"
        fill="#fff"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M-150-100h300v200h-300z" fill="#4c0f7b" />
        <g id="a">
          <circle cy="-36" r="25.5" />
          <circle cy="-69" r="25.5" fill="#4c0f7b" />
        </g>
        <use xlinkHref="#a" transform="rotate(120)" />
        <use xlinkHref="#a" transform="rotate(240)" />
        <clipPath id="c">
          <circle r="80" />
        </clipPath>
        <g transform="scale(.1125)">
          <path d="M-50.108219-60.901699a9.442719 9.442719 0 0 1 3.085399-3.81966 80 80 0 0 1 94.04564 0 9.442719 9.442719 0 0 1 0 15.27864 80 80 0 0 1 -94.04564 0 9.442719 9.442719 0 0 1-3.085399-3.81966h11.030719a72.36068 72.36068 0 0 0 81.61004-2.36068 1.803399 1.803399 0 0 0 0-2.917961 72.36068 72.36068 0 0 0-81.61004-2.36068zM-22.917961-60.901699h45.835921v7.63932H-22.917961z" />
          <g clip-path="url(#c)">
            <circle
              id="b"
              cx="-47.02282"
              cy="-64.72136"
              r="45.623059"
              fill="none"
              stroke="#fff"
              stroke-width="7.63932"
            />
            <use xlinkHref="#b" transform="scale(-1 1)" />
            <path d="M30.422187-18.14882a30.557281 30.557281 0 1 1-60.844375 0zM-22.416249-10.5095a22.917961 22.917961 0 0 0 44.832498 0zM-37.8977-10.5095a38.196601 38.196601 0 0 0 75.795399 0h7.689437a45.835921 45.835921 0 0 1-91.174272 0z" />
            <path
              d="M-81 19.09830h57m48 0h57M-75 38.196601H75M-65 57.294902H65M0 25V85"
              stroke="#fff"
              stroke-width="7.63932"
            />
          </g>
        </g>
      </svg>
    );
  },
);

Gunma.displayName = "Gunma";

export default Gunma;
