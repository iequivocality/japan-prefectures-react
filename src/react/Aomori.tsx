import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";
import Flag from "../assets/aomori.svg";

const Aomori = forwardRef<HTMLImageElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag aomori ${className ?? ""}`;
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

Aomori.displayName = "Aomori";

export default Aomori;
