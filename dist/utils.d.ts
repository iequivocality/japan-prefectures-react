import { Size } from "./flags/types";
export declare function getSizeWithAspectRatio(width: number | undefined, height: number | undefined, defaultSize: Size, includeStyle?: boolean): {
    width: number;
    height: number;
    style: {
        minHeight: number;
        maxHeight: number;
        minWidth: number;
        maxWidth: number;
    } | {
        minHeight?: undefined;
        maxHeight?: undefined;
        minWidth?: undefined;
        maxWidth?: undefined;
    };
} | {
    width: number;
    height: number;
};
