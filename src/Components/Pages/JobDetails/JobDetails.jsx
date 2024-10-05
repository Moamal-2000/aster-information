import { jobResponsibilities, whoYouAreData } from "src/Data/staticData";
import HeroSection from "../../Shared/HeroSection/HeroSection";
import s from "./JobDetails.module.scss";
import JobInfo from "./JobInfo/JobInfo";
import RoleOverview from "./RoleOverview/RoleOverview";

const JobDetails = () => {
  return (
    <main className={s.jobDetailsPage} id="jobDetailsPage">
      <HeroSection
        titleLine1="ELECTRICAL"
        titleLine2="ENGINEER"
        description={`I'm a paragraph. Click here to add your own text
          and edit me. It’s easy. Just click “Edit Text” or double click
          me to add your own content and make changes to the font.
          I’m a great place for you to tell a story and let your users
          know a little more about you.`}
      />

      <div className="container">
        <JobInfo />
      </div>
      <RoleOverview title="What You’ll Do" list={jobResponsibilities} />
      <RoleOverview
        title="Who You are"
        list={whoYouAreData}
        invertColors={true}
        showApplyButton={true}
      />
    </main>
  );
};
export default JobDetails;
