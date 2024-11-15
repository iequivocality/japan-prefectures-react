import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Kyoto = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag kyoto ${className}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        ref={ref}
        width={width ?? 280}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M0 0H924V660H0z" fill="#942b9d" />
        <g transform="translate(462 330) scale(32.5)">
          <g id="b">
            <path
              id="a"
              d="M-2.198545-3.807992a2.220013 2.220013 0 0 1 .925451-1.510714A5.10392 5.10392 0 0 0 0-6.6a5.10392 5.10392 0 0 0 1.273094 1.281294 2.220013 2.220013 0 0 1 .925451 1.510714L0 1z"
              fill="#fff"
            />
            <use xlinkHref="#a" transform="rotate(180)" />
          </g>
          <use xlinkHref="#b" transform="rotate(60)" />
          <use xlinkHref="#b" transform="rotate(120)" />
          <g id="d">
            <path
              id="c"
              d="M-.921696-2.381611l-.307794-.896066a1.3 1.3 0 1 1 2.458978 0l-.307794 .896066a.4 .4 0 0 0 .679993.392594L0 .2z"
              fill="#fc0"
            />
            <use xlinkHref="#c" transform="rotate(180)" />
          </g>
          <use xlinkHref="#d" transform="rotate(60)" />
          <use xlinkHref="#d" transform="rotate(120)" />
          <g id="f">
            <path
              id="e"
              d="M-.40535-1.8119961l-.1893-1.408059a.6.6 0 1 1 1.1893 0l-.1893 1.408059a.6 .6 0 0 0 .96121.554955L0 .6z"
              fill="#fff"
            />
            <use xlinkHref="#e" transform="rotate(180)" />
          </g>
          <use xlinkHref="#f" transform="rotate(60)" />
          <use xlinkHref="#f" transform="rotate(120)" />
          <circle r="1" fill="#fc0" />
        </g>
      </svg>
    );
  },
);

Kyoto.displayName = "Kyoto";

export default Kyoto;
