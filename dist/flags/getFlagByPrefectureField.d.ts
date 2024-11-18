import { PrefectureFields, PrefectureQueryValue } from "../types";
import { PrefectureFlagProps } from "./types";
export default function getFlagByPrefectureField<K extends PrefectureFields, V extends PrefectureQueryValue<K>>(key: K, value: V, props: PrefectureFlagProps): import("react").ReactNode;
