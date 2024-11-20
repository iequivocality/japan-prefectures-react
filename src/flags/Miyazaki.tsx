import { forwardRef } from "react";
import { PrefectureFlagComponent, PrefectureFlagProps } from "./types";
import { getSizeWithAspectRatio } from "../utils";
import Flag from "../assets/miyazaki.svg";

const Miyazaki: PrefectureFlagComponent = forwardRef<
  HTMLImageElement,
  PrefectureFlagProps
>(({ width, height, className }, ref) => {
  const newClassname = `prefecture-flag miyazaki ${className ?? ""}`;
  return (
    <img
      src={Flag}
      ref={ref}
      className={newClassname}
      {...getSizeWithAspectRatio(width, height, { width: 280, height: 200 })}
    ></img>
  );
});

Miyazaki.displayName = "Miyazaki";

export default Miyazaki;
