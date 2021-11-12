import { useContext } from "react";
import { ToggleThemeCtx } from "../../../common/context";

export const ToggleThemeButton = () => {
  const { toggleTheme, isDarkTheme } = useContext(ToggleThemeCtx);
  return (
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
  );
};
