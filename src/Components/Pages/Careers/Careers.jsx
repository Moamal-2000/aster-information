import { Helmet } from "react-helmet-async";
import { WEBSITE_NAME } from "src/Data/variables";
import s from "./Careers.module.scss";
import CareersHeroSection from "./CareersHeroSection/CareersHeroSection";
import JobsSection from "./JobsSection/JobsSection";
import LocationSection from "./LocationSection/LocationSection";

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers | {WEBSITE_NAME}</title>
        <meta name="description" content="Careers page description" />
      </Helmet>

      <main className={s.careers} id="careersPage">
        <div className="container">
          <CareersHeroSection />
        </div>
        <LocationSection />
        <JobsSection />
      </main>
    </>
  );
};
export default Careers;
