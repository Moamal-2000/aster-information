import { Helmet } from "react-helmet-async";
import { WEBSITE_NAME } from "src/Data/variables";
import TechHeroSection from "./TechHeroSection/TechHeroSection";
import s from "./Technology.module.scss";
import ValueSection from "./ValueSection/ValueSection";
import CoreExpertise from "./CoreExpertise/CoreExpertise";

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
        <CoreExpertise />
      </main>
    </>
  );
};
export default Technology;
