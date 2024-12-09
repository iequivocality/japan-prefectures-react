import React from "react";
import {
  getAllPrefectures,
  getAllPrefecturesWithSuffix,
} from "japan-prefectures-react";
import { PrefectureSelect } from "../components/PrefectureSelect";

export const Home = () => {
  const prefectures = getAllPrefectures();
  const prefecturesWithSuffix = getAllPrefecturesWithSuffix();

  return (
    <>
      <section className="flex items-center flex-col h-1/2 w-full gap-y-8 p-2">
        <h1 className="text-center text-2xl font-bold mb-4">
          japan-prefectures-react
        </h1>
        <p className="md:max-w-80 text-center">
          Utility for Japanese prefectures, also includes React components for
          their flags. Typescript support included.
        </p>
      </section>
      <section className="flex items-center flex-col h-1/2 w-full gap-y-8 p-2">
        <h2 className="text-xl font-bold">Usage</h2>
        <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col rounded-md">
          <div className="flex items-center gap-y-4 h-32">
            <h3 className="flex flex-1 items-center justify-center font-semibold">
              Normal Select with Suffix
            </h3>
            <div className="flex-1 text-black flex justify-center items-center flex-col gap-y-3">
              <select name="prefecture" className="w-40 rounded-sm">
                {prefectures.map((pref) => (
                  <option key={pref.code} value={pref.code}>
                    {pref.japanese}
                  </option>
                ))}
              </select>
              <select name="prefecture" className="w-40 rounded-sm">
                {prefectures.map((pref) => (
                  <option key={pref.code} value={pref.code}>
                    {pref.romaji}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center gap-y-4 h-32">
            <h3 className="flex flex-1 items-center justify-center font-semibold">
              Normal Select without Suffix
            </h3>
            <div className="flex-1 text-black flex justify-center items-center flex-col gap-y-3">
              <select name="prefecture" className="w-40 rounded-sm">
                {prefecturesWithSuffix.map((pref) => (
                  <option key={pref.code} value={pref.code}>
                    {pref.japanese}
                  </option>
                ))}
              </select>
              <select name="prefecture" className="w-40 rounded-sm">
                {prefectures.map((pref) => (
                  <option key={pref.code} value={pref.code}>
                    {pref.romaji}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center gap-y-4 h-32">
            <h3 className="flex flex-1 items-center justify-center font-semibold">
              Shadcn Combobox
            </h3>
            <div className="flex-1 flex justify-center items-center flex-col gap-y-3">
              <PrefectureSelect language="jp" />
              <PrefectureSelect language="en" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
