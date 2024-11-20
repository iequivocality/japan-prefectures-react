import { forwardRef } from "react";
import { PrefectureFlagComponent, PrefectureFlagProps } from "./types";
import { getSizeWithAspectRatio } from "../utils";
import Flag from "../assets/aichi.svg";

const Aichi: PrefectureFlagComponent = forwardRef<
  HTMLImageElement,
  PrefectureFlagProps
>(({ width, height, className }, ref) => {
  const newClassname = `prefecture-flag aichi ${className ?? ""}`;
  return (
    <img
      id="prefecture-flag-jp-23"
      src={Flag}
      ref={ref}
      className={newClassname}
      {...getSizeWithAspectRatio(width, height, {
        width: 285.71428,
        height: 200,
      })}
    ></img>
  );
});

Aichi.displayName = "Aichi";

export default Aichi;
