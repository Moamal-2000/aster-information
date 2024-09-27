import { joinUsInputsData } from "src/Data/staticData";
import Input from "../../../../Shared/Inputs/Input/Input";
import s from "./JoinUsInputs.module.scss";

const JoinUsInputs = () => {
  return (
    <div className={s.inputs}>
      {joinUsInputsData.map((input) => (
        <Input key={input.id} {...input} />
      ))}

      <button type="submit" className={s.submitButton}>
        Submit
      </button>
    </div>
  );
};
export default JoinUsInputs;
