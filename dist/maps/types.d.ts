export type MapType = "full" | "dense" | "deform";
export type MapTypeData = {
    [key in MapType]: string;
};
export type MapSVGAttributes = {
    viewBox: MapTypeData;
    enableBackground: MapTypeData;
};
