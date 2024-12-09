import React from "react";
import { getAllPrefectures, getFlagByCode } from "japan-prefectures-react";

export const Flags = () => {
  const prefectures = getAllPrefectures();
  return (
    <>
      <section className="flex justify-center items-center gap-x-4"></section>
      <h2 className="text-center text-2xl font-bold mb-4">
        Prefectures of Japan
      </h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {prefectures.map((p) => {
          const prefectureFlag = getFlagByCode(p.code, { width: 100 });
          return (
            <div
              key={p.code}
              className="flex flex-col justify-center items-center h-40"
            >
              <div className="w-[100px] h-[67px] overflow-hidden flex justify-center items-center my-2">
                {prefectureFlag}
              </div>
              <span className="capitalize font-bold">{p.code}</span>
              <span className="capitalize text-sm">
                {p.romaji} ({p.japanese}
                {p.code === "JP-01" ? "" : p.type.japanese})
              </span>
            </div>
          );
        })}
      </section>
    </>
  );
};
