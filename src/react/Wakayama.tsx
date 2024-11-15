import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Wakayama = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag wakayama ${className}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-45 -30 90 60"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M-45-30h90v60h-90z" fill="#fff" />
        <path
          d="M-19.364917 5A20 20 0 1 1 19.364917 5L0 20-8.909944 13.098387 8 0A8 8 0 0 0-8 0L-0.672511 5.675848-9.582456 12.577462z"
          fill="#29437f"
        />
      </svg>
    );
  },
);

Wakayama.displayName = "Wakayama";

export default Wakayama;
