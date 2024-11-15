import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";
import Flag from "../assets/hyogo.svg";

const Hyogo = forwardRef<HTMLImageElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag hyogo ${className ?? ""}`;
    return (
      <img
        src={Flag}
        ref={ref}
        width={width ?? 284.46351}
        height={height ?? 200}
        className={newClassname}
      ></img>
    );
  },
);

Hyogo.displayName = "Hyogo";

export default Hyogo;
