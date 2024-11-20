import { forwardRef } from "react";
import { PrefectureFlagComponent, PrefectureFlagProps } from "./types";
import { getSizeWithAspectRatio } from "../utils";
import Flag from "../assets/tottori.svg";

const Tottori: PrefectureFlagComponent = forwardRef<
  HTMLImageElement,
  PrefectureFlagProps
>(({ width, height, className }, ref) => {
  const newClassname = `prefecture-flag tottori ${className ?? ""}`;
  return (
    <img
      src={Flag}
      ref={ref}
      className={newClassname}
      {...getSizeWithAspectRatio(width, height, { width: 300, height: 200 })}
    ></img>
  );
});

Tottori.displayName = "Tottori";

export default Tottori;
