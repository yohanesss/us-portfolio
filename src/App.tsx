import { useEffect, useState } from "react";
import logo from "./assets/logo.svg";
// import "./style/App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, colorThemes, ThemeColor } from "./style/global.css";

function App() {
  const [theme, setTheme] = useState(ThemeColor.light);
  const isDarkTheme = theme === ThemeColor.dark;

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? ThemeColor.light : ThemeColor.dark;
    setTheme(updatedTheme);
    localStorage.setItem("userTheme", updatedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("userTheme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ThemeColor[savedTheme as keyof typeof ThemeColor]) {
      setTheme(ThemeColor[savedTheme as keyof typeof ThemeColor]);
    } else {
      if (prefersDark) {
        setTheme(ThemeColor.dark);
      } else {
        setTheme(ThemeColor[savedTheme as keyof typeof ThemeColor]);
      }
    }
  }, []);

  return (
    <ThemeProvider
      theme={
        isDarkTheme
          ? colorThemes[ThemeColor.dark]
          : colorThemes[ThemeColor.light]
      }
    >
      <>
        <GlobalStyles />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <button onClick={toggleTheme}>
              {isDarkTheme ? (
                <span aria-label="Light mode" role="img">
                  🌞
                </span>
              ) : (
                <span aria-label="Dark mode" role="img">
                  🌜
                </span>
              )}
            </button>
          </header>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
