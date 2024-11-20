import * as react from 'react';
import { ReactNode } from 'react';

type PrefectureFlagProps = {
    height?: number;
    width?: number;
    className?: string;
};
type PrefectureFlagComponent = React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Aomori: PrefectureFlagComponent;

declare const Hokkaido: PrefectureFlagComponent;

declare const Iwate: PrefectureFlagComponent;

declare const Miyagi: PrefectureFlagComponent;

declare const Akita: PrefectureFlagComponent;

declare const Yamagata: PrefectureFlagComponent;

declare const Fukushima: PrefectureFlagComponent;

declare const Ibaraki: PrefectureFlagComponent;

declare const Tochigi: PrefectureFlagComponent;

declare const Gunma: PrefectureFlagComponent;

declare const Saitama: PrefectureFlagComponent;

declare const Chiba: PrefectureFlagComponent;

declare const Tokyo: PrefectureFlagComponent;

declare const Kanagawa: PrefectureFlagComponent;

declare const Niigata: PrefectureFlagComponent;

declare const Toyama: PrefectureFlagComponent;

declare const Ishikawa: PrefectureFlagComponent;

declare const Fukui: PrefectureFlagComponent;

declare const Yamanashi: PrefectureFlagComponent;

declare const Nagano: PrefectureFlagComponent;

declare const Gifu: PrefectureFlagComponent;

declare const Shizuoka: PrefectureFlagComponent;

declare const Aichi: PrefectureFlagComponent;

declare const Mie: PrefectureFlagComponent;

declare const Shiga: PrefectureFlagComponent;

declare const Kyoto: PrefectureFlagComponent;

declare const Osaka: PrefectureFlagComponent;

declare const Hyogo: PrefectureFlagComponent;

declare const Nara: PrefectureFlagComponent;

declare const Wakayama: PrefectureFlagComponent;

declare const Tottori: PrefectureFlagComponent;

declare const Shimane: PrefectureFlagComponent;

declare const Okayama: PrefectureFlagComponent;

declare const Hiroshima: PrefectureFlagComponent;

declare const Yamaguchi: PrefectureFlagComponent;

declare const Tokushima: PrefectureFlagComponent;

declare const Kagawa: PrefectureFlagComponent;

declare const Ehime: PrefectureFlagComponent;

declare const Kochi: PrefectureFlagComponent;

declare const Fukuoka: PrefectureFlagComponent;

declare const Saga: PrefectureFlagComponent;

declare const Nagasaki: PrefectureFlagComponent;

declare const Kumamoto: PrefectureFlagComponent;

declare const Oita: PrefectureFlagComponent;

declare const Miyazaki: PrefectureFlagComponent;

declare const Kagoshima: PrefectureFlagComponent;

declare const Okinawa: PrefectureFlagComponent;

type CodeNumbers = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type CodeTensPlace = Exclude<CodeNumbers, "5" | "6" | "7" | "8" | "9">;
type PrefectureType = {
    key: PrefectureTypeKey;
    japanese: string;
    romaji: string;
};
type PrefectureTypeKey = "to" | "do" | "fu" | "ken";
type PrefectureCode = `JP-${Exclude<`${CodeTensPlace}${CodeNumbers}`, "00" | "48" | "49">}`;
type Prefecture = {
    code: PrefectureCode;
    japanese: string;
    romaji: string;
    type: PrefectureType;
    region: Region;
    borders: PrefectureCode[];
};
type PrefectureFields = keyof Prefecture;
type Region = {
    key: RegionKey;
    japanese: string;
    romaji: string;
};
type RegionKey = "hokkaido" | "tohoku" | "kanto" | "chubu" | "kansai" | "chugoku" | "shikoku" | "kyushu";
type PrefectureQueryValue<Key extends PrefectureFields> = Prefecture[Key] extends string ? Prefecture[Key] : Prefecture[Key] extends Region ? Region[keyof Region] : Prefecture[Key] extends PrefectureType ? Prefecture[keyof Prefecture] : Prefecture[Key] extends PrefectureCode[] ? PrefectureCode : string;

declare const getFlagByCode: (code: Prefecture["code"], props: PrefectureFlagProps) => ReactNode | undefined;

declare function getFlagByPrefectureField<K extends PrefectureFields, V extends PrefectureQueryValue<K>>(key: K, value: V, props: PrefectureFlagProps): react.ReactNode;

export { Aichi, Akita, Aomori, Chiba, Ehime, Fukui, Fukuoka, Fukushima, Gifu, Gunma, Hiroshima, Hokkaido, Hyogo, Ibaraki, Ishikawa, Iwate, Kagawa, Kagoshima, Kanagawa, Kochi, Kumamoto, Kyoto, Mie, Miyagi, Miyazaki, Nagano, Nagasaki, Nara, Niigata, Oita, Okayama, Okinawa, Osaka, Saga, Saitama, Shiga, Shimane, Shizuoka, Tochigi, Tokushima, Tokyo, Tottori, Toyama, Wakayama, Yamagata, Yamaguchi, Yamanashi, getFlagByCode, getFlagByPrefectureField };
