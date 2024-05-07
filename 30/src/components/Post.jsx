import { ThemeContext } from "../context/ThemeContext";
import { useState } from "react";

export const Post = ({ name, hasError }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>post: {name}</h1>
      {hasError && count.map((item) => item)}
    </div>
  );
};
