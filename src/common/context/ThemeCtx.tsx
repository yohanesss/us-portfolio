import { createContext } from "react";
import { ThemeColor } from "../../style/global.css";

export const ToggleThemeCtx = createContext<{
  theme: ThemeColor;
  toggleTheme: () => void;
  isDarkTheme: boolean;
}>({
  theme: ThemeColor.light,
  toggleTheme: () => undefined,
  isDarkTheme: true,
});
