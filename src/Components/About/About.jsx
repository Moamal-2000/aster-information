import { Helmet } from "react-helmet-async";
import s from "./About.module.scss";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Aster Information</title>
        <meta name="description" content="About page description" />
      </Helmet>

      <main className={s.about} id="about-page">
        About page
      </main>
    </>
  );
};
export default About;
