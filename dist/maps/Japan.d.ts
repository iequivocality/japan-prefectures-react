import { SVGProps } from "react";
import { PrefectureCode } from "../types";
export interface PrefectureProps {
    className?: string;
    onMouseEnter?: (prefecture: PrefectureCode, event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
    onMouseLeave?: (prefecture: PrefectureCode, event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
    onClick?: (prefecture: PrefectureCode, event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
}
export interface MapOfJapanProps extends SVGProps<SVGSVGElement> {
    className?: string;
    prefectureProps?: PrefectureProps;
    prefectureClassNames?: Record<PrefectureCode, string>;
}
declare const Japan: import("react").ForwardRefExoticComponent<Omit<MapOfJapanProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
export default Japan;
