import { forwardRef } from "react";
import { PrefectureFlagComponent, PrefectureFlagProps } from "./types";
import { getSizeWithAspectRatio } from "../utils";
import Flag from "../assets/kanagawa.svg";

const Kanagawa: PrefectureFlagComponent = forwardRef<
  HTMLImageElement,
  PrefectureFlagProps
>(({ width, height, className }, ref) => {
  const newClassname = `prefecture-flag kanagawa ${className ?? ""}`;
  return (
    <img
      id="prefecture-flag-jp-14"
      src={Flag}
      ref={ref}
      className={newClassname}
      {...getSizeWithAspectRatio(width, height, { width: 300, height: 200 })}
    ></img>
  );
});

Kanagawa.displayName = "Kanagawa";

export default Kanagawa;
