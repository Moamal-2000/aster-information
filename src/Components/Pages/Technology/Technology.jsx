import { Helmet } from "react-helmet-async";
import { WEBSITE_NAME } from "src/Data/variables";
import TechHeroSection from "./TechHeroSection/TechHeroSection";
import s from "./Technology.module.scss";
import ValueSection from "./ValueSection/ValueSection";

const Technology = () => {
  return (
    <>
      <Helmet>
        <title>Technology | {WEBSITE_NAME}</title>
        <meta name="description" content="Technology page description" />
      </Helmet>

      <main className={s.technology} id="technologyPage">
        <TechHeroSection />
        <ValueSection />
      </main>
    </>
  );
};
export default Technology;
