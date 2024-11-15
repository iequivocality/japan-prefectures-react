import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";
import Flag from "../assets/fukuoka.svg";

const Fukuoka = forwardRef<HTMLImageElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag fukuoka ${className ?? ""}`;
    return (
      <img
        src={Flag}
        ref={ref}
        width={width ?? 285.9375}
        height={height ?? 200}
        className={newClassname}
      ></img>
    );
  },
);

Fukuoka.displayName = "Fukuoka";

export default Fukuoka;
