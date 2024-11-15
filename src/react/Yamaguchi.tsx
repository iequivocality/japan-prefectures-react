import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Yamaguchi = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag yamaguchi  ${className ?? ""}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-300 -200 600 400"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M-300-200h600v400h-600z" fill="#693c34" />
        <path
          d="M-75.640275 79.865817a110 110 0 0 0 151.28055 0L175.066539-14.3h-66a110 110 0 0 0-218.133079 0h-66zM0-11L-28.496421 59.531118a66 66 0 1 1 56.992843 0z"
          fill="#fff"
        />
      </svg>
    );
  },
);

Yamaguchi.displayName = "Yamaguchi";

export default Yamaguchi;
