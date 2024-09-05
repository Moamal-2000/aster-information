import { Helmet } from "react-helmet-async";
import { WEBSITE_NAME } from "src/Data/variables";
import CoreExpertise from "./CoreExpertise/CoreExpertise";
import DataManagement from "./DataManagement/DataManagement";
import TechHeroSection from "./TechHeroSection/TechHeroSection";
import s from "./Technology.module.scss";
import UserExperience from "./UserExperience/UserExperience";
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
        <CoreExpertise />
        <UserExperience />
        <DataManagement />
      </main>
    </>
  );
};
export default Technology;
