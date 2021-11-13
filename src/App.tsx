import { ThemeProvider } from "styled-components";
import { GlobalStyles, colorThemes, ThemeColor } from "./style/global.css";

import { useToggleDarkMode } from "./common/hooks/";
import { ToggleThemeCtx } from "./common/context/";
import { AppRoutes } from "./routes";

function App() {
  const [theme, toggleTheme, isDarkTheme] = useToggleDarkMode();

  return (
    <ToggleThemeCtx.Provider value={{ theme, toggleTheme, isDarkTheme }}>
      <ThemeProvider
        theme={
          isDarkTheme
            ? colorThemes[ThemeColor.dark]
            : colorThemes[ThemeColor.light]
        }
      >
        <>
          <GlobalStyles />
          <AppRoutes />
        </>
      </ThemeProvider>
    </ToggleThemeCtx.Provider>
  );
}

export default App;
