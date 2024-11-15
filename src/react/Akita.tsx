import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";
import Flag from "../assets/akita.svg";

const Akita = forwardRef<HTMLImageElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag akita ${className ?? ""}`;
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

Akita.displayName = "Akita";

export default Akita;
