import { ToggleThemeButton } from "./ToggleThemeButton";
import { StickyNav } from "./TopNav.style";

export const TopNav = () => {
  return (
    <StickyNav>
      <ul>
        <li>
          <a href="#first">First</a>
        </li>
        <li>
          <a href="#second">Second</a>
        </li>
        <li>
          <a href="#third">Third</a>
        </li>
      </ul>
      <ToggleThemeButton />
    </StickyNav>
  );
};
