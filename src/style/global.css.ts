import styled, { createGlobalStyle } from "styled-components";

export enum deviceWidth {
  XXS = 320,
  XS = 600,
  S = 640,
  M = 768,
  L = 1024,
  XL = 1280,
}

export enum ThemeColor {
  light = "light",
  dark = "dark",
}
interface IThemeColorPicker {
  [ThemeColor.light]: IThemeColor;
  [ThemeColor.dark]: IThemeColor;
}

export interface IThemeColor {
  backgroundColor?: string;
  textcolor?: string;
  navBackgroundColor?: string;
  navTextColor?: string;
}

export const colorThemes: IThemeColorPicker = {
  [ThemeColor.light]: {
    backgroundColor: "#f1f1f1",
    textcolor: "#121620",
    navBackgroundColor: "dimgrey",
    navTextColor: "white",
  },
  [ThemeColor.dark]: {
    backgroundColor: "#121620",
    textcolor: "#f1f1f1",
    navBackgroundColor: "white",
    navTextColor: "dimgrey",
  },
};

export const GlobalStyles = createGlobalStyle<{ theme: IThemeColor }>`
  body {
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textcolor};
    transition: background 0.2s ease-in, color 0.2s ease-in;

    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
  }
`;

export const MainContainer = styled.div`
  @media (max-width: ${deviceWidth.XXS}px) {
    margin-left: 5px;
    margin-right: 5px;
  }
  @media (max-width: ${deviceWidth.XS}px) {
    margin-left: 8px;
    margin-right: 8px;
  }
  @media (max-width: ${deviceWidth.M}px) {
    margin-left: 10px;
    margin-right: 10px;
  }
  @media (min-width: ${deviceWidth.M}px) and (max-width: ${deviceWidth.L}px) {
    max-width: 728px;
    margin: auto;
  }
  @media (min-width: ${deviceWidth.L}px) and (max-width: ${deviceWidth.XL}px) {
    max-width: 964px;
    margin: auto;
  }
  @media (min-width: ${deviceWidth.XL}px) {
    max-width: 1200px;
    margin: auto;
  }
`;
