import { ReactNode } from "react";
import { Prefecture, PrefectureFlagProps } from "../types";
import Aomori from "./Aomori";
import Hokkaido from "./Hokkaido";
import Iwate from "./Iwate";
import Miyagi from "./Miyagi";
import Akita from "./Akita";
import Yamagata from "./Yamagata";
import Fukushima from "./Fukushima";
import Ibaraki from "./Ibaraki";
import Tochigi from "./Tochigi";
import Gunma from "./Gunma";
import Saitama from "./Saitama";
import Chiba from "./Chiba";
import Tokyo from "./Tokyo";
import Kanagawa from "./Kanagawa";
import Niigata from "./Niigata";
import Toyama from "./Toyama";
import Ishikawa from "./Ishikawa";
import Fukui from "./Fukui";
import Yamanashi from "./Yamanashi";
import Nagano from "./Nagano";
import Gifu from "./Gifu";
import Shizuoka from "./Shizuoka";
import Aichi from "./Aichi";
import Mie from "./Mie";
import Shiga from "./Shiga";
import Kyoto from "./Kyoto";
import Osaka from "./Osaka";
import Hyogo from "./Hyogo";
import Nara from "./Nara";
import Wakayama from "./Wakayama";
import Tottori from "./Tottori";
import Shimane from "./Shimane";
import Okayama from "./Okayama";
import Hiroshima from "./Hiroshima";
import Yamaguchi from "./Yamaguchi";
import Tokushima from "./Tokushima";
import Kagawa from "./Kagawa";
import Ehime from "./Ehime";
import Kochi from "./Kochi";
import Fukuoka from "./Fukuoka";
import Saga from "./Saga";
import Nagasaki from "./Nagasaki";
import Kumamoto from "./Kumamoto";
import Oita from "./Oita";
import Miyazaki from "./Miyazaki";
import Kagoshima from "./Kagoshima";
import Okinawa from "./Okinawa";

const getFlagByCode: (
  code: Prefecture["code"],
  props: PrefectureFlagProps,
) => ReactNode | undefined = (
  code: Prefecture["code"],
  props: PrefectureFlagProps,
) => {
  if (code === "JP-01") return <Hokkaido {...props} />;
  if (code === "JP-02") return <Aomori {...props} />;
  if (code === "JP-03") return <Iwate {...props} />;
  if (code === "JP-04") return <Miyagi {...props} />;
  if (code === "JP-05") return <Akita {...props} />;
  if (code === "JP-06") return <Yamagata {...props} />;
  if (code === "JP-07") return <Fukushima {...props} />;
  if (code === "JP-08") return <Ibaraki {...props} />;
  if (code === "JP-09") return <Tochigi {...props} />;
  if (code === "JP-10") return <Gunma {...props} />;
  if (code === "JP-11") return <Saitama {...props} />;
  if (code === "JP-12") return <Chiba {...props} />;
  if (code === "JP-13") return <Tokyo {...props} />;
  if (code === "JP-14") return <Kanagawa {...props} />;
  if (code === "JP-15") return <Niigata {...props} />;
  if (code === "JP-16") return <Toyama {...props} />;
  if (code === "JP-17") return <Ishikawa {...props} />;
  if (code === "JP-18") return <Fukui {...props} />;
  if (code === "JP-19") return <Yamanashi {...props} />;
  if (code === "JP-20") return <Nagano {...props} />;
  if (code === "JP-21") return <Gifu {...props} />;
  if (code === "JP-22") return <Shizuoka {...props} />;
  if (code === "JP-23") return <Aichi {...props} />;
  if (code === "JP-24") return <Mie {...props} />;
  if (code === "JP-25") return <Shiga {...props} />;
  if (code === "JP-26") return <Kyoto {...props} />;
  if (code === "JP-27") return <Osaka {...props} />;
  if (code === "JP-28") return <Hyogo {...props} />;
  if (code === "JP-29") return <Nara {...props} />;
  if (code === "JP-30") return <Wakayama {...props} />;
  if (code === "JP-31") return <Tottori {...props} />;
  if (code === "JP-32") return <Shimane {...props} />;
  if (code === "JP-33") return <Okayama {...props} />;
  if (code === "JP-34") return <Hiroshima {...props} />;
  if (code === "JP-35") return <Yamaguchi {...props} />;
  if (code === "JP-36") return <Tokushima {...props} />;
  if (code === "JP-37") return <Kagawa {...props} />;
  if (code === "JP-38") return <Ehime {...props} />;
  if (code === "JP-39") return <Kochi {...props} />;
  if (code === "JP-40") return <Fukuoka {...props} />;
  if (code === "JP-41") return <Saga {...props} />;
  if (code === "JP-42") return <Nagasaki {...props} />;
  if (code === "JP-43") return <Kumamoto {...props} />;
  if (code === "JP-44") return <Oita {...props} />;
  if (code === "JP-45") return <Miyazaki {...props} />;
  if (code === "JP-46") return <Kagoshima {...props} />;
  if (code === "JP-47") return <Okinawa {...props} />;

  return undefined;
};

export default getFlagByCode;
