import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";
import Flag from "../assets/kyoto.svg";

const Kyoto = forwardRef<HTMLImageElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag kyoto ${className ?? ""}`;
    return (
      <img
        src={Flag}
        ref={ref}
        width={width ?? 280}
        height={height ?? 200}
        className={newClassname}
      ></img>
    );
  },
);

Kyoto.displayName = "Kyoto";

export default Kyoto;
