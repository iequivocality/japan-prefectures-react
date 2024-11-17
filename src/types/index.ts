type CodeNumbers = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

type CodeTensPlace = Exclude<CodeNumbers, "5" | "6" | "7" | "8" | "9">;

export type Language = "japanese" | "romaji";

export type PrefectureType = {
  key: PrefectureTypeKey;
  japanese: string;
  romaji: string;
};

export type PrefectureTypeKey = "to" | "do" | "fu" | "ken";

export type PrefectureCode =
  `JP-${Exclude<`${CodeTensPlace}${CodeNumbers}`, "00" | "48" | "49">}`;

export type Prefecture = {
  code: PrefectureCode;
  japanese: string;
  romaji: string;
  type: PrefectureType;
  region: Region;
  borders: PrefectureCode[];
};

export type CompletePrefecture = Omit<Prefecture, "borders"> & {
  borders: Prefecture[];
};

export type PrefectureNames = {
  code: PrefectureCode;
  name: string;
  type: string;
};

export type PrefectureFields = keyof Prefecture;

export type Region = {
  key: RegionKey;
  japanese: string;
  romaji: string;
};

export type RegionKey =
  | "hokkaido"
  | "tohoku"
  | "kanto"
  | "chubu"
  | "kansai"
  | "chugoku"
  | "shikoku"
  | "kyushu";
