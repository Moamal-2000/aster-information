import s from "./JoinUsForm.module.scss";
import JoinUsInputs from "./JoinUsInputs/JoinUsInputs";

const JoinUsForm = () => {
  return (
    <div className={s.joinUsWrapper}>
      <form className={s.joinUsForm}>
        <h2>Submit Your Application</h2>

        <JoinUsInputs />
      </form>
    </div>
  );
};
export default JoinUsForm;
