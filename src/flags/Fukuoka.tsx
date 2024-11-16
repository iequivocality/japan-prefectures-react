import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";
import { getPrefectureFlagSize } from "./utils";
import Flag from "../assets/fukuoka.svg";

const Fukuoka = forwardRef<HTMLImageElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag fukuoka ${className ?? ""}`;
    return (
      <img
        src={Flag}
        ref={ref}
        className={newClassname}
        {...getPrefectureFlagSize(width, height, {
          width: 285.9375,
          height: 200,
        })}
      ></img>
    );
  },
);

Fukuoka.displayName = "Fukuoka";

export default Fukuoka;
