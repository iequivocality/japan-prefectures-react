import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";
import Flag from "../assets/ishikawa.svg";

const Ishikawa = forwardRef<HTMLImageElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag ishikawa ${className ?? ""}`;
    return (
      <img
        src={Flag}
        ref={ref}
        width={width ?? 283.87096}
        height={height ?? 200}
        className={newClassname}
      ></img>
    );
  },
);

Ishikawa.displayName = "Ishikawa";

export default Ishikawa;
