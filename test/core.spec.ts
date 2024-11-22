import {
  getAllPrefectures,
  getCompletePrefectureByCode,
  getPrefectureByCode,
  getPrefectureByField,
  getAllRegions,
  getAllRegionsWithPrefectures
} from "../src/core";

describe("Japan Prefectures Core", () => {
  test("Test getAllPrefectures", () => {
    expect(getAllPrefectures().length).toBe(47);
  });

  test("Test getPrefectureByCode", () => {
    expect(getPrefectureByCode("JP-01")).toBeDefined();
    expect(getPrefectureByCode("JP-01")?.romaji).toStrictEqual("Hokkaidō");

    expect(getPrefectureByCode("JP-13")).toBeDefined();
    expect(getPrefectureByCode("JP-13")?.romaji).toStrictEqual("Tokyo");

    expect(getPrefectureByCode("JP-47")).toBeDefined();
    expect(getPrefectureByCode("JP-47")?.romaji).toStrictEqual("Okinawa");

    // @ts-expect-error Testing invalid input
    expect(getPrefectureByCode(null)).toBeUndefined();
    // @ts-expect-error Testing invalid input
    expect(getPrefectureByCode("")?.romaji).toBeUndefined();
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

  test("Test getCompletePrefectureByCode", () => {
    const hokkaido = getCompletePrefectureByCode("JP-01");
    expect(hokkaido?.borders).toHaveLength(1);
    expect(hokkaido?.borders[0].code).toStrictEqual("JP-02");
    expect(hokkaido?.borders[0].japanese).toStrictEqual("青森");
    expect(hokkaido?.borders[0].romaji).toStrictEqual("Aomori");
    expect(hokkaido?.borders[0].type.key).toStrictEqual("ken");
  });

  test("Test getPrefecturesByRegion", () => {

  });

  test("Test getPrefecturesNamesByLanguage", () => {
    // TODO
  });

  test("Test getPrefecturesByType", () => {
    // TODO
  });

  test("Test getAllRegions", () => {
    // TODO

    const regions = getAllRegions();
    expect(regions).toHaveLength(8);

    expect(regions[0].romaji).toBe("Hokkaidō");
    expect(regions[1].romaji).toBe("Tōhoku");
    expect(regions[2].romaji).toBe("Kantō");
    expect(regions[3].romaji).toBe("Chūbu");
    expect(regions[4].romaji).toBe("Kansai");
    expect(regions[5].romaji).toBe("Chūgoku");
    expect(regions[6].romaji).toBe("Shikoku");
    expect(regions[7].romaji).toBe("Kyūshū");

    expect(regions[0].key).toBe("hokkaido");
    expect(regions[1].key).toBe("tohoku");
    expect(regions[2].key).toBe("kanto");
    expect(regions[3].key).toBe("chubu");
    expect(regions[4].key).toBe("kansai");
    expect(regions[5].key).toBe("chugoku");
    expect(regions[6].key).toBe("shikoku");
    expect(regions[7].key).toBe("kyushu");

    expect(regions[0].japanese).toBe("北海道");
    expect(regions[1].japanese).toBe("東北");
    expect(regions[2].japanese).toBe("関東");
    expect(regions[3].japanese).toBe("中部");
    expect(regions[4].japanese).toBe("関西");
    expect(regions[5].japanese).toBe("中国");
    expect(regions[6].japanese).toBe("四国");
    expect(regions[7].japanese).toBe("九州");
  });

  test("Test getAllRegionsWithPrefectures", () => {
    const regions = getAllRegionsWithPrefectures();
    expect(regions).toHaveLength(8);

    expect(regions[0].prefectures).toHaveLength(1);
    expect(regions[1].prefectures).toHaveLength(6);
    expect(regions[2].prefectures).toHaveLength(7);
    expect(regions[3].prefectures).toHaveLength(9);
    expect(regions[4].prefectures).toHaveLength(7);
    expect(regions[5].prefectures).toHaveLength(5);
    expect(regions[6].prefectures).toHaveLength(4);
    expect(regions[7].prefectures).toHaveLength(8);
  });
});
