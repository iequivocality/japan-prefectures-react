import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";
import Flag from "../assets/iwate.svg";

const Iwate = forwardRef<HTMLImageElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag iwate ${className ?? ""}`;
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

Iwate.displayName = "Iwate";

export default Iwate;
