import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";
import { getPrefectureFlagSize } from "./utils";
import Flag from "../assets/toyama.svg";

const Toyama = forwardRef<HTMLImageElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag toyama ${className ?? ""}`;
    return (
      <img
        src={Flag}
        ref={ref}
        className={newClassname}
        {...getPrefectureFlagSize(width, height, { width: 300, height: 200 })}
      ></img>
    );
  },
);

Toyama.displayName = "Toyama";

export default Toyama;
