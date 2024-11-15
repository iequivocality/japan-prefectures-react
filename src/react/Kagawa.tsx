import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";
import Flag from "../assets/kagawa.svg";

const Kagawa = forwardRef<HTMLImageElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag kagawa ${className ?? ""}`;
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

Kagawa.displayName = "Kagawa";

export default Kagawa;
