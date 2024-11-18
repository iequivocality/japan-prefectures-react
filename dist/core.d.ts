import { CompletePrefecture, Language, Prefecture, PrefectureFields, PrefectureNames, PrefectureQueryValue, PrefectureTypeKey } from "./types";
export declare function getAllPrefectures(): Prefecture[];
export declare function getPrefectureByCode(code: Prefecture["code"]): Prefecture | undefined;
export declare function getPrefectureByField<Field extends PrefectureFields, Value extends PrefectureQueryValue<Field>>(field: Field, value: Value): Prefecture | undefined;
export declare function getCompletePrefectureByCode(code: Prefecture["code"]): CompletePrefecture | undefined;
export declare function getPrefecturesByRegion(region: string): Prefecture[];
export declare function getPrefecturesNamesByLanguage(language: Language): PrefectureNames[];
export declare function getPrefecturesByType(type: PrefectureTypeKey): Prefecture[];
