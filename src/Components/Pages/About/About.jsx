import { Helmet } from "react-helmet-async";
import { WEBSITE_NAME } from "src/Data/variables";
import s from "./About.module.scss";
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
      </main>
    </>
  );
};
export default About;
