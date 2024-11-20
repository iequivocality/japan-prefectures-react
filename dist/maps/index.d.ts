import * as react from 'react';
import { SVGProps } from 'react';

type CodeNumbers = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type CodeTensPlace = Exclude<CodeNumbers, "5" | "6" | "7" | "8" | "9">;
type PrefectureCode = `JP-${Exclude<`${CodeTensPlace}${CodeNumbers}`, "00" | "48" | "49">}`;
type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
};

type MapType = "full" | "dense" | "deform";

interface PrefectureMapProps {
    className?: string;
    onMouseEnter?: (prefecture: PrefectureCode, event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
    onMouseLeave?: (prefecture: PrefectureCode, event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
    onClick?: (prefecture: PrefectureCode, event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
    onMouseOver?: (prefecture: PrefectureCode, event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
}
interface MapOfJapanProps extends SVGProps<SVGSVGElement> {
    className?: string;
    mapType?: MapType;
    prefectureProps?: PrefectureMapProps;
    prefectureClassNames?: PartialRecord<PrefectureCode, string>;
}
declare const Japan: react.ForwardRefExoticComponent<Omit<MapOfJapanProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

export { Japan, type MapOfJapanProps, type PrefectureMapProps };
