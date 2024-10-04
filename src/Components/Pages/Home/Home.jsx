import { Helmet } from "react-helmet-async";
import { homeBgBottom, visionSectionBg } from "src/Assets/Images/Images";
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

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | {WEBSITE_NAME}</title>
        <meta name="description" content="Home page description" />
        <link
          rel="preload"
          href={visionSectionBg}
          as="image"
          type="image/webp"
        />
        <link rel="preload" href={homeBgBottom} as="image" type="image/webp" />
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
