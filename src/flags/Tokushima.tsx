import { forwardRef } from "react";
import { PrefectureFlagComponent, PrefectureFlagProps } from "./types";
import { getSizeWithAspectRatio } from "../utils";
import Flag from "../assets/tokushima.svg";

const Tokushima: PrefectureFlagComponent = forwardRef<
  HTMLImageElement,
  PrefectureFlagProps
>(({ width, height, className }, ref) => {
  const newClassname = `prefecture-flag tokushima ${className ?? ""}`;
  return (
    <img
      id="prefecture-flag-jp-36"
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

Tokushima.displayName = "Tokushima";

export default Tokushima;
