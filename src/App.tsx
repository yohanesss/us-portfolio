import { useEffect, useState, useContext } from "react";
import { ThemeProvider } from "styled-components";
import {
  GlobalStyles,
  colorThemes,
  ThemeColor,
  MainContainer,
} from "./style/global.css";

import { useToggleDarkMode } from "./common/hooks/";
import { ToggleThemeCtx } from "./common/context/";
import { MainLayout } from "./features/layout/MainLayout";

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
          <MainLayout>
            <MainContainer>
              <header className="App-header">
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
              </header>
            </MainContainer>
          </MainLayout>
        </>
      </ThemeProvider>
    </ToggleThemeCtx.Provider>
  );
}

export default App;
