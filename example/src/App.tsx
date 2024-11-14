import React from 'react';
import { MyComponent, MyComponentProps } from "japan-prefectures";

const App: React.FC = () => {
  const props: MyComponentProps = { title: "Hello", count: 5 };
  return <MyComponent {...props} />;
};

export default App;