import { Size } from "./types";

export function getPrefectureFlagSize(
  width: number | undefined,
  height: number | undefined,
  defaultSize: Size,
) {
  if (width !== undefined && height !== undefined) {
    return { width, height };
  } else if (width !== undefined && height === undefined) {
    // w / ? = dw / dh => w * dh / dw = ?
    return getStylesFromWidthAndHeight(width, (width * defaultSize.height) / defaultSize.width);
  } else if (height !== undefined) {
    // ? / h = dw / dh => dw * h / dh
    return getStylesFromWidthAndHeight((height * defaultSize.width) / defaultSize.height, height);
  } else {
    return defaultSize;
  }
}

function getStylesFromWidthAndHeight(width: number, height: number) {
  return {
    width,
    height,
    style: {
      minHeight: height,
      maxHeight: height,
      minWidth: width,
      maxWidth: width
    }
  }

}
