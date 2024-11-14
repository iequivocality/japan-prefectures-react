import React from "react";
import { Aomori, Hokkaido } from "japan-prefectures";

const App: React.FC = () => {
  return (
    <div>
      <Hokkaido width={100} />
      <Aomori width={100} />
    </div>
  );
};

export default App;
