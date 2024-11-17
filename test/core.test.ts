import { getAllPrefectures, getPrefectureByCode, getPrefectureByKey } from "../src/core";

describe("Japan Prefectures Core", () => {
  test("Test getAllPrefectures", () => {
    expect(getAllPrefectures().length).toBe(47);
  });

  test("Test getPrefectureByKey", () => {
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

    expect(getPrefectureByKey("code", "JP-01")).toStrictEqual(hokkaido);
    expect(getPrefectureByKey("type", "do")).toStrictEqual(hokkaido);
    expect(getPrefectureByKey("type", "道")).toStrictEqual(hokkaido);
    expect(getPrefectureByKey("borders", "JP-02")).toStrictEqual(hokkaido);
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
