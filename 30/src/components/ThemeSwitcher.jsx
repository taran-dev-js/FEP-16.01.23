import { ThemeContext } from "../context/ThemeContext";
import { useContext, useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);
  console.log("render ThemeSwitcher");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkTheme ? "dark" : "light"
    );
  }, [darkTheme]);

  return <button onClick={toggleTheme}>toggle theme</button>;
};
