import { createGlobalStyle } from "styled-components";

export enum ThemeColor {
  light = "light",
  dark = "dark",
}

interface IThemeColorPicker {
  [ThemeColor.light]: IThemeColor;
  [ThemeColor.dark]: IThemeColor;
}

interface IThemeColor {
  body?: string;
  text?: string;
}

export const GlobalStyles = createGlobalStyle<{ theme: IThemeColor }>`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;

    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
  }
`;

export const colorThemes: IThemeColorPicker = {
  [ThemeColor.light]: {
    body: "#f1f1f1",
    text: "#121620",
  },
  [ThemeColor.dark]: {
    body: "#121620",
    text: "#f1f1f1",
  },
};
