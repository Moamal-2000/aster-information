import homeBgBottom from "../../Assets/home-bg-bottom.png";
import homeBgTop from "../../Assets/home-bg-top.png";
import s from "./Home.module.scss";
import HomeHeroSection from "./HomeHeroSection/HomeHeroSection";

const Home = () => {
  return (
    <main id="homePage">
      <div className={s.backgroundImage}>
        <img src={homeBgTop} className={s.top} alt="" />
        <img src={homeBgBottom} className={s.bottom} alt="" />
      </div>

      <div className="container">
        <HomeHeroSection />
      </div>
    </main>
  );
};
export default Home;
