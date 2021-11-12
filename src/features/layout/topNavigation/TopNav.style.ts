import styled from "styled-components";
import { IThemeColor } from "../../../style/global.css";

export const StickyNav = styled.nav<IThemeColor>`
  background: ${({ theme }) => theme.navBackgroundColor};
  color: ${({ theme }) => theme.navTextColor};
  position: sticky;
  top: 0;
  transition: background 0.2s ease-in, color 0.2s ease-in;

  ul {
    margin: 0;
  }
`;
