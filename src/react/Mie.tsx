import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Mie = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag mie  ${className ?? ""}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ?? 282.71844}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M0 0h728v515H0z" fill="#090" />
        <path
          d="m567.107408 107.851605 63.821239-14.734294L402.758542 413h-73.5a129.876824 129.876824 0 0 0 42.801385-31.701912zm-22.410512 5.173874L425.472651 280.171707 488 343.8l-46.340096 64.966418-60.722842-61.792012-9.505095-119.980845 8.254974-11.573046a131.5 131.5 0 0 0-71.76197-47.73193z"
          fill="#fff"
        />
        <circle
          cx="275"
          cy="295"
          r="78.5"
          fill="none"
          strokeWidth="79"
          stroke="#fff"
        />
      </svg>
    );
  },
);

Mie.displayName = "Mie";

export default Mie;
