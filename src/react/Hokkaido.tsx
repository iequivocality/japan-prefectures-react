import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";
import Flag from "../assets/hokkaido.svg";

const Hokkaido = forwardRef<HTMLImageElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag hokkaido ${className ?? ""}`;
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

Hokkaido.displayName = "Hokkaido";

export default Hokkaido;
