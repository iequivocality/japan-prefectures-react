# japan-prefectures-react

Utility for Japanese prefectures, also includes React components for their flags. Typescript support included.

> [!WARNING]  
> This is still a work in progress, please do not use in production!
> Breaking changes are expected.

## Requirements

- React 18 and above

## Installation

```bash
npm install git+https://github.com/iequivocality/japan-prefectures-react.git --save
yarn add git+https://github.com/iequivocality/japan-prefectures-react.git
pnpm add git+https://github.com/iequivocality/japan-prefectures-react.git
```

## Demo

[**Demo**](https://japan-prefectures-react.vercel.app/)

## Core

### getAllPrefectures()

Returns an array of all prefectures.

@returns {Prefecture[]}

```ts
import { getAllPrefectures } from "japan-prefectures-react";

const prefectures = getAllPrefectures();
console.log(prefectures); // [ Prefecture, Prefecture, Prefecture, ... , Prefecture ]
console.log(prefectures.length); // 47
```

### getAllPrefecturesWithSuffix()

Returns an array of all prefectures with their suffixes.

@returns {Prefecture[]}

```ts
import { getAllPrefecturesWithSuffix } from "japan-prefectures-react";

const prefectures = getAllPrefecturesWithSuffix();
console.log(prefectures); // [ Prefecture, Prefecture, Prefecture, ...
console.log(prefectures[0].japanese); // "北海道"
console.log(prefectures[1].japanese); // "青森県"
console.log(prefectures[13].japanese); // "東京都"
console.log(prefectures[26].japanese); // "京都府"
console.log(prefectures[27].japanese); // "大阪府"  

### PrefectureCodes

A record of Geocodes for each prefecture.

```ts
  console.log(PrefectureCodes.Hokkaido); // JP-01
  console.log(PrefectureCodes.Aomori); // JP-02
  console.log(PrefectureCodes.Iwate); // JP-03
  . . .
  console.log(PrefectureCodes.Tokyo); // JP-13
  . . .
  console.log(PrefectureCodes.Kyoto); // JP-26
  console.log(PrefectureCodes.Osaka); // JP-27
  . . .
  console.log(PrefectureCodes.Okinawa); // JP-47

```

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

### getPrefectureByCode(code: Prefecture["code"])

Returns a prefecture by its ISO 3166 or Geocode.

@returns Prefecture or undefined if any value other than Geocodes below is passed

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
For fields that are objects (type, region), their fields (key, japanese and romaji) are used to match values. For the borders array field, values
must be a PrefectureCode and if found on the array, the prefecture is returned.

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

### getAllRegions()

Returns an array of regions.

@returns {Region[]}

### getAllRegionsWithPrefectures()

Returns an array of regions with their prefectures.

@returns {RegionWithPrefectures[]}

## Flags

### getFlagByCode(code: Prefecture["code"], props: PrefectureFlagProps)

Returns a prefecture flag by its ISO 3166 or Geocode. You can refer to getPrefectureByCode for the list of Geocodes.

@returns PrefectureFlagComponent or undefined if any value other than Geocodes below is passed

### getFlagByPrefectureField(key: PrefectureFields, value: PrefectureQueryValue<PrefectureFields>, props: PrefectureFlagProps)

Returns a prefecture by its field and value. For fields with type string (code, japanese, romaji), values must be a exact match.
For fields that are objects (type, region), their fields (key, japanese and romaji) are used to match values. For the borders array field,
values must be a PrefectureCode and if found on the array, the prefecture is returned. You can refer to getPrefectureByField for the list of fields.

@returns PrefectureFlagComponent or undefined if no field with specified value is found based on defined field.

### Prefecture Flag Components (PrefectureFlagComponent)

You can also directly import the flags of each prefecture. Refs to their image elements are also supported.
Aspect ratios are maintained. All flags are using type PrefectureFlagProps as props.

```tsx

type PrefectureFlagProps = {
    height?: number;
    width?: number;
    className?: string;
};

```

```tsx
import {
  Aichi,
  Akita,
  Aomori,
  Chiba,
  Ehime,
  Fukui,
  Fukuoka,
  Fukushima,
  Gifu,
  Gunma,
  Hiroshima,
  Hokkaido,
  Hyogo,
  Ibaraki,
  Ishikawa,
  Iwate,
  Kagawa,
  Kagoshima,
  Kanagawa,
  Kochi,
  Kumamoto,
  Kyoto,
  Mie,
  Miyagi,
  Miyazaki,
  Nagano,
  Nagasaki,
  Nara,
  Niigata,
  Oita,
  Okayama,
  Okinawa,
  Osaka,
  Saga,
  Saitama,
  Shiga,
  Shimane,
  Shizuoka,
  Tochigi,
  Tokushima,
  Tokyo,
  Tottori,
  Toyama,
  Wakayama,
  Yamagata,
  Yamaguchi,
  Yamanashi,
} from "japan-prefectures-react";
```

## Maps

### Japan

A map of Japan in SVG format. Refs to the main SVG element are also supported.

#### Props

##### className - string | undefined

Assigned class name to the main SVG component.

##### mapType - "full" | "dense" | "deform" | undefined

- *full* - Shows the full map of Japan with Okinawa in its relative position to Japan.
- *dense* - Okinawa is displayed as an inset on the lower right corner of the map.
- *deform* - All prefectures are displayed in a deformed map, with less detail

##### prefectureProps?: PrefectureMapProps

Contains properties and callbacks for each prefecture path element. This is applied to all prefecture elements in the SVG. Use prefectureProps.pathProps for further customization of the path element assigned to all prefectures.

##### prefectureClassNames?: PartialRecord<PrefectureCode, string>

Assigns custom class names to each prefecture's path element.

##### prefectureOutlineStyle?

Assigns custom stroke color and width to the prefecture outlines.

```tsx
{
  strokeColor?: string;
  strokeWidth?: string;
}
```

##### dividerStrokeStyle?: 

Assigns custom stroke color and width to the divider, which separates inset of Okinawa from the rest of Japan and are only visible when mapType is "dense".

```tsx
{
  strokeColor?: string;
  strokeWidth?: string;
}
```

```tsx

interface PrefectureMapProps {
    className?: string;
    onMouseEnter?: (prefecture: PrefectureCode, event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
    onMouseLeave?: (prefecture: PrefectureCode, event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
    onClick?: (prefecture: PrefectureCode, event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
    onMouseOver?: (prefecture: PrefectureCode, event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
    pathProps?: SVGProps<SVGPathElement>;
}

```

## Types Reference

For Typescript users, feel free to peruse the type declarations in the following files.

- [Core Functions](https://github.com/iequivocality/japan-prefectures-react/blob/main/dist/core.d.ts)
- [Core Types](https://github.com/iequivocality/japan-prefectures-react/blob/main/dist/types/index.d.ts)
- [Flags](https://github.com/iequivocality/japan-prefectures-react/blob/main/dist/flags/index.d.ts)
- [Maps](https://github.com/iequivocality/japan-prefectures-react/blob/main/dist/maps/index.d.ts)

## Future Plans

- Tree shaking support so that React is not required for the core functionality.

## Attribution

- Prefectures flags are from [Wikimedia Commons](https://commons.wikimedia.org/)
- Map of Japan SVG data is from [ka215/svg-japan](https://github.com/ka215/svg-japan)

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.
