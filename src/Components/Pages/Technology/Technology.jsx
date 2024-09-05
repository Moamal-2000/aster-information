import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { WEBSITE_NAME } from "src/Data/variables";
import CoreExpertise from "./CoreExpertise/CoreExpertise";
import DataManagement from "./DataManagement/DataManagement";
import DataSecurity from "./DataSecurity/DataSecurity";
import TechHeroSection from "./TechHeroSection/TechHeroSection";
import s from "./Technology.module.scss";
import UserExperience from "./UserExperience/UserExperience";
import ValueSection from "./ValueSection/ValueSection";

const Technology = () => {
  const { currentPage } = useSelector((state) => state.global);
  const hidePseudoClass = currentPage === "/technology" ? s.hidePseudo : "";

  return (
    <>
      <Helmet>
        <title>Technology | {WEBSITE_NAME}</title>
        <meta name="description" content="Technology page description" />
      </Helmet>

      <main
        className={`${s.technology} ${hidePseudoClass}`}
        id="technologyPage"
      >
        <TechHeroSection />
        <ValueSection />
        <CoreExpertise />
        <UserExperience />
        <DataManagement />
        <DataSecurity />
      </main>
    </>
  );
};
export default Technology;
