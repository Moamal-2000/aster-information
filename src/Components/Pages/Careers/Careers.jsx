import { Helmet } from "react-helmet-async";
import { WEBSITE_NAME } from "src/Data/variables";
import HeroSection from "../../Shared/HeroSection/HeroSection";
import s from "./Careers.module.scss";
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
          <HeroSection
            titleLine1="WE MAKE"
            titleLine2="BIG IDEAS HAPPEN"
            description="Join Us for the Ride"
          />
        </div>
        <LocationSection />
        <JobsSection />
      </main>
    </>
  );
};
export default Careers;
