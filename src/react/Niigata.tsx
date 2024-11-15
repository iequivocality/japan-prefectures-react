import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";
import Flag from "../assets/niigata.svg";

const Niigata = forwardRef<HTMLImageElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag niigata ${className ?? ""}`;
    return (
      <img
        src={Flag}
        ref={ref}
        width={width ?? 277.77777}
        height={height ?? 200}
        className={newClassname}
      ></img>
    );
  },
);

Niigata.displayName = "Niigata";

export default Niigata;
