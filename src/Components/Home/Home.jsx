import { homeBgBottom, homeBgTop } from "src/Assets/Images/Images";
import s from "./Home.module.scss";
import HomeHeroSection from "./HomeHeroSection/HomeHeroSection";
import VisionSection from "./VisionSection/VisionSection";

const Home = () => {
  return (
    <main id="homePage">
      <div className={s.backgroundImage}>
        <img src={homeBgTop} className={s.top} alt="Hero Section Top Image" />
        <img src={homeBgBottom} className={s.bottom} alt="Hero Section Bottom Image" />
      </div>

      <div className="container">
        <HomeHeroSection />
        <VisionSection />
      </div>
    </main>
  );
};
export default Home;
