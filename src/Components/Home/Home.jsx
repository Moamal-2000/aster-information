import homeBgBottom from "src/Assets/home-bg-bottom.png";
import homeBgTop from "src/Assets/home-bg-top.png";
import s from "./Home.module.scss";
import HomeHeroSection from "./HomeHeroSection/HomeHeroSection";
import VisionSection from "./VisionSection/VisionSection";

const Home = () => {
  return (
    <main id="homePage">
      <div className={s.backgroundImage}>
        <img src={homeBgTop} className={s.top} alt="" />
        <img src={homeBgBottom} className={s.bottom} alt="" />
      </div>

      <div className="container">
        <HomeHeroSection />
        <VisionSection />
      </div>
    </main>
  );
};
export default Home;
