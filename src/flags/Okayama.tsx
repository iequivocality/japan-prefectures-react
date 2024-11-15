import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";
import { getPrefectureFlagSize } from "./utils";
import Flag from "../assets/okayama.svg";

const Okayama = forwardRef<HTMLImageElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag okayama ${className ?? ""}`;
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

Okayama.displayName = "Okayama";

export default Okayama;
