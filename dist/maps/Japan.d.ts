import { ComponentType, SVGProps } from "react";
import { PartialRecord, PrefectureCode } from "../types";
import { MapType } from "./types";
export interface PrefectureMapProps {
    className?: string;
    onMouseEnter?: (prefecture: PrefectureCode, event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
    onMouseLeave?: (prefecture: PrefectureCode, event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
    onClick?: (prefecture: PrefectureCode, event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
    onMouseOver?: (prefecture: PrefectureCode, event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
    pathProps?: SVGProps<SVGPathElement>;
}
type StrokeProps = {
    strokeColor?: string;
    strokeWidth?: string | number;
};
export interface MapOfJapanProps extends SVGProps<SVGSVGElement> {
    className?: string;
    mapType?: MapType;
    prefectureProps?: PrefectureMapProps;
    prefectureClassNames?: PartialRecord<PrefectureCode, string>;
    prefectureOutlineStyle?: StrokeProps;
    dividerStrokeStyle?: StrokeProps;
    PrefectureWrapperComponent?: ComponentType;
}
declare const Japan: import("react").ForwardRefExoticComponent<Omit<MapOfJapanProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
export default Japan;
