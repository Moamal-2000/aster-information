import { joinOurTeamBg } from "src/Assets/Images/Images";
import CVSubmissionCard from "./CVSubmissionCard/CVSubmissionCard";
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
          className={s.jobsSectionBg}
          loading="lazy"
        />
      </div>

      <div className="container">
        <JobsCards />
        <CVSubmissionCard />
      </div>
    </section>
  );
};
export default JobsSection;
