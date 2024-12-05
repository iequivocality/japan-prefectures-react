import { ReactNode, SVGProps, forwardRef } from "react";
import { PartialRecord, PrefectureCode } from "../types";
import { getAllPrefectures } from "../core";
import { MapType } from "./types";
import {
  dividerData,
  mapData,
  prefectureData,
  prefectureOutline,
} from "./data";

export interface PrefectureMapProps {
  className?: string;
  onMouseEnter?: (
    prefecture: PrefectureCode,
    event: React.MouseEvent<SVGPathElement, MouseEvent>,
  ) => void;
  onMouseLeave?: (
    prefecture: PrefectureCode,
    event: React.MouseEvent<SVGPathElement, MouseEvent>,
  ) => void;
  onClick?: (
    prefecture: PrefectureCode,
    event: React.MouseEvent<SVGPathElement, MouseEvent>,
  ) => void;
  onMouseOver?: (
    prefecture: PrefectureCode,
    event: React.MouseEvent<SVGPathElement, MouseEvent>,
  ) => void;
}

export interface MapOfJapanProps extends SVGProps<SVGSVGElement> {
  className?: string;
  mapType?: MapType;
  prefectureProps?: PrefectureMapProps;
  prefectureClassNames?: PartialRecord<PrefectureCode, string>;
  prefectureOutlineStyle?: {
    strokeColor?: string;
    strokeWidth?: string;
  };
  dividerStrokeStyle?: {
    strokeColor?: string;
    strokeWidth?: string;
  };
}

const defaultDividerStrokeStyle = {
  strokeColor: "#666666",
  strokeWidth: "2",
};

const defaultPrefectureOutlineStyle = {
  strokeColor: "#333333",
  strokeWidth: "1",
};

const defaultClassnames: PartialRecord<PrefectureCode, string> = {
  "JP-01": "",
  "JP-02": "",
  "JP-03": "",
  "JP-04": "",
  "JP-05": "",
  "JP-06": "",
  "JP-07": "",
  "JP-08": "",
  "JP-09": "",
  "JP-10": "",
  "JP-11": "",
  "JP-12": "",
  "JP-13": "",
  "JP-14": "",
  "JP-15": "",
  "JP-16": "",
  "JP-17": "",
  "JP-18": "",
  "JP-19": "",
  "JP-20": "",
  "JP-21": "",
  "JP-22": "",
  "JP-23": "",
  "JP-24": "",
  "JP-25": "",
  "JP-26": "",
  "JP-27": "",
  "JP-28": "",
  "JP-29": "",
  "JP-30": "",
  "JP-31": "",
  "JP-32": "",
  "JP-33": "",
  "JP-34": "",
  "JP-35": "",
  "JP-36": "",
  "JP-37": "",
  "JP-38": "",
  "JP-39": "",
  "JP-40": "",
  "JP-41": "",
  "JP-42": "",
  "JP-43": "",
  "JP-44": "",
  "JP-45": "",
  "JP-46": "",
  "JP-47": "",
};

const Japan = forwardRef<SVGSVGElement, MapOfJapanProps>(
  (props: MapOfJapanProps, ref) => {
    const prefectures = getAllPrefectures();
    const {
      className,
      mapType,
      prefectureProps,
      prefectureClassNames,
      prefectureOutlineStyle,
      dividerStrokeStyle,
      ...restProps
    } = props;
    const mt = mapType ?? "full";
    const createCommonPrefectureProps = (
      prefecture: PrefectureCode,
    ): SVGProps<SVGPathElement> => ({
      onMouseEnter: (event) =>
        prefectureProps?.onMouseEnter &&
        prefectureProps.onMouseEnter(prefecture, event),
      onMouseLeave: (event) =>
        prefectureProps?.onMouseLeave &&
        prefectureProps.onMouseLeave(prefecture, event),
      onClick: (event) =>
        prefectureProps?.onClick && prefectureProps.onClick(prefecture, event),
      onMouseOver: (event) =>
        prefectureProps?.onMouseOver &&
        prefectureProps.onMouseOver(prefecture, event),
      className: [
        "prefecture",
        prefectureProps?.className,
        prefectureClassNames && prefecture in prefectureClassNames ? prefectureClassNames[prefecture] : defaultClassnames[prefecture],
      ]
        .filter((p) => p)
        .join(" "),
    });

    let divider: ReactNode | null = null;
    if (mapType === "dense") {
      divider = (
        <polyline
          id="divider"
          fill="none"
          stroke={
            dividerStrokeStyle?.strokeColor ??
            defaultDividerStrokeStyle.strokeColor
          }
          strokeWidth={
            dividerStrokeStyle?.strokeWidth ??
            defaultDividerStrokeStyle.strokeWidth
          }
          points={dividerData[mt]}
        ></polyline>
      );
    }

    const strokes = (
      <g id="map-of-japan-strokes">
        <path
          className="map-of-japan-stroke"
          fill={
            prefectureOutlineStyle?.strokeColor ??
            defaultPrefectureOutlineStyle.strokeColor
          }
          stroke={
            prefectureOutlineStyle?.strokeColor ??
            defaultPrefectureOutlineStyle.strokeColor
          }
          strokeWidth={
            prefectureOutlineStyle?.strokeWidth ??
            defaultPrefectureOutlineStyle.strokeWidth
          }
          d={prefectureOutline[mt]}
        ></path>
        {divider}
      </g>
    );

    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        ref={ref}
        x="0px"
        y="0px"
        xmlSpace="preserve"
        viewBox={mapData.viewBox[mt]}
        enableBackground={mapData.enableBackground[mt]}
        {...restProps}
        className={[`map-of-japan map-${mt}`, className]
          .filter((p) => p)
          .join(" ")}
      >
        {strokes}
        {prefectures.map((prefecture) => {
          return (
            <path
              id={`prefecture-map-${prefecture.code.toLowerCase()}`}
              data-code={prefecture.code}
              data-region={prefecture.region.key}
              data-name={prefecture.romaji}
              d={prefectureData[prefecture.code][mt]}
              key={prefecture.code}
              stroke="none"
              {...createCommonPrefectureProps(prefecture.code)}
            ></path>
          );
        })}
      </svg>
    );
  },
);

export default Japan;
