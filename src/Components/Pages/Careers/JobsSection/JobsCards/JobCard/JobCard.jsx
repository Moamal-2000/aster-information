import Button from "../../../../../Shared/Buttons/Button/Button";
import s from "./JobCard.module.scss";

const JobCard = ({ title, location, description }) => {
  return (
    <div className={s.card}>
      <h2 className={s.title}>{title}</h2>

      <p className={s.location}>
        <strong>{location}</strong>
      </p>

      <p className={s.description}>{description}</p>

      <Button
        text="Apply Now"
        path="/submit-application"
        invertColors={true}
      />
    </div>
  );
};
export default JobCard;
