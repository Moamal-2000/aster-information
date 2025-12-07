import { useGlobalContext } from "src/Context/GlobalContext";
import CoreExpertise from "./CoreExpertise/CoreExpertise";
import DataManagement from "./DataManagement/DataManagement";
import DataSecurity from "./DataSecurity/DataSecurity";
import TechHeroSection from "./TechHeroSection/TechHeroSection";
import s from "./Technology.module.scss";
import UserExperience from "./UserExperience/UserExperience";

const Technology = () => {
  const { currentPage } = useGlobalContext();
  const hidePseudoClass = currentPage === "/technology" ? s.hidePseudo : "";

  return (
    <main className={`${s.technology} ${hidePseudoClass}`} id="technologyPage">
      <TechHeroSection />
      <CoreExpertise />
      <UserExperience />
      <DataManagement />
      <DataSecurity />
    </main>
  );
};
export default Technology;
