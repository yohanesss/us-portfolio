import { useEffect, useState, createContext } from "react";
import { ThemeColor } from "../../style/global.css";

export const useToggleDarkMode = () => {
  const [theme, setTheme] = useState(ThemeColor.light);
  const isDarkTheme = theme === ThemeColor.dark;

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? ThemeColor.light : ThemeColor.dark;
    setTheme(updatedTheme);
    localStorage.setItem("userTheme", updatedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("userTheme");
    if (savedTheme && ThemeColor[savedTheme as keyof typeof ThemeColor]) {
      setTheme(ThemeColor[savedTheme as keyof typeof ThemeColor]);
    } else {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (prefersDark) {
        setTheme(ThemeColor.dark);
      } else {
        setTheme(ThemeColor[savedTheme as keyof typeof ThemeColor]);
      }
    }
  }, []);

  return [theme, toggleTheme, isDarkTheme] as const;
};
