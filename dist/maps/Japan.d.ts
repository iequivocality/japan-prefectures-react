import { SVGProps } from "react";
import { PartialRecord, PrefectureCode } from "../types";
import { MapType } from "./types";
export interface PrefectureMapProps {
    className?: string;
    onMouseEnter?: (prefecture: PrefectureCode, event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
    onMouseLeave?: (prefecture: PrefectureCode, event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
    onClick?: (prefecture: PrefectureCode, event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
    onMouseOver?: (prefecture: PrefectureCode, event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
}
export interface MapOfJapanProps extends SVGProps<SVGSVGElement> {
    className?: string;
    mapType?: MapType;
    prefectureProps?: PrefectureMapProps;
    prefectureClassNames?: PartialRecord<PrefectureCode, string>;
    prefectureOutlineStyle?: {
        strokeColor?: string;
        strokeWidth?: string | number;
    };
    dividerStrokeStyle?: {
        strokeColor?: string;
        strokeWidth?: string | number;
    };
}
declare const Japan: import("react").ForwardRefExoticComponent<Omit<MapOfJapanProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
export default Japan;
