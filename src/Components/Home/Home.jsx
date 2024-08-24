import { Helmet } from "react-helmet-async";
import s from "./Home.module.scss";
import HomeBackground from "./HomeHeroSection/HomeBackground/HomeBackground";
import HomeHeroSection from "./HomeHeroSection/HomeHeroSection";
import IndustrySection from "./IndustrySection/IndustrySection";
import IntoStatsSection from "./InfoStatsSection/InfoStatsSection";
import ServicesSection from "./ServicesSection/ServicesSection";
import VisionSection from "./VisionSection/VisionSection";
import WhyUsSection from "./WhyUs/WhyUsSection";
import CareersSection from "./CareersSection/CareersSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Aster Information</title>
        <meta name="description" content="Home page description" />
      </Helmet>

      <main className={s.homePage} id="homePage">
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
