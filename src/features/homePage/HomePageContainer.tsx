import { MainContainer } from "../../style/global.css";
import { MainLayout } from "../layout";

export const HomePageContainer = () => {
  return (
    <>
      <MainLayout prependChild={<h1>asdf</h1>}>
        <MainContainer>
          <section id="first">First Section</section>
          <section id="second">Second Section</section>
          <section id="third">Third Section</section>

          <header className="App-header">
            <p>This is Homepage!</p>
          </header>
        </MainContainer>
      </MainLayout>
    </>
  );
};
