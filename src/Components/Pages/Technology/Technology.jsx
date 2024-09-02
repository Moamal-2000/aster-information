import { Helmet } from "react-helmet-async";
import { WEBSITE_NAME } from "src/Data/variables";
import s from "./Technology.module.scss";
import TechHeroSection from "./TechHeroSection/TechHeroSection";

const Technology = () => {
  return (
    <>
      <Helmet>
        <title>Technology | {WEBSITE_NAME}</title>
        <meta name="description" content="Technology page description" />
      </Helmet>

      <main className={s.technology} id="technologyPage">
        <TechHeroSection />
      </main>
    </>
  );
};
export default Technology;
