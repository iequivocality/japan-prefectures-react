import { SVGProps } from "react";
import { PrefectureCode } from "../types";
export interface MapOfJapanProps extends SVGProps<SVGSVGElement> {
    className?: string;
    prefectureClassNames?: Record<PrefectureCode, string>;
}
declare const Japan: import("react").ForwardRefExoticComponent<Omit<MapOfJapanProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
export default Japan;
