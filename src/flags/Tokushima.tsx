import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";
import { getPrefectureFlagSize } from "./utils";
import Flag from "../assets/tokushima.svg";

const Tokushima = forwardRef<HTMLImageElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag tokushima ${className ?? ""}`;
    return (
      <img
        src={Flag}
        ref={ref}
        className={newClassname}
        {...getPrefectureFlagSize(width, height, {
          width: 285.71428,
          height: 200,
        })}
      ></img>
    );
  },
);

Tokushima.displayName = "Tokushima";

export default Tokushima;
