import { forwardRef } from "react";
import { PrefectureFlagComponent, PrefectureFlagProps } from "./types";
import { getSizeWithAspectRatio } from "../utils";
import Flag from "../assets/fukuoka.svg";

const Fukuoka: PrefectureFlagComponent = forwardRef<
  HTMLImageElement,
  PrefectureFlagProps
>(({ width, height, className }, ref) => {
  const newClassname = `prefecture-flag fukuoka ${className ?? ""}`;
  return (
    <img
      src={Flag}
      ref={ref}
      className={newClassname}
      {...getSizeWithAspectRatio(width, height, {
        width: 285.9375,
        height: 200,
      })}
    ></img>
  );
});

Fukuoka.displayName = "Fukuoka";

export default Fukuoka;
