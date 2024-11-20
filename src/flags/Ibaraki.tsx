import { forwardRef } from "react";
import { PrefectureFlagComponent, PrefectureFlagProps } from "./types";
import { getSizeWithAspectRatio } from "../utils";
import Flag from "../assets/ibaraki.svg";

const Ibaraki: PrefectureFlagComponent = forwardRef<
  HTMLImageElement,
  PrefectureFlagProps
>(({ width, height, className }, ref) => {
  const newClassname = `prefecture-flag ibaraki  ${className ?? ""}`;
  return (
    <img
      id="prefecture-flag-jp-08"
      src={Flag}
      ref={ref}
      className={newClassname}
      {...getSizeWithAspectRatio(width, height, { width: 300, height: 200 })}
    ></img>
  );
});

Ibaraki.displayName = "Ibaraki";

export default Ibaraki;
