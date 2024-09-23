import { joinOurTeamBg } from "src/Assets/Images/Images";
import JobsCards from "./JobsCards/JobsCards";
import s from "./JobsSection.module.scss";
import JobsSectionContent from "./JobsSectionContent/JobsSectionContent";

const JobsSection = () => {
  return (
    <section className={s.jobsSection}>
      <div className="container" data-container>
        <JobsSectionContent />

        <img
          src={joinOurTeamBg}
          alt="Jobs section background image"
          loading="lazy"
          className={s.jobsSectionBg}
        />
      </div>

      <div className="container" data-container2>
        <JobsCards />
      </div>
    </section>
  );
};
export default JobsSection;
