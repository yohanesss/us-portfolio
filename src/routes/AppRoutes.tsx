import { Route, Routes } from "react-router-dom";
import { HomePageContainer } from "../features/homePage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePageContainer />} />
    </Routes>
  );
};
