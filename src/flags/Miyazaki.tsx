import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";
import { getPrefectureFlagSize } from "./utils";
import Flag from "../assets/miyazaki.svg";

const Miyazaki = forwardRef<HTMLImageElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag miyazaki ${className ?? ""}`;
    return (
      <img
        src={Flag}
        ref={ref}
        className={newClassname}
        {...getPrefectureFlagSize(width, height, { width: 280, height: 200 })}
      ></img>
    );
  },
);

Miyazaki.displayName = "Miyazaki";

export default Miyazaki;
