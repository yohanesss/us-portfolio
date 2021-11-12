import { TopNav } from "./topNavigation";

interface IMainLayout {
  children: JSX.Element | JSX.Element[];
}

export const MainLayout = ({ children }: IMainLayout) => {
  return (
    <>
      <TopNav />
      {children}
    </>
  );
};
