import { Helmet } from "react-helmet-async";
import { WEBSITE_NAME } from "src/Data/variables";
import s from "./About.module.scss";
import AboutBackgroundImage from "./AboutBackgroundImage.jsx/AboutBackgroundImage";
import AboutHeroSection from "./AboutHeroSection/AboutHeroSection";
import JourneySection from "./JourneySection/JourneySection";
import OurMissionSection from "./OurMissionSection/OurMissionSection";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | {WEBSITE_NAME}</title>
        <meta name="description" content="About page description" />
      </Helmet>

      <main className={s.about} id="aboutPage">
        <AboutHeroSection />
        <OurMissionSection />
        <JourneySection />
        <AboutBackgroundImage />
      </main>
    </>
  );
};
export default About;
