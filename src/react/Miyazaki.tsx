import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";
import Flag from "../assets/miyazaki.svg";

const Miyazaki = forwardRef<HTMLImageElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag miyazaki ${className ?? ""}`;
    return (
      <img
        src={Flag}
        ref={ref}
        width={width ?? 280}
        height={height ?? 200}
        className={newClassname}
      ></img>
    );
  },
);

Miyazaki.displayName = "Miyazaki";

export default Miyazaki;
