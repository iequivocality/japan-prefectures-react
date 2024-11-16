type CodeNumbers = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

type CodeTensPlace = Exclude<CodeNumbers, "5" | "6" | "7" | "8" | "9">;

export type Language = "japanese" | "romaji";

export type PrefectureType = {
  japanese: string;
  romaji: string;
};

export type PrefectureTypeKey = "to" | "do" | "fu" | "ken";

export type PrefectureCode = `JP-${Exclude<`${CodeTensPlace}${CodeNumbers}`, "00" | "48" | "49">}`;

export type Prefecture = {
  code: PrefectureCode;
  japanese: string;
  romaji: string;
  type: PrefectureType;
};

export type PrefectureNames = { code: PrefectureCode, name: string, type: string };

export type PrefectureFields = keyof Prefecture;

export * from "../flags/types";
