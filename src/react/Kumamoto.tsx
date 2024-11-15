import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Kumamoto = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag kumamoto ${className}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-112.5 -75 225 150"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M-112.5-75h225v150h-225z" fill="#931d23" />
        <path
          d="M-72-50H0A50 50 0 1 1 -45.825757 20 30 30 0 0 0 9.165151-4 30 30 0 0 0-45.825757 20H-90z"
          fill="#fff"
        />
      </svg>
    );
  },
);

Kumamoto.displayName = "Kumamoto";

export default Kumamoto;
