import { MainContainer } from "../../style/global.css";
import { MainLayout } from "../layout";
import rocketSVG from "../../assets/svg/rocket-1.svg";
import { Particle } from "../../common/sharedComponent/Particles/Particle";

export const HomePageContainer = () => {
  return (
    <>
      <MainLayout
        prependChild={
          <>
            <Particle preset="star" />
            <h1>
              <img
                className="rocket-booting-up"
                src={rocketSVG}
                alt="booting up"
              />
            </h1>
          </>
        }
      >
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
