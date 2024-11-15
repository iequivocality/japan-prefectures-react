import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Shizuoka = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag shizuoka  ${className ?? ""}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-13.5 -4.5 27 18"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M-13.5-4.5h27v18h-27z" fill="#004a8f" />
        <path
          d="M.495373.5a.75.75 0 0 1 .73610675.60630973A7.287407 7.287407 0 0 0 3.92638 5.475281 5.024938 5.024938 0 0 0 6.5 6.5a8.5 8.5 0 0 0-4.782636 1.836576.75.75 0 0 1-.934728-1.173152 10 10 0 0 1 .686529-.500835.75.75 0 0 0 .1380296-1.129797 2.176183 2.176183 0 0 0-3.3245582 2.803784A8.5 8.5 0 0 0-6.5 6.5a5.0249378 5.0249378 0 0 0 2.57362-1.024719 7.287407 7.287407 0 0 0 2.6949-4.368971A.75.75 0 0 1 -.495373.5zm-1.726853.60631a7.287407 7.287407 0 0 0 .065311-.3908A.25.25 0 0 1 -.9185596.5h.4231866m.990746 0H.91856a.25.25 0 0 1 .247609.21551 7.287407 7.287407 0 0 0 .065311.3908m.237685 5.556279a10 10 0 0 1 .212647-.137832.5.5 0 0 0 .155536-.690922 2.176183 2.176183 0 0 0-.2301534-.301043"
          stroke="#fff"
          fill="#f98f00"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Shizuoka.displayName = "Shizuoka";

export default Shizuoka;
