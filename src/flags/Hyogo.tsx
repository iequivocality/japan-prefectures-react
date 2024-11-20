import { forwardRef } from "react";
import { PrefectureFlagComponent, PrefectureFlagProps } from "./types";
import { getSizeWithAspectRatio } from "../utils";
import Flag from "../assets/hyogo.svg";

const Hyogo: PrefectureFlagComponent = forwardRef<
  HTMLImageElement,
  PrefectureFlagProps
>(({ width, height, className }, ref) => {
  const newClassname = `prefecture-flag hyogo ${className ?? ""}`;
  return (
    <img
      id="prefecture-flag-jp-28"
      src={Flag}
      ref={ref}
      className={newClassname}
      {...getSizeWithAspectRatio(width, height, {
        width: 284.46351,
        height: 200,
      })}
    ></img>
  );
});

Hyogo.displayName = "Hyogo";

export default Hyogo;
