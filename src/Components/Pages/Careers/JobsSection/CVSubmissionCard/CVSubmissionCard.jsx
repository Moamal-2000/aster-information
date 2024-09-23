import Button from "../../../../Shared/Buttons/Button/Button";
import s from "./CVSubmissionCard.module.scss";

const CVSubmissionCard = () => {
  return (
    <div className={s.card}>
      <p>Didn't find the position you're looking for? Send us your CV</p>

      <Button path="/submit-application" text="Submit" />
    </div>
  );
};
export default CVSubmissionCard;
