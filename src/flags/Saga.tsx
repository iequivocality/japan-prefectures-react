import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";
import { getPrefectureFlagSize } from "./utils";
import Flag from "../assets/saga.svg";

const Saga = forwardRef<HTMLImageElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag saga ${className ?? ""}`;
    return (
      <img
        src={Flag}
        ref={ref}
        className={newClassname}
        {...getPrefectureFlagSize(width, height, { width: 300, height: 200 })}
      ></img>
    );
  },
);

Saga.displayName = "Saga";

export default Saga;
