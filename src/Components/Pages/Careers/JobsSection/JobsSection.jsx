import { joinOurTeamBg } from "src/Assets/Images/Images";
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
    </section>
  );
};
export default JobsSection;
