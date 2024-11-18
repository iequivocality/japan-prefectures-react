import {
  getAllPrefectures,
  getPrefectureByCode,
  getPrefectureByField,
} from "../src/core";

describe("Japan Prefectures Core", () => {
  test("Test getAllPrefectures", () => {
    expect(getAllPrefectures().length).toBe(47);
  });

  test("Test getPrefectureByField", () => {
    const hokkaido = {
      code: "JP-01",
      japanese: "北海道",
      romaji: "Hokkaidō",
      type: {
        key: "do",
        japanese: "道",
        romaji: "do",
      },
      region: {
        key: "hokkaido",
        japanese: "北海道",
        romaji: "Hokkaidō",
      },
      borders: ["JP-02"],
    };

    expect(getPrefectureByField("code", "JP-01")).toStrictEqual(hokkaido);
    expect(getPrefectureByField("type", "do")).toStrictEqual(hokkaido);
    expect(getPrefectureByField("type", "道")).toStrictEqual(hokkaido);
    expect(getPrefectureByField("region", "Hokkaidō")).toStrictEqual(hokkaido);
    expect(getPrefectureByField("borders", "JP-02")).toStrictEqual(hokkaido);
  });

  test("Test getPrefectureByCode", () => {
    expect(getPrefectureByCode("JP-01")).toBeDefined();
    expect(getPrefectureByCode("JP-01")?.romaji).toStrictEqual("Hokkaidō");

    expect(getPrefectureByCode("JP-13")).toBeDefined();
    expect(getPrefectureByCode("JP-13")?.romaji).toStrictEqual("Tokyo");

    expect(getPrefectureByCode("JP-47")).toBeDefined();
    expect(getPrefectureByCode("JP-47")?.romaji).toStrictEqual("Okinawa");
  });
});
