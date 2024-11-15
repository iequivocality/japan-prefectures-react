import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";
import Flag from "../assets/tokushima.svg";

const Tokushima = forwardRef<HTMLImageElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag tokushima ${className ?? ""}`;
    return (
      <img
        src={Flag}
        ref={ref}
        width={width ?? 285.71428}
        height={height ?? 200}
        className={newClassname}
      ></img>
    );
  },
);

Tokushima.displayName = "Tokushima";

export default Tokushima;
