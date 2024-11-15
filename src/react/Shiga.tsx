import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Shiga = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag shiga  ${className ?? ""}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-495 -330 990 660"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M-495-330h990v660h-990" fill="#3e88c0" />
        <path
          d="M324-169l-29.157272 77.181014-117.898462 39.299487a188 188 0 0 0-32.38001-56.668586zM291.198069-82.171359L262.040797 4.990345l-74.244902 14.767611a188 188 0 0 0-8.309483-64.692096zM-324-169l273.151398 91.050466A54 54 0 0 0-80.498447-61a108 108 0 0 0-20.516488 33.790278l-193.827793-64.609264zM-291.198069-82.171359l187.63185 62.54395a108 108 0 0 0 2.326465 68.237412L-262.040797-4.990345zM-97.018035 58.449983A108 108 0 0 0-4 118.925901v72.029649A180 180 0 0 1-178.866677 31.1671zM-130.530338-112.942853A180 180 0 0 1-53.065997-161 90 90 0 0 0 0-205a90 90 0 0 0 53.065997 44A180 180 0 0 1 4 190.95555v-72.029649A108 108 0 0 0 80.498447-61 54 54 0 0 0 0-61a54 54 0 0 0-22.894479-16.064233z"
          fill="#fff"
        />
      </svg>
    );
  },
);

Shiga.displayName = "Shiga";

export default Shiga;
