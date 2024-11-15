type CodeNumbers = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

type CodeTensPlace = Exclude<CodeNumbers, "5" | "6" | "7" | "8" | "9">;

export type Prefecture = {
  code: `JP-${Exclude<`${CodeTensPlace}${CodeNumbers}`, "00" | "48" | "49">}`;
  japanese: string;
  romaji: string;
  type: string;
};

export * from "./react/types";
