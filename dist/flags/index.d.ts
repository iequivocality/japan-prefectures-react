import * as React from 'react';
import React__default, { ReactNode } from 'react';

type PrefectureFlagProps = {
    height?: number;
    width?: number;
    className?: string;
};

declare const Aomori: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Hokkaido: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Iwate: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Miyagi: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Akita: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Yamagata: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Fukushima: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Ibaraki: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Tochigi: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Gunma: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Saitama: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Chiba: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Tokyo: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Kanagawa: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Niigata: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Toyama: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Ishikawa: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Fukui: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Yamanashi: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Nagano: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Gifu: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Shizuoka: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Aichi: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Mie: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Shiga: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Kyoto: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Osaka: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Hyogo: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Nara: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Wakayama: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Tottori: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Shimane: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Okayama: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Hiroshima: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Yamaguchi: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Tokushima: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Kagawa: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Ehime: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Kochi: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Fukuoka: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Saga: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Nagasaki: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Kumamoto: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Oita: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Miyazaki: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Kagoshima: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

declare const Okinawa: React__default.ForwardRefExoticComponent<PrefectureFlagProps & React__default.RefAttributes<HTMLImageElement>>;

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

declare function getFlagByPrefectureField<K extends PrefectureFields, V extends PrefectureQueryValue<K>>(key: K, value: V, props: PrefectureFlagProps): React.ReactNode;

export { Aichi, Akita, Aomori, Chiba, Ehime, Fukui, Fukuoka, Fukushima, Gifu, Gunma, Hiroshima, Hokkaido, Hyogo, Ibaraki, Ishikawa, Iwate, Kagawa, Kagoshima, Kanagawa, Kochi, Kumamoto, Kyoto, Mie, Miyagi, Miyazaki, Nagano, Nagasaki, Nara, Niigata, Oita, Okayama, Okinawa, Osaka, Saga, Saitama, Shiga, Shimane, Shizuoka, Tochigi, Tokushima, Tokyo, Tottori, Toyama, Wakayama, Yamagata, Yamaguchi, Yamanashi, getFlagByCode, getFlagByPrefectureField };
