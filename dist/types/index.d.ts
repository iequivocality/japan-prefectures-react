type CodeNumbers = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type CodeTensPlace = Exclude<CodeNumbers, "5" | "6" | "7" | "8" | "9">;
type Language = "japanese" | "romaji";
type PrefectureType = {
    key: PrefectureTypeKey;
    japanese: string;
    romaji: string;
};
type PrefectureTypeKey = "to" | "do" | "fu" | "ken";
type PrefectureCode = `JP-${Exclude<`${CodeTensPlace}${CodeNumbers}`, "00" | "48" | "49">}`;
type Prefecture = {
    code: PrefectureCode;
    japanese: string;
    romaji: string;
    type: PrefectureType;
    region: Region;
    borders: PrefectureCode[];
};
type CompletePrefecture = Omit<Prefecture, "borders"> & {
    borders: Prefecture[];
};
type PrefectureNames = {
    code: PrefectureCode;
    name: string;
    type: string;
};
type PrefectureFields = keyof Prefecture;
type Region = {
    key: RegionKey;
    japanese: string;
    romaji: string;
};
type RegionKey = "hokkaido" | "tohoku" | "kanto" | "chubu" | "kansai" | "chugoku" | "shikoku" | "kyushu";
type PrefectureQueryValue<Key extends PrefectureFields> = Prefecture[Key] extends string ? Prefecture[Key] : Prefecture[Key] extends Region ? Region[keyof Region] : Prefecture[Key] extends PrefectureType ? Prefecture[keyof Prefecture] : Prefecture[Key] extends PrefectureCode[] ? PrefectureCode : string;

export type { CompletePrefecture, Language, Prefecture, PrefectureCode, PrefectureFields, PrefectureNames, PrefectureQueryValue, PrefectureType, PrefectureTypeKey, Region, RegionKey };
