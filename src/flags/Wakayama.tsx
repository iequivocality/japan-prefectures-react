import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";
import { getPrefectureFlagSize } from "./utils";
import Flag from "../assets/wakayama.svg";

const Wakayama = forwardRef<HTMLImageElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag wakayama ${className ?? ""}`;
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

Wakayama.displayName = "Wakayama";

export default Wakayama;
