import {
  CompletePrefecture,
  Language,
  Prefecture,
  PrefectureCode,
  PrefectureFields,
  PrefectureNames,
  PrefectureQueryValue,
  PrefectureType,
  PrefectureTypeKey,
  Region,
  RegionKey,
} from "./types";

const regions: Record<RegionKey, Region> = {
  hokkaido: {
    key: "hokkaido",
    japanese: "北海道",
    romaji: "Hokkaidō",
  },
  tohoku: {
    key: "tohoku",
    japanese: "東北",
    romaji: "Tōhoku",
  },
  kanto: {
    key: "kanto",
    japanese: "関東",
    romaji: "Kantō",
  },
  chubu: {
    key: "chubu",
    japanese: "中部",
    romaji: "Chūbu",
  },
  kansai: {
    key: "kansai",
    japanese: "関西",
    romaji: "Kansai",
  },
  chugoku: {
    key: "chugoku",
    japanese: "中国",
    romaji: "Chūgoku",
  },
  shikoku: {
    key: "shikoku",
    japanese: "四国",
    romaji: "Shikoku",
  },
  kyushu: {
    key: "kyushu",
    japanese: "九州",
    romaji: "Kyūshū",
  },
};

const prefectureTypes: Record<PrefectureTypeKey, PrefectureType> = {
  to: {
    key: "to",
    japanese: "都",
    romaji: "to",
  },
  do: {
    key: "do",
    japanese: "道",
    romaji: "do",
  },
  ken: {
    key: "ken",
    japanese: "県",
    romaji: "ken",
  },
  fu: {
    key: "fu",
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
    region: regions["hokkaido"],
    borders: ["JP-02"],
  },
  {
    code: "JP-02",
    japanese: "青森",
    romaji: "Aomori",
    type: prefectureTypes["ken"],
    region: regions["tohoku"],
    borders: ["JP-01", "JP-03", "JP-05"],
  },
  {
    code: "JP-03",
    japanese: "岩手",
    romaji: "Iwate",
    type: prefectureTypes["ken"],
    region: regions["tohoku"],
    borders: ["JP-02", "JP-03", "JP-04"],
  },
  {
    code: "JP-04",
    japanese: "宮城",
    romaji: "Miyagi",
    type: prefectureTypes["ken"],
    region: regions["tohoku"],
    borders: ["JP-03", "JP-05", "JP-06", "JP-07"],
  },
  {
    code: "JP-05",
    japanese: "秋田",
    romaji: "Akita",
    type: prefectureTypes["ken"],
    region: regions["tohoku"],
    borders: ["JP-02", "JP-03", "JP-04", "JP-06"],
  },
  {
    code: "JP-06",
    japanese: "山形",
    romaji: "Yamagata",
    type: prefectureTypes["ken"],
    region: regions["tohoku"],
    borders: ["JP-04", "JP-05", "JP-07", "JP-15"],
  },
  {
    code: "JP-07",
    japanese: "福島",
    romaji: "Fukushima",
    type: prefectureTypes["ken"],
    region: regions["tohoku"],
    borders: ["JP-04", "JP-06", "JP-08", "JP-09", "JP-10", "JP-15"],
  },
  {
    code: "JP-08",
    japanese: "茨城",
    romaji: "Ibaraki",
    type: prefectureTypes["ken"],
    region: regions["kanto"],
    borders: ["JP-07", "JP-09", "JP-11", "JP-12"],
  },
  {
    code: "JP-09",
    japanese: "栃木",
    romaji: "Tochigi",
    type: prefectureTypes["ken"],
    region: regions["kanto"],
    borders: ["JP-07", "JP-08", "JP-10", "JP-11"],
  },
  {
    code: "JP-10",
    japanese: "群馬",
    romaji: "Gunma",
    type: prefectureTypes["ken"],
    region: regions["kanto"],
    borders: ["JP-07", "JP-09", "JP-11", "JP-15", "JP-20"],
  },
  {
    code: "JP-11",
    japanese: "埼玉",
    romaji: "Saitama",
    type: prefectureTypes["ken"],
    region: regions["kanto"],
    borders: ["JP-08", "JP-09", "JP-10", "JP-12", "JP-13", "JP-19", "JP-20"],
  },
  {
    code: "JP-12",
    japanese: "千葉",
    romaji: "Chiba",
    type: prefectureTypes["ken"],
    region: regions["kanto"],
    borders: ["JP-08", "JP-11", "JP-13"],
  },
  {
    code: "JP-13",
    japanese: "東京",
    romaji: "Tokyo",
    type: prefectureTypes["to"],
    region: regions["kanto"],
    borders: ["JP-11", "JP-12", "JP-14", "JP-19"],
  },
  {
    code: "JP-14",
    japanese: "神奈川",
    romaji: "Kanagawa",
    type: prefectureTypes["ken"],
    region: regions["kanto"],
    borders: ["JP-13", "JP-19", "JP-22"],
  },
  {
    code: "JP-15",
    japanese: "新潟",
    romaji: "Niigata",
    type: prefectureTypes["ken"],
    region: regions["chubu"],
    borders: ["JP-06", "JP-07", "JP-10", "JP-16", "JP-20"],
  },
  {
    code: "JP-16",
    japanese: "富山",
    romaji: "Toyama",
    type: prefectureTypes["ken"],
    region: regions["chubu"],
    borders: ["JP-15", "JP-17", "JP-20", "JP-21"],
  },
  {
    code: "JP-17",
    japanese: "石川",
    romaji: "Ishikawa",
    type: prefectureTypes["ken"],
    region: regions["chubu"],
    borders: ["JP-16", "JP-18", "JP-21"],
  },
  {
    code: "JP-18",
    japanese: "福井",
    romaji: "Fukui",
    type: prefectureTypes["ken"],
    region: regions["chubu"],
    borders: ["JP-17", "JP-21", "JP-25", "JP-26"],
  },
  {
    code: "JP-19",
    japanese: "山梨",
    romaji: "Yamanashi",
    type: prefectureTypes["ken"],
    region: regions["chubu"],
    borders: ["JP-11", "JP-13", "JP-14", "JP-20", "JP-22"],
  },
  {
    code: "JP-20",
    japanese: "長野",
    romaji: "Nagano",
    type: prefectureTypes["ken"],
    region: regions["chubu"],
    borders: [
      "JP-10",
      "JP-11",
      "JP-15",
      "JP-16",
      "JP-19",
      "JP-21",
      "JP-22",
      "JP-23",
    ],
  },
  {
    code: "JP-21",
    japanese: "岐阜",
    romaji: "Gifu",
    type: prefectureTypes["ken"],
    region: regions["chubu"],
    borders: ["JP-16", "JP-17", "JP-18", "JP-20", "JP-23", "JP-24", "JP-25"],
  },
  {
    code: "JP-22",
    japanese: "静岡",
    romaji: "Shizuoka",
    type: prefectureTypes["ken"],
    region: regions["chubu"],
    borders: ["JP-14", "JP-19", "JP-20", "JP-23"],
  },
  {
    code: "JP-23",
    japanese: "愛知",
    romaji: "Aichi",
    type: prefectureTypes["ken"],
    region: regions["chubu"],
    borders: ["JP-20", "JP-21", "JP-22", "JP-24"],
  },
  {
    code: "JP-24",
    japanese: "三重",
    romaji: "Mie",
    type: prefectureTypes["ken"],
    region: regions["kansai"],
    borders: ["JP-21", "JP-23", "JP-25", "JP-26", "JP-29", "JP-30"],
  },
  {
    code: "JP-25",
    japanese: "滋賀",
    romaji: "Shiga",
    type: prefectureTypes["ken"],
    region: regions["kansai"],
    borders: ["JP-18", "JP-21", "JP-24", "JP-26"],
  },
  {
    code: "JP-26",
    japanese: "京都",
    romaji: "Kyoto",
    type: prefectureTypes["fu"],
    region: regions["kansai"],
    borders: ["JP-18", "JP-24", "JP-25", "JP-27", "JP-28", "JP-29"],
  },
  {
    code: "JP-27",
    japanese: "大阪",
    romaji: "Osaka",
    type: prefectureTypes["fu"],
    region: regions["kansai"],
    borders: ["JP-27", "JP-28", "JP-29", "JP-30"],
  },
  {
    code: "JP-28",
    japanese: "兵庫",
    romaji: "Hyogo",
    type: prefectureTypes["ken"],
    region: regions["kansai"],
    borders: ["JP-26", "JP-27", "JP-31", "JP-33"],
  },
  {
    code: "JP-29",
    japanese: "奈良",
    romaji: "Nara",
    type: prefectureTypes["ken"],
    region: regions["kansai"],
    borders: ["JP-24", "JP-26", "JP-27", "JP-30"],
  },
  {
    code: "JP-30",
    japanese: "和歌",
    romaji: "Wakayama",
    type: prefectureTypes["ken"],
    region: regions["kansai"],
    borders: ["JP-24", "JP-27", "JP-29"],
  },
  {
    code: "JP-31",
    japanese: "鳥取",
    romaji: "Tottori",
    type: prefectureTypes["ken"],
    region: regions["chugoku"],
    borders: ["JP-28", "JP-32", "JP-33", "JP-34"],
  },
  {
    code: "JP-32",
    japanese: "島根",
    romaji: "Shimane",
    type: prefectureTypes["ken"],
    region: regions["chugoku"],
    borders: ["JP-31", "JP-34", "JP-35"],
  },
  {
    code: "JP-33",
    japanese: "岡山",
    romaji: "Okayama",
    type: prefectureTypes["ken"],
    region: regions["chugoku"],
    borders: ["JP-28", "JP-31", "JP-34"],
  },
  {
    code: "JP-34",
    japanese: "広島",
    romaji: "Hiroshima",
    type: prefectureTypes["ken"],
    region: regions["chugoku"],
    borders: ["JP-31", "JP-32", "JP-33", "JP-35"],
  },
  {
    code: "JP-35",
    japanese: "山口",
    romaji: "Yamaguchi",
    type: prefectureTypes["ken"],
    region: regions["chugoku"],
    borders: ["JP-32", "JP-34"],
  },
  {
    code: "JP-36",
    japanese: "徳島",
    romaji: "Tokushima",
    type: prefectureTypes["ken"],
    region: regions["shikoku"],
    borders: ["JP-37", "JP-38", "JP-39"],
  },
  {
    code: "JP-37",
    japanese: "香川",
    romaji: "Kagawa",
    type: prefectureTypes["ken"],
    region: regions["shikoku"],
    borders: ["JP-36", "JP-38"],
  },
  {
    code: "JP-38",
    japanese: "愛媛",
    romaji: "Ehime",
    type: prefectureTypes["ken"],
    region: regions["shikoku"],
    borders: ["JP-36", "JP-37", "JP-39"],
  },
  {
    code: "JP-39",
    japanese: "高知",
    romaji: "Kochi",
    type: prefectureTypes["ken"],
    region: regions["shikoku"],
    borders: ["JP-36", "JP-38"],
  },
  {
    code: "JP-40",
    japanese: "福岡",
    romaji: "Fukuoka",
    type: prefectureTypes["ken"],
    region: regions["kyushu"],
    borders: ["JP-41", "JP-43", "JP-44"],
  },
  {
    code: "JP-41",
    japanese: "佐賀",
    romaji: "Saga",
    type: prefectureTypes["ken"],
    region: regions["kyushu"],
    borders: ["JP-40", "JP-42"],
  },
  {
    code: "JP-42",
    japanese: "長崎",
    romaji: "Nagasaki",
    type: prefectureTypes["ken"],
    region: regions["kyushu"],
    borders: ["JP-41"],
  },
  {
    code: "JP-43",
    japanese: "熊本",
    romaji: "Kumamoto",
    type: prefectureTypes["ken"],
    region: regions["kyushu"],
    borders: ["JP-40", "JP-44", "JP-45", "JP-46"],
  },
  {
    code: "JP-44",
    japanese: "大分",
    romaji: "Oita",
    type: prefectureTypes["ken"],
    region: regions["kyushu"],
    borders: ["JP-40", "JP-43", "JP-45"],
  },
  {
    code: "JP-45",
    japanese: "宮崎",
    romaji: "Miyazaki",
    type: prefectureTypes["ken"],
    region: regions["kyushu"],
    borders: ["JP-43", "JP-44", "JP-46"],
  },
  {
    code: "JP-46",
    japanese: "鹿児島",
    romaji: "Kagoshima",
    type: prefectureTypes["ken"],
    region: regions["kyushu"],
    borders: ["JP-43", "JP-45"],
  },
  {
    code: "JP-47",
    japanese: "沖縄県",
    romaji: "Okinawa",
    type: prefectureTypes["ken"],
    region: regions["kyushu"],
    borders: [],
  },
];

