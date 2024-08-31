import { Helmet } from "react-helmet-async";
import { WEBSITE_NAME } from "src/Data/variables";
import CareersSection from "./CareersSection/CareersSection";
import s from "./Home.module.scss";
import HomeBackground from "./HomeHeroSection/HomeBackground/HomeBackground";
import HomeHeroSection from "./HomeHeroSection/HomeHeroSection";
import IndustrySection from "./IndustrySection/IndustrySection";
import IntoStatsSection from "./InfoStatsSection/InfoStatsSection";
import ServicesSection from "./ServicesSection/ServicesSection";
import VisionSection from "./VisionSection/VisionSection";
import WhyUsSection from "./WhyUs/WhyUsSection";
import { whyUsSectionBg } from "src/Assets/Images/Images";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | {WEBSITE_NAME}</title>
        <meta name="description" content="Home page description" />
      </Helmet>

      <main className={s.homePage} id="homePage">
      <img
        src={whyUsSectionBg}
        alt="Why-us section background image"
        loading="lazy"
        className={s.backgroundImg}
      />
        <HomeBackground />
        <div className="container">
          <HomeHeroSection />
        </div>

        <VisionSection />
        <ServicesSection />
        <WhyUsSection />
        <IntoStatsSection />
        <IndustrySection />
        <CareersSection />
      </main>
    </>
  );
};
export default Home;
