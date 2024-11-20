import { Size } from "./flags/types";

export function getSizeWithAspectRatio(
  width: number | undefined,
  height: number | undefined,
  defaultSize: Size,
  includeStyle = true,
) {
  if (width !== undefined && height !== undefined) {
    return { width, height };
  } else if (width !== undefined && height === undefined) {
    // w / ? = dw / dh => w * dh / dw = ?
    return getStylesFromWidthAndHeight(
      width,
      (width * defaultSize.height) / defaultSize.width,
      includeStyle
    );
  } else if (height !== undefined) {
    // ? / h = dw / dh => dw * h / dh
    return getStylesFromWidthAndHeight(
      (height * defaultSize.width) / defaultSize.height,
      height,
      includeStyle
    );
  } else {
    return getStylesFromWidthAndHeight(defaultSize.width, defaultSize.height, includeStyle);
  }
}

function getStylesFromWidthAndHeight(width: number, height: number, includeStyle: boolean) {
  return {
    width,
    height,
    style: includeStyle ? {
      minHeight: height,
      maxHeight: height,
      minWidth: width,
      maxWidth: width,
    } : {},
  };
}
