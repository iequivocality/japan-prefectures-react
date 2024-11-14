import React from 'react';

export interface MyComponentProps {
  title: string;
  count: number;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, count }) => (
  <div>
    <h1>{title}</h1>
    <p>Count: {count}</p>
  </div>
);

export default MyComponent;