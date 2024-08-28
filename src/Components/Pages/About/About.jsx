import { Helmet } from "react-helmet-async";
import { WEBSITE_NAME } from "src/Data/variables";
import s from "./About.module.scss";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | {WEBSITE_NAME}</title>
        <meta name="description" content="About page description" />
      </Helmet>

      <main className={s.about} id="aboutPage">
        About page
      </main>
    </>
  );
};
export default About;
