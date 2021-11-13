import { TopNav } from "./topNavigation";

interface IMainLayout {
  children: JSX.Element | JSX.Element[];
  prependChild?: JSX.Element | JSX.Element[];
}

export const MainLayout = ({ children, prependChild }: IMainLayout) => {
  return (
    <>
      {prependChild && prependChild}
      <TopNav />
      {children}
    </>
  );
};
