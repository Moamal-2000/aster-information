import { jobsCardsData } from "src/Data/staticData";
import JobCard from "./JobCard/JobCard";
import s from "./JobsCards.module.scss";

const JobsCards = () => {
  return (
    <div className={s.jobsCards}>
      {jobsCardsData.map(({ id, title, location, description }) => (
        <JobCard
          key={id}
          title={title}
          location={location}
          description={description}
        />
      ))}
    </div>
  );
};
export default JobsCards;
