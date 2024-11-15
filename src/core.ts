import { Prefecture } from "./types";

const prefectureData: Prefecture[] = [
  {
    code: "JP-01",
    japanese: "Hokkaido",
    romaji: "Hokkaidō",
    type: "Do",
  },
  {
    code: "JP-02",
    japanese: "Aomori",
    romaji: "Aomori",
    type: "Ken",
  },
  {
    code: "JP-03",
    japanese: "Iwate",
    romaji: "Iwate",
    type: "Ken",
  },
  {
    code: "JP-04",
    japanese: "Miyagi",
    romaji: "Miyagi",
    type: "Ken",
  },
  {
    code: "JP-05",
    japanese: "Akita",
    romaji: "Akita",
    type: "Ken",
  },
  {
    code: "JP-06",
    japanese: "Yamagata",
    romaji: "Yamagata",
    type: "Ken",
  },
  {
    code: "JP-07",
    japanese: "Fukushima",
    romaji: "Fukushima",
    type: "Ken",
  },
  {
    code: "JP-08",
    japanese: "Ibaraki",
    romaji: "Ibaraki",
    type: "Ken",
  },
  {
    code: "JP-09",
    japanese: "Tochigi",
    romaji: "Tochigi",
    type: "Ken",
  },
  {
    code: "JP-10",
    japanese: "Gunma",
    romaji: "Gunma",
    type: "Ken",
  },
  {
    code: "JP-11",
    japanese: "Saitama",
    romaji: "Saitama",
    type: "Ken",
  },
  {
    code: "JP-12",
    japanese: "Chiba",
    romaji: "Chiba",
    type: "Ken",
  },
  {
    code: "JP-13",
    japanese: "Tokyo",
    romaji: "Tokyo",
    type: "To",
  },
  {
    code: "JP-14",
    japanese: "Kanagawa",
    romaji: "Kanagawa",
    type: "Ken",
  },
  {
    code: "JP-15",
    japanese: "Niigata",
    romaji: "Niigata",
    type: "Ken",
  },
  {
    code: "JP-16",
    japanese: "Toyama",
    romaji: "Toyama",
    type: "Ken",
  },
  {
    code: "JP-17",
    japanese: "Ishikawa",
    romaji: "Ishikawa",
    type: "Ken",
  },
  {
    code: "JP-18",
    japanese: "Fukui",
    romaji: "Fukui",
    type: "Ken",
  },
  {
    code: "JP-19",
    japanese: "Yamanashi",
    romaji: "Yamanashi",
    type: "Ken",
  },
  {
    code: "JP-20",
    japanese: "Nagano",
    romaji: "Nagano",
    type: "Ken",
  },
  {
    code: "JP-21",
    japanese: "Gifu",
    romaji: "Gifu",
    type: "Ken",
  },
  {
    code: "JP-22",
    japanese: "Shizuoka",
    romaji: "Shizuoka",
    type: "Ken",
  },
  {
    code: "JP-23",
    japanese: "Aichi",
    romaji: "Aichi",
    type: "Ken",
  },
  {
    code: "JP-24",
    japanese: "Mie",
    romaji: "Mie",
    type: "Ken",
  },
  {
    code: "JP-25",
    japanese: "Shiga",
    romaji: "Shiga",
    type: "Ken",
  },
  {
    code: "JP-26",
    japanese: "Kyoto",
    romaji: "Kyoto",
    type: "Fu",
  },  
  {
    code: "JP-27",
    japanese: "Osaka",
    romaji: "Osaka",
    type: "Fu",
  },
  {
    code: "JP-28",
    japanese: "Hyogo",
    romaji: "Hyogo",
    type: "Ken",
  },
  {
    code: "JP-29",
    japanese: "Nara",
    romaji: "Nara",
    type: "Ken",
  },
  {
    code: "JP-30",
    japanese: "Wakayama",
    romaji: "Wakayama",
    type: "Ken",
  },
  {
    code: "JP-31",
    japanese: "Tottori",
    romaji: "Tottori",
    type: "Ken",
  },
  {
    code: "JP-32",
    japanese: "Shimane",
    romaji: "Shimane",
    type: "Ken",
  },
  {
    code: "JP-33",
    japanese: "Okayama",
    romaji: "Okayama",
    type: "Ken",
  },
  {
    code: "JP-34",
    japanese: "Hiroshima",
    romaji: "Hiroshima",
    type: "Ken",
  },
  {
    code: "JP-35",
    japanese: "Yamaguchi",
    romaji: "Yamaguchi",
    type: "Ken",
  },
  {
    code: "JP-36",
    japanese: "Tokushima",
    romaji: "Tokushima",
    type: "Ken",
  },
  {
    code: "JP-37",
    japanese: "Kagawa",
    romaji: "Kagawa",
    type: "Ken",
  },
  {
    code: "JP-38",
    japanese: "Ehime",
    romaji: "Ehime",
    type: "Ken",
  },
  {
    code: "JP-39",
    japanese: "Kochi",
    romaji: "Kochi",
    type: "Ken",
  },
  {
    code: "JP-40",
    japanese: "Fukuoka",
    romaji: "Fukuoka",
    type: "Ken",
  },
  {
    code: "JP-41",
    japanese: "Saga",
    romaji: "Saga",
    type: "Ken",
  },
  {
    code: "JP-42",
    japanese: "Nagasaki",
    romaji: "Nagasaki",
    type: "Ken",
  },
  {
    code: "JP-43",
    japanese: "Kumamoto",
    romaji: "Kumamoto",
    type: "Ken",
  },
  {
    code: "JP-44",
    japanese: "Oita",
    romaji: "Oita",
    type: "Ken",
  },
  {
    code: "JP-45",
    japanese: "Miyazaki",
    romaji: "Miyazaki",
    type: "Ken",
  },
  {
    code: "JP-46",
    japanese: "Kagoshima",
    romaji: "Kagoshima",
    type: "Ken",
  },
  {
    code: "JP-47",
    japanese: "Okinawa",
    romaji: "Okinawa",
    type: "Ken",
  },
];

export function getAllPrefectures() {
  return prefectureData;
}

export function getPrefectureByCode(code: Prefecture["code"]) {
  return prefectureData.find((prefecture) => prefecture.code === code);
}
