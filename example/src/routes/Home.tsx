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
import { MapTypeCombobox } from "../components/MapTypeCombobox";

export const Home = () => {
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
    <>
      <section className="flex items-center flex-col h-1/2 w-full gap-y-8">
        <h2 className="text-center text-2xl font-bold mb-4">Map of Japan</h2>
        <div className="flex flex-col items-center">
          <h3>Selected Prefecture</h3>
          <div className="flex items-center gap-x-2">
            {hoveredPrefecture
              ? getFlagByCode(hoveredPrefecture.code, { width: 24 })
              : null}
            {hoveredPrefecture
              ? `${hoveredPrefecture.code}: ${hoveredPrefecture.romaji} (${hoveredPrefecture.japanese}${hoveredPrefecture.code === "JP-01" ? "" : hoveredPrefecture.type.japanese})`
              : "None"}
          </div>
        </div>
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
        <h4 className="text-center font-bold">Map Type</h4>
        <MapTypeCombobox selectedMapType={mapType} setMapType={setMapType} />
      </section>
    </>
  );
}