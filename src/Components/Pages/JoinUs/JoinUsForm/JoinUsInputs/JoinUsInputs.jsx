import { joinUsInputsData } from "src/Data/staticData";
import Input from "../../../../Shared/Inputs/Input/Input";
import s from "./JoinUsInputs.module.scss";

const JoinUsInputs = ({ values, handleChange }) => {
  return (
    <div className={s.inputs}>
      {joinUsInputsData.map((input) => {
        return (
          <Input
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
          />
        );
      })}

      <button type="submit" className={s.submitButton}>
        Submit
      </button>
    </div>
  );
};
export default JoinUsInputs;
