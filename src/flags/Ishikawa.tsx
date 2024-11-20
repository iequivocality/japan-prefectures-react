import { forwardRef } from "react";
import { PrefectureFlagComponent, PrefectureFlagProps } from "./types";
import { getSizeWithAspectRatio } from "../utils";
import Flag from "../assets/ishikawa.svg";

const Ishikawa: PrefectureFlagComponent = forwardRef<
  HTMLImageElement,
  PrefectureFlagProps
>(({ width, height, className }, ref) => {
  const newClassname = `prefecture-flag ishikawa ${className ?? ""}`;
  return (
    <img
      id="prefecture-flag-jp-17"
      src={Flag}
      ref={ref}
      className={newClassname}
      {...getSizeWithAspectRatio(width, height, {
        width: 283.87096,
        height: 200,
      })}
    ></img>
  );
});

Ishikawa.displayName = "Ishikawa";

export default Ishikawa;
