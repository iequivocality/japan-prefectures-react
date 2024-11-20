# japan-prefectures-react

Utility for Japanese prefectures, also includes React components for their flags. Typescript support included.

> [!WARNING]  
> This is still a work in progress, please do not use in production!
> Breaking changes are expected.

## Requirements

- React 18 and above

## Installation

```bash
npm install japan-prefectures-react --save
yarn add japan-prefectures-react
pnpm add japan-prefectures-react
```

## Usage

### getAllPrefectures()

Returns an array of all prefectures
@returns {Prefecture[]}

```ts
import { getAllPrefectures } from "japan-prefectures-react";

const prefectures = getAllPrefectures();
console.log(prefectures); // [ Prefecture, Prefecture, Prefecture, ... , Prefecture ]
console.log(prefectures.length); // 47
```

### getPrefectureByCode(code: Prefecture["code"])

Returns a prefecture by its ISO 3166 or Geocode.
@returns Prefecture or undefined if any value other than Geocodes below is passed

| Geocode | Prefecture |
| ------- | ---------- |
| JP-01   | Hokkaido   |
| JP-02   | Aomori     |
| JP-03   | Iwate      |
| JP-04   | Miyagi     |
| JP-05   | Akita      |
| JP-06   | Yamagata   |
| JP-07   | Fukushima  |
| JP-08   | Ibaraki    |
| JP-09   | Tochigi    |
| JP-10   | Gunma      |
| JP-11   | Saitama    |
| JP-12   | Chiba      |
| JP-13   | Tokyo      |
| JP-14   | Kanagawa   |
| JP-15   | Niigata    |
| JP-16   | Toyama     |
| JP-17   | Ishikawa   |
| JP-18   | Fukui      |
| JP-19   | Yamanashi  |
| JP-20   | Nagano     |
| JP-21   | Gifu       |
| JP-22   | Shizuoka   |
| JP-23   | Aichi      |
| JP-24   | Mie        |
| JP-25   | Shiga      |
| JP-26   | Kyoto      |
| JP-27   | Osaka      |
| JP-28   | Hyogo      |
| JP-29   | Nara       |
| JP-30   | Wakayama   |
| JP-31   | Tottori    |
| JP-32   | Shimane    |
| JP-33   | Okayama    |
| JP-34   | Hiroshima  |
| JP-35   | Yamaguchi  |
| JP-36   | Tokushima  |
| JP-37   | Kagawa     |
| JP-38   | Ehime      |
| JP-39   | Kochi      |
| JP-40   | Fukuoka    |
| JP-41   | Saga       |
| JP-42   | Nagasaki   |
| JP-43   | Kumamoto   |
| JP-44   | Oita       |
| JP-45   | Miyazaki   |
| JP-46   | Kagoshima  |
| JP-47   | Okinawa    |

```ts
import { getPrefectureByCode } from "japan-prefectures-react";

console.log(getPrefectureByCode("JP-13").code); // JP-13
console.log(getPrefectureByCode("JP-13").japanese); // 東京
console.log(getPrefectureByCode("JP-13").romaji); // Tokyo
console.log(getPrefectureByCode("JP-13").type); // { key: "to", japanese: "都", romaji: "to" }
console.log(getPrefectureByCode("JP-13").region); // { key: "kanto", japanese: "関東", romaji: "Kantō", }
console.log(getPrefectureByCode("JP-13").borders); // [ 'JP-11', 'JP-12', 'JP-14', 'JP-19' ]

console.log(getPrefectureByCode("JP-99")); // undefined
console.log(getPrefectureByCode(true)); // undefined
console.log(getPrefectureByCode("anystring")); // undefined
console.log(getPrefectureByCode(13)); // undefined
```

### getPrefectureByField(key: PrefectureFields, value: PrefectureQueryValue<PrefectureFields>)

Returns a prefecture by its field and value. For fields with type string (code, japanese, romaji), values must be a exact match.
For fields that are objects (type, region), their fields (key, japanese and romaji) are used to match values. For the borders array field, values must be a PrefectureCode and if found on the array, the prefecture is returned.

@returns Prefecture or undefined if no field with specified value is found based on defined field

| PrefectureFields | PrefectureQueryValue<PrefectureFields> |
| ---------------- | -------------------------------------- |
| code             | PrefectureCode                         |
| japanese         | string                                 |
| romaji           | string                                 |
| type             | PrefectureType (key, japanese, romaji) |
| region           | Region (key, japanese, romaji)         |
| borders          | PrefectureCode[]                       |

```ts
import { getPrefectureByField } from "japan-prefectures-react";

console.log(getPrefectureByField("japanese", "北海道")); // { code: 'JP-01', japanese: "北海道", romaji: "Hokkaidō", ...
console.log(getPrefectureByField("code", "JP-01")); // { code: 'JP-01', japanese: "北海道", romaji: "Hokkaidō", ...
console.log(getPrefectureByField("type", "do")); // { code: 'JP-01', japanese: "北海道", romaji: "Hokkaidō", ...
console.log(getPrefectureByField("type", "道")); // { code: 'JP-01', japanese: "北海道", romaji: "Hokkaidō", ...
console.log(getPrefectureByField("region", "Hokkaidō")); // { code: 'JP-01', japanese: "北海道", romaji: "Hokkaidō", ...
console.log(getPrefectureByField("borders", "JP-02")); // { code: 'JP-01', japanese: "北海道", romaji: "Hokkaidō", ...

console.log(getPrefectureByField("japanese", "")); // undefined
```

### getCompletePrefectureByCode(code: Prefecture["code"])

Same as getPrefectureByCode, but borders contains Prefecture[] for borders instead of PrefectureCode[].
@returns Prefecture or undefined if any value other than Geocodes below is passed

### getPrefecturesByRegion(region: string)

Returns an array of prefectures by region. Region can be Romaji, Japanese or the following:

"hokkaido" | "tohoku" | "kanto" | "chubu" | "kansai" | "chugoku" | "shikoku" | "kyushu"

@returns {Prefecture[]}

### getPrefecturesNamesByLanguage(language: Language)

Returns an array of prefecture names by Language, where Language can be "japanese" or "romaji".
The type and region of the prefectures by language are included in the returned array as well.
@returns {PrefectureNames[]}

### getPrefecturesByType(type: PrefectureTypeKey)

Returns an array of prefectures by type. Type can be Romaji, Japanese or the following:

"to" | "do" | "fu" | "ken"

@returns {Prefecture[]}

### getAllRegions({ withPrefectures: boolean })

Returns an array of regions. If withPrefectures is true, the regions will also include the list of their prefectures.

@returns {Region[] | RegionWithPrefectures[]}

## Attribution

- Prefectures flags are from [Wikimedia Commons](https://commons.wikimedia.org/)
- Map of Japan is from [ka215/svg-japan](https://github.com/ka215/svg-japan)

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.
