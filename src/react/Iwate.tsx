import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Iwate = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag iwate  ${className ?? ""}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="-82.5 -55 165 110"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M-82.5-55h165v110h-165z" fill="#145e70" />
        <path
          id="b"
          d="M-15-5h4l3 3 h4l-2-2 6-6 6 6-2 2h4l3-3h4l-5 5h-20zM0-2l2-2-2-2-2 2z"
          transform="scale(1.7320508075689 3)"
          fill="#fff"
        />
        <use xlinkHref="#b" transform="scale(1-1)" />
        <path
          d="M-15-.2H15v.4h-30z"
          fill="#145e70"
          transform="scale(1.7320508075689)"
        />
      </svg>
    );
  },
);

Iwate.displayName = "Iwate";

export default Iwate;
