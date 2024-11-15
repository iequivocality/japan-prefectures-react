import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";
import Flag from "../assets/mie.svg";

const Mie = forwardRef<HTMLImageElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag mie ${className ?? ""}`;
    return (
      <img
        src={Flag}
        ref={ref}
        width={width ?? 282.71844}
        height={height ?? 200}
        className={newClassname}
      ></img>
    );
  },
);

Mie.displayName = "Mie";

export default Mie;
