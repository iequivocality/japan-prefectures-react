import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Ishikawa = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag ishikawa ${className}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.0"
        ref={ref}
        width={width ?? 283.87096}
        height={height ?? 200}
        className={newClassname}
      >
        <defs id="defs2214" />
        <rect
          width="440"
          height="310"
          x="0"
          y="0"
          id="rect5137"
          style={{ fill: "#0088bb" }}
        />
        <path
          d="M 58,249 166.91728,71.032361 C 174.00687,58.738453 187.04102,49 202.94882,49 l 135.01225,0 -37.09128,59.16712 c -7.49034,12.98886 -19.75734,20.72706 -40.65807,20.72706 l -29.28548,0 -15.24255,23.80952 38.98096,0 c 13.37803,0 18.48111,6.42588 12.50507,16.78882 L 218.65823,249 l -34.87975,0 42.04114,-68.78307 -49.36458,0 c -5.98043,0 -8.11442,-4.15946 -4.45094,-10.51221 l 38.36297,-60.6888 c 2.64645,-4.58917 8.48888,-8.16407 15.47237,-8.16407 l 41.11832,0 c 3.69231,0 8.0266,-3.178951 10.17362,-6.90204 l 9.09241,-15.32018 -72.67748,0 c -9.56017,0 -20.00723,5.829717 -23.88933,12.561598 L 92.87975,249 58,249 z"
          id="path2220"
          style={{ fill: "#ffffff" }}
        />
        <use
          transform="translate(58.13291,0)"
          id="use3589"
          x="0"
          y="0"
          width="440"
          height="310"
          xlinkHref="#path5133"
        />
        <path
          d="M 298.98734,153.7619 241.91139,249 l 34.87975,0 57.07595,-95.2381 -34.87975,0 z"
          id="path5133"
          style={{ fill: "#ffffff" }}
        />
      </svg>
    );
  },
);

Ishikawa.displayName = "Ishikawa";

export default Ishikawa;
