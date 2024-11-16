import { Language, Prefecture, PrefectureNames, PrefectureType, PrefectureTypeKey } from "./types";

export const prefectureTypes: Record<PrefectureTypeKey, PrefectureType> = {
  to: {
    japanese: "都",
    romaji: "to",
  },
  do: {
    japanese: "道",
    romaji: "do",
  },
  ken: {
    japanese: "県",
    romaji: "ken",
  },
  fu: {
    japanese: "府",
    romaji: "fu",
  },
};

const prefectures: Prefecture[] = [
  {
    code: "JP-01",
    japanese: "北海道",
    romaji: "Hokkaidō",
    type: prefectureTypes["do"],
  },
  {
    code: "JP-02",
    japanese: "青森",
    romaji: "Aomori",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-03",
    japanese: "岩手",
    romaji: "Iwate",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-04",
    japanese: "宮城",
    romaji: "Miyagi",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-05",
    japanese: "秋田",
    romaji: "Akita",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-06",
    japanese: "山形",
    romaji: "Yamagata",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-07",
    japanese: "福島",
    romaji: "Fukushima",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-08",
    japanese: "茨城",
    romaji: "Ibaraki",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-09",
    japanese: "栃木",
    romaji: "Tochigi",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-10",
    japanese: "群馬",
    romaji: "Gunma",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-11",
    japanese: "埼玉",
    romaji: "Saitama",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-12",
    japanese: "千葉",
    romaji: "Chiba",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-13",
    japanese: "東京",
    romaji: "Tokyo",
    type: prefectureTypes["to"],
  },
  {
    code: "JP-14",
    japanese: "神奈川",
    romaji: "Kanagawa",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-15",
    japanese: "新潟",
    romaji: "Niigata",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-16",
    japanese: "富山",
    romaji: "Toyama",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-17",
    japanese: "石川",
    romaji: "Ishikawa",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-18",
    japanese: "福井",
    romaji: "Fukui",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-19",
    japanese: "山梨",
    romaji: "Yamanashi",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-20",
    japanese: "長野",
    romaji: "Nagano",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-21",
    japanese: "岐阜",
    romaji: "Gifu",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-22",
    japanese: "静岡",
    romaji: "Shizuoka",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-23",
    japanese: "愛知",
    romaji: "Aichi",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-24",
    japanese: "三重",
    romaji: "Mie",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-25",
    japanese: "滋賀",
    romaji: "Shiga",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-26",
    japanese: "京都",
    romaji: "Kyoto",
    type: prefectureTypes["fu"],
  },
  {
    code: "JP-27",
    japanese: "大阪",
    romaji: "Osaka",
    type: prefectureTypes["fu"],
  },
  {
    code: "JP-28",
    japanese: "兵庫",
    romaji: "Hyogo",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-29",
    japanese: "奈良",
    romaji: "Nara",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-30",
    japanese: "和歌",
    romaji: "Wakayama",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-31",
    japanese: "鳥取",
    romaji: "Tottori",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-32",
    japanese: "島根",
    romaji: "Shimane",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-33",
    japanese: "岡山",
    romaji: "Okayama",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-34",
    japanese: "広島",
    romaji: "Hiroshima",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-35",
    japanese: "山口",
    romaji: "Yamaguchi",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-36",
    japanese: "徳島",
    romaji: "Tokushima",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-37",
    japanese: "香川",
    romaji: "Kagawa",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-38",
    japanese: "愛媛",
    romaji: "Ehime",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-39",
    japanese: "高知",
    romaji: "Kochi",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-40",
    japanese: "福岡",
    romaji: "Fukuoka",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-41",
    japanese: "佐賀",
    romaji: "Saga",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-42",
    japanese: "長崎",
    romaji: "Nagasaki",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-43",
    japanese: "熊本",
    romaji: "Kumamoto",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-44",
    japanese: "大分",
    romaji: "Oita",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-45",
    japanese: "宮崎",
    romaji: "Miyazaki",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-46",
    japanese: "鹿児島",
    romaji: "Kagoshima",
    type: prefectureTypes["ken"],
  },
  {
    code: "JP-47",
    japanese: "沖縄県",
    romaji: "Okinawa",
    type: prefectureTypes["ken"],
  },
];

export function getAllPrefectures() {
  return prefectures;
}

export function getPrefectureByCode(code: Prefecture["code"]) {
  return prefectures.find((prefecture) => prefecture.code === code);
}

export function getPrefecturesNamesByLanguage(language: Language): PrefectureNames[] {
  if (language === "japanese") {
    return prefectures.map((prefecture) => ({
      code: prefecture.code,
      name: prefecture.japanese,
      type: prefecture.type.japanese,
    }));
  }

  return prefectures.map((prefecture) => ({
    code: prefecture.code,
    name: prefecture.romaji,
    type: prefecture.type.romaji,
  }));
}

export function getPrefecturesByType(type: PrefectureTypeKey): Prefecture[] {
  return prefectures.filter((prefecture) => prefecture.type.romaji === type);
}
