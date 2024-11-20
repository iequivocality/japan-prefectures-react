import { getPrefectureByField } from "../core";
import {
  Prefecture,
  PrefectureCode,
  PrefectureFields,
  PrefectureQueryValue,
  PrefectureType,
  Region,
} from "../types";
import getFlagByCode from "./getFlagByCode";
import { PrefectureFlagComponent, PrefectureFlagProps } from "./types";

export default function getFlagByPrefectureField<
  K extends PrefectureFields,
  V extends PrefectureQueryValue<K>,
>(key: K, value: V, props: PrefectureFlagProps) {
  const prefecture = getPrefectureByField(key, value);
  if (prefecture) {
    return getFlagByCode(prefecture.code, props);
  }
  return undefined;
}
