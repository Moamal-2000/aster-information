import s from "./About.module.scss";
import AboutBackgroundImage from "./AboutBackgroundImage.jsx/AboutBackgroundImage";
import AboutHeroSection from "./AboutHeroSection/AboutHeroSection";
import JourneySection from "./JourneySection/JourneySection";
import OurMissionSection from "./OurMissionSection/OurMissionSection";
import PartnersSection from "./PartnersSection/PartnersSection";

const About = () => {
  return (
    <main className={s.about} id="aboutPage">
      <AboutHeroSection />
      <OurMissionSection />
      <JourneySection />
      <AboutBackgroundImage />
      <PartnersSection />
    </main>
  );
};
export default About;
