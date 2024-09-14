import { Helmet } from "react-helmet-async";
import { WEBSITE_NAME } from "src/Data/variables";
import s from "./About.module.scss";
import AboutBackgroundImage from "./AboutBackgroundImage.jsx/AboutBackgroundImage";
import AboutHeroSection from "./AboutHeroSection/AboutHeroSection";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | {WEBSITE_NAME}</title>
        <meta name="description" content="About page description" />
      </Helmet>

      <main className={s.about} id="aboutPage">
        <AboutHeroSection />
        <AboutBackgroundImage />
      </main>
    </>
  );
};
export default About;
