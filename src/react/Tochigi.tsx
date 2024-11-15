import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Tochigi = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag tochigi  ${className ?? ""}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff"
        ref={ref}
        width={width ?? 285.71428}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M0 0H900V630H0z" fill="#76b138" />
        <g transform="translate(303 189) scale(2.1)">
          <path d="M20 10h50v40H20zM90 10h40v25A27.518176 27.518176 0 0 1 104.86248 61.416577L73.767857 64.095994A26 26 0 0 0 50 90v20H10V85A27.518176 27.518176 0 0 1 35.13752 58.583423L66.2323143 55.904006A26 26 0 0 0 90 30zM130 70 101.545769 73.918766A25.317978 25.317978 0 0 0 80 95v15H56V90A20 20 0 0 1 76 70z" />
          <path
            d="M15 33.359688l30-24 30 24m0 10 -30-24-30 24m0 10 30-24 30 24M45 9v42"
            stroke="#76b138"
            fill="none"
          />
          <circle cx="105" cy="95" r="15.811388" />
        </g>
      </svg>
    );
  },
);

Tochigi.displayName = "Tochigi";

export default Tochigi;
