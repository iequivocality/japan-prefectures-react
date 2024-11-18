import React, { ReactNode } from 'react';

type PrefectureFlagProps = {
    height?: number;
    width?: number;
    className?: string;
};

declare const Aomori: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Hokkaido: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Iwate: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Miyagi: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Akita: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Yamagata: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Fukushima: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Ibaraki: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Tochigi: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Gunma: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Saitama: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Chiba: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Tokyo: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Kanagawa: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Niigata: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Toyama: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Ishikawa: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Fukui: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Yamanashi: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Nagano: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Gifu: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Shizuoka: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Aichi: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Mie: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Shiga: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Kyoto: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Osaka: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Hyogo: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Nara: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Wakayama: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Tottori: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Shimane: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Okayama: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Hiroshima: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Yamaguchi: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Tokushima: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Kagawa: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Ehime: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Kochi: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Fukuoka: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Saga: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Nagasaki: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Kumamoto: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Oita: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Miyazaki: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Kagoshima: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

declare const Okinawa: React.ForwardRefExoticComponent<PrefectureFlagProps & React.RefAttributes<HTMLImageElement>>;

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
type Region = {
    key: RegionKey;
    japanese: string;
    romaji: string;
};
type RegionKey = "hokkaido" | "tohoku" | "kanto" | "chubu" | "kansai" | "chugoku" | "shikoku" | "kyushu";

declare const getFlagByCode: (code: Prefecture["code"], props: PrefectureFlagProps) => ReactNode | undefined;

export { Aichi, Akita, Aomori, Chiba, Ehime, Fukui, Fukuoka, Fukushima, Gifu, Gunma, Hiroshima, Hokkaido, Hyogo, Ibaraki, Ishikawa, Iwate, Kagawa, Kagoshima, Kanagawa, Kochi, Kumamoto, Kyoto, Mie, Miyagi, Miyazaki, Nagano, Nagasaki, Nara, Niigata, Oita, Okayama, Okinawa, Osaka, Saga, Saitama, Shiga, Shimane, Shizuoka, Tochigi, Tokushima, Tokyo, Tottori, Toyama, Wakayama, Yamagata, Yamaguchi, Yamanashi, getFlagByCode };
