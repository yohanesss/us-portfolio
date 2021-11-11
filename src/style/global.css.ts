import { createGlobalStyle } from "styled-components";

export enum ThemeColor {
  light,
  dark,
}

interface IThemeColorPicker {
  [ThemeColor.light]: IThemeColor;
  [ThemeColor.dark]: IThemeColor;
}

interface IThemeColor {
  body?: string;
  text?: string;
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }: any) => theme.body};
    color: ${({ theme }: any) => theme.text};
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
