import React, { useState } from "react";
import {
  getAllPrefectures,
  getFlagByCode,
  getPrefectureByCode,
  Japan,
  MapType,
  Prefecture,
  PrefectureCode,
} from "japan-prefectures-react";
import { MapTypeCombobox } from "./MapTypeCombobox";

const App: React.FC = () => {
  const prefectures = getAllPrefectures();
  const [hoveredPrefecture, setHoveredPrefecture] = useState<Prefecture | null>(
    null,
  );
  const [mapType, setMapType] = useState<MapType>("full");

  const onMouseEnter = (prefectureCode: PrefectureCode) => {
    setHoveredPrefecture(getPrefectureByCode(prefectureCode) ?? null);
  };

  const onMouseLeave = (prefectureCode: PrefectureCode) => {
    setHoveredPrefecture(null);
  };

  return (
    <main className="font-sans dark:text-slate-200 py-20 flex flex-col items-center gap-y-8 min-w-screen">
      <h2 className="text-center text-2xl font-bold mb-4">Map of Japan</h2>
      <section className="text-center capitalize flex flex-col items-center">
        <h3>Selected Prefecture</h3>
        <div className="flex items-center gap-x-2">
          {hoveredPrefecture
            ? getFlagByCode(hoveredPrefecture.code, { width: 24 })
            : null}
          {hoveredPrefecture
            ? `${hoveredPrefecture.code}: ${hoveredPrefecture.romaji} (${hoveredPrefecture.japanese}${hoveredPrefecture.code === "JP-01" ? "" : hoveredPrefecture.type.japanese})`
            : "None"}
        </div>
      </section>
      <section className="flex justify-center items-center">
        <Japan
          height={400}
          className="stroke-slate-400 fill-slate-100"
          prefectureProps={{
            className:
              "transition-all stroke-slate-400 fill-white hover:fill-red-500",
            onMouseEnter,
            onMouseLeave,
          }}
          mapType={mapType}
        />
      </section>
      <section className="flex justify-center items-center gap-x-4">
        <h4 className="text-center font-bold">Map Type</h4>
        <MapTypeCombobox selectedMapType={mapType} setMapType={setMapType} />
      </section>
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
    </main>
  );
};

export default App;
