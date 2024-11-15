import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Okinawa = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag kagoshima  ${className ?? ""}`;
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 211.667 141.023" ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}>
        <path fill="#fff" d="M0 0h211.667v141.023H0z" />
        <circle cx="105.833" cy="70.398" r="50.237" fill="#e00" paintOrder="fill markers stroke" />
        <ellipse cx="105.833" cy="60.397" fill="#fff" paintOrder="fill markers stroke" rx="34.352" ry="35.111" />
        <ellipse cx="105.834" cy="52.654" fill="#e00" paintOrder="fill markers stroke" rx="22.573" ry="22.538" />
      </svg>
    );
  },
);

Okinawa.displayName = "Okinawa";

export default Okinawa;
