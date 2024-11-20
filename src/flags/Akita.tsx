import { forwardRef } from "react";
import { PrefectureFlagComponent, PrefectureFlagProps } from "./types";
import { getSizeWithAspectRatio } from "../utils";
import Flag from "../assets/akita.svg";

const Akita: PrefectureFlagComponent = forwardRef<
  HTMLImageElement,
  PrefectureFlagProps
>(({ width, height, className }, ref) => {
  const newClassname = `prefecture-flag akita ${className ?? ""}`;
  return (
    <img
      id="prefecture-flag-jp-05"
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

Akita.displayName = "Akita";

export default Akita;
