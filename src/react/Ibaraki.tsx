import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Ibaraki = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag ibaraki ${className}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <rect id="rect833" width="3e3" height="2e3" fill="#3b4aa8" />
        <path
          id="path2492"
          d="m1730.9995 661.4054c0 136.4358-106.4825 242.3186-244.011 242.3186-116.4305 0-193.986-99.5343-193.986-191.1343 0-93.58856 63.9985-166.26427 157.664-171.59284 88.56-5.02857 138.337 55.10571 138.337 116.82714 0 65.7057-48.896 98.8914-99.6625 98.8914-58.687 0-97.3475-54.0942-83.3325-116.8114 5.9885 35.8486 32.1815 58.5029 59.984 61.7214 28.6735 3.3243 55.331-15.2671 55.331-47.1257 0-31.85284-25.318-51.7657-65.3375-51.7657-48.652 0-87.976 38.49857-87.976 92.9171 0 74.0143 53.7485 124.4572 120.9994 124.4572 88.0886 0 161.99-64.2429 161.99-164.27 0-106.79145-92.643-179.04429-200.8254-179.04429-108.168 0-238.2725 91.42428-238.2725 240.75569 0 149.0372 123.8395 271.8683 273.5375 271.8683 181.612 0 331.685-132.974 331.685-313.7854 0-116.10432-46.5865-244.80575-165.1265-358.2886 328.0019 155.30571 448.0025 428.5174 448.0025 672.656 0 329.9043-268.6315 597.344-600 597.344-331.3625 0-600-267.44-600-597.3443 0-300.5171 227.419-548.38713 502.009-589.10998 205.3364-30.44001 328.9905 122.20285 328.9905 260.51568z"
          fill="#ffffff"
        />
      </svg>
    );
  },
);

Ibaraki.displayName = "Ibaraki";

export default Ibaraki;
