import { forwardRef } from "react";
import { PrefectureFlagComponent, PrefectureFlagProps } from "./types";
import { getSizeWithAspectRatio } from "../utils";
import Flag from "../assets/aomori.svg";

const Aomori: PrefectureFlagComponent = forwardRef<
  HTMLImageElement,
  PrefectureFlagProps
>(({ width, height, className }, ref) => {
  const newClassname = `prefecture-flag aomori ${className ?? ""}`;
  return (
    <img
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

Aomori.displayName = "Aomori";

export default Aomori;
