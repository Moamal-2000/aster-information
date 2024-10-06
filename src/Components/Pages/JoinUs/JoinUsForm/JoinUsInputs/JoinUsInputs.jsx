import Input from "../../../../Shared/Inputs/Input/Input";
import s from "./JoinUsInputs.module.scss";

const JoinUsInputs = ({
  values,
  handleChange,
  inputsState,
  isTryingSubmit,
  joinUsInputsState,
  setJoinUsInputsState,
}) => {
  function onChange(event) {
    const { name, value } = event.target;
    const inputData = joinUsInputsState.find((input) => input.name === name);
    const isValidValue = inputData?.regex?.test(value);
    const isRequired = inputData.required;
    const isEmpty = value === "";
    const isSelectElement = inputData.type === "select";

    handleChange(event);

    if (isSelectElement) inputData.isValid = true;
    else if (isEmpty && !isRequired) inputData.isValid = true;
    else if (!isEmpty && isRequired) inputData.isValid = isValidValue;
    else inputData.isValid = isValidValue;

    setJoinUsInputsState(joinUsInputsState);
  }

  return (
    <div className={s.inputs}>
      {inputsState.map((input) => {
        return (
          <Input
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            valid={input.isValid}
            isTryingSubmit={isTryingSubmit}
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
