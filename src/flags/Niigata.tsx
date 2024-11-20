import { forwardRef } from "react";
import { PrefectureFlagComponent, PrefectureFlagProps } from "./types";
import { getSizeWithAspectRatio } from "../utils";
import Flag from "../assets/niigata.svg";

const Niigata: PrefectureFlagComponent = forwardRef<
  HTMLImageElement,
  PrefectureFlagProps
>(({ width, height, className }, ref) => {
  const newClassname = `prefecture-flag niigata ${className ?? ""}`;
  return (
    <img
      id="prefecture-flag-jp-15"
      src={Flag}
      ref={ref}
      className={newClassname}
      {...getSizeWithAspectRatio(width, height, {
        width: 277.77777,
        height: 200,
      })}
    ></img>
  );
});

Niigata.displayName = "Niigata";

export default Niigata;
