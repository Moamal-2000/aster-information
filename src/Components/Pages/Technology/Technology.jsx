import { Helmet } from "react-helmet-async";
import { techPageBg } from "src/Assets/Images/Images";
import { useGlobalContext } from "src/Context/GlobalContext";
import { WEBSITE_NAME } from "src/Data/variables";
import CoreExpertise from "./CoreExpertise/CoreExpertise";
import DataManagement from "./DataManagement/DataManagement";
import DataSecurity from "./DataSecurity/DataSecurity";
import TechHeroSection from "./TechHeroSection/TechHeroSection";
import s from "./Technology.module.scss";
import UserExperience from "./UserExperience/UserExperience";
import ValueSection from "./ValueSection/ValueSection";

const Technology = () => {
  const { currentPage } = useGlobalContext();
  const hidePseudoClass = currentPage === "/technology" ? s.hidePseudo : "";

  return (
    <>
      <Helmet>
        <title>Technology | {WEBSITE_NAME}</title>
        <meta name="description" content="Technology page description" />
        <link rel="preload" href={techPageBg} as="image" type="image/webp" />
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
