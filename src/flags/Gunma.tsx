import { forwardRef } from "react";
import { PrefectureFlagComponent, PrefectureFlagProps } from "./types";
import { getSizeWithAspectRatio } from "../utils";
import Flag from "../assets/gunma.svg";

const Gunma: PrefectureFlagComponent = forwardRef<
  HTMLImageElement,
  PrefectureFlagProps
>(({ width, height, className }, ref) => {
  const newClassname = `prefecture-flag gunma ${className ?? ""}`;
  return (
    <img
      src={Flag}
      ref={ref}
      className={newClassname}
      {...getSizeWithAspectRatio(width, height, { width: 300, height: 200 })}
    ></img>
  );
});

Gunma.displayName = "Gunma";

export default Gunma;
