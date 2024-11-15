import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";
import Flag from "../assets/aichi.svg";

const Aichi = forwardRef<HTMLImageElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag aichi ${className ?? ""}`;
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

Aichi.displayName = "Aichi";

export default Aichi;
