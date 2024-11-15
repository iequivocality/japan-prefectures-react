import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Hokkaido = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag hokkaido ${className}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="-630 -420 1260 840"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M-630-420h1260v840H-630z" fill="#2f304e" />
        <path
          id="a"
          d="M0-265.044292l60-28.894477V0H-60V-293.938769z"
          fill="#fff"
        />
        <g id="a3">
          <use xlinkHref="#a" transform="rotate(51.428571428571)" />
          <use xlinkHref="#a" transform="rotate(102.857142857143)" />
          <use xlinkHref="#a" transform="rotate(154.285714285714)" />
        </g>
        <use xlinkHref="#a3" transform="rotate(154.285714285714)" />
        <path id="b" d="M0-265.044292L32.703114 0H-32.703114z" fill="#d13a43" />
        <g id="b3">
          <use xlinkHref="#b" transform="rotate(51.428571428571)" />
          <use xlinkHref="#b" transform="rotate(102.857142857143)" />
          <use xlinkHref="#b" transform="rotate(154.285714285714)" />
        </g>
        <use xlinkHref="#b3" transform="rotate(154.285714285714)" />
      </svg>
    );
  },
);

Hokkaido.displayName = "Hokkaido";

export default Hokkaido;
