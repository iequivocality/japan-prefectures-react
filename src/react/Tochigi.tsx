import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";
import Flag from "../assets/tochigi.svg";

const Tochigi = forwardRef<HTMLImageElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag tochigi ${className ?? ""}`;
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

Tochigi.displayName = "Tochigi";

export default Tochigi;
