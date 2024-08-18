import s from "./Home.module.scss";
import HomeBackground from "./HomeHeroSection/HomeBackground/HomeBackground";
import HomeHeroSection from "./HomeHeroSection/HomeHeroSection";
import VisionSection from "./VisionSection/VisionSection";

const Home = () => {
  return (
    <main className={s.homePage} id="homePage">
      <HomeBackground />

      <div className="container">
        <HomeHeroSection />
      </div>

      <VisionSection />
    </main>
  );
};
export default Home;
