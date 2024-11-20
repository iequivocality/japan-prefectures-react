import { forwardRef } from "react";
import { PrefectureFlagComponent, PrefectureFlagProps } from "./types";
import { getSizeWithAspectRatio } from "../utils";
import Flag from "../assets/kochi.svg";

const Kochi: PrefectureFlagComponent = forwardRef<
  HTMLImageElement,
  PrefectureFlagProps
>(({ width, height, className }, ref) => {
  const newClassname = `prefecture-flag kochi ${className ?? ""}`;

  return (
    <img
      src={Flag}
      ref={ref}
      className={newClassname}
      {...getSizeWithAspectRatio(width, height, { width: 300, height: 200 })}
    ></img>
  );
});

Kochi.displayName = "Kochi";

export default Kochi;
