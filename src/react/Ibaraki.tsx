import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";
import Flag from "../assets/ibaraki.svg";

const Ibaraki = forwardRef<HTMLImageElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag ibaraki  ${className ?? ""}`;
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

Ibaraki.displayName = "Ibaraki";

export default Ibaraki;
