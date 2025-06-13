import * as react from 'react';
import { SVGProps, ComponentType, ReactNode } from 'react';

type CodeNumbers = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type CodeTensPlace = Exclude<CodeNumbers, "5" | "6" | "7" | "8" | "9">;
type PrefectureType = {
    key: PrefectureTypeKey;
    japanese: string;
    romaji: string;
};
type PrefectureTypeKey = "to" | "do" | "fu" | "ken";
type PrefectureCode = `JP-${Exclude<`${CodeTensPlace}${CodeNumbers}`, "00" | "48" | "49">}`;
type Prefecture = {
    code: PrefectureCode;
    japanese: string;
    romaji: string;
    type: PrefectureType;
    region: Region;
    borders: PrefectureCode[];
};
type Region = {
    key: RegionKey;
    japanese: string;
    romaji: string;
};
type RegionKey = "hokkaido" | "tohoku" | "kanto" | "chubu" | "kansai" | "chugoku" | "shikoku" | "kyushu";
type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
};

type MapType = "full" | "dense" | "deform";
type MapTypeData = {
    [key in MapType]: string;
};
type MapSVGAttributes = {
    viewBox: MapTypeData;
    enableBackground: MapTypeData;
};

interface PrefectureMapProps {
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
interface MapOfJapanProps extends SVGProps<SVGSVGElement> {
    className?: string;
    mapType?: MapType;
    prefectureProps?: PrefectureMapProps;
    prefectureClassNames?: PartialRecord<PrefectureCode, string>;
    prefectureOutlineStyle?: StrokeProps;
    dividerStrokeStyle?: StrokeProps;
    PrefectureWrapperComponent?: ComponentType<{
        prefecture: Prefecture;
        children: ReactNode;
    }>;
}
declare const Japan: react.ForwardRefExoticComponent<Omit<MapOfJapanProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

export { Japan, type MapOfJapanProps, type MapSVGAttributes, type MapType, type MapTypeData, type PrefectureMapProps };
