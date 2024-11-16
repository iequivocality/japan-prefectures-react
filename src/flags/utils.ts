import { Size } from "./types";

export function getPrefectureFlagSize(
  width: number | undefined,
  height: number | undefined,
  defaultSize: Size,
) {
  if (width && height) {
    return { width, height };
  } else if (width && !height) {
    // w / ? = dw / dh => w * dh / dw = ?
    return { width, height: (width * defaultSize.height) / defaultSize.width };
  } else if (!width && height) {
    // ? / h = dw / dh => dw * h / dh
    return { width: (height * defaultSize.width) / defaultSize.height, height };
  } else {
    return defaultSize;
  }
}
