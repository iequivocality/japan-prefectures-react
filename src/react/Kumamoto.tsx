import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";
import Flag from "../assets/kumamoto.svg";

const Kumamoto = forwardRef<HTMLImageElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag kumamoto ${className ?? ""}`;
    return (
      <img
        src={Flag}
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      ></img>
    );
  },
);

Kumamoto.displayName = "Kumamoto";

export default Kumamoto;