export function getAllPrefectures(): Prefecture[] {
  return prefectures;
}

export function getPrefectureByCode(
  code: Prefecture["code"],
): Prefecture | undefined {
  return prefectures.find((prefecture) => prefecture.code === code);
}

export function getPrefectureByField<
  Field extends PrefectureFields,
  Value extends PrefectureQueryValue<Field>,
>(field: Field, value: Value): Prefecture | undefined {
  if (field === "region") {
    return prefectures.find(
      (prefecture) =>
        prefecture.region.key === value ||
        prefecture.region.japanese === value ||
        prefecture.region.romaji === value,
    );
  } else if (field === "type") {
    return prefectures.find(
      (prefecture) =>
        prefecture.type.japanese === value || prefecture.type.romaji === value,
    );
  } else if (field === "borders" && typeof value === "string") {
    return prefectures.find((prefecture) =>
      prefecture.borders.includes(value as PrefectureCode),
    );
  }
  return prefectures.find((prefecture) => prefecture[field] === value);
}

export function getCompletePrefectureByCode(
  code: Prefecture["code"],
): CompletePrefecture | undefined {
  const prefecture = prefectures.find((prefecture) => prefecture.code === code);
  if (prefecture) {
    return {
      ...prefecture,
      borders: prefecture.borders
        .map((borderCode) => getPrefectureByCode(borderCode))
        .filter(
          (p: Prefecture | undefined): p is Prefecture => p !== undefined,
        ),
    };
  }
  return undefined;
}

export function getPrefecturesByRegion(region: string): Prefecture[] {
  return prefectures.filter(
    (prefecture) =>
      prefecture.region.key === region ||
      prefecture.region.japanese === region ||
      prefecture.region.romaji === region,
  );
}

export function getPrefecturesNamesByLanguage(
  language: Language,
): PrefectureNames[] {
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
