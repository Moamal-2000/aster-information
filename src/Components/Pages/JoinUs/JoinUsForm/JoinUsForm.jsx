import { useState } from "react";
import { joinUsInputsData } from "src/Data/staticData";
import useFormData from "src/Hooks/Helper/useFormData";
import s from "./JoinUsForm.module.scss";
import JoinUsInputs from "./JoinUsInputs/JoinUsInputs";

const JoinUsForm = () => {
  const [joinUsInputsState, setJoinUsInputsState] = useState(joinUsInputsData);
  const [isTryingSubmit, setIsTryingSubmit] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { values, handleChange, handleSubmit, emptyInputs } = useFormData({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      position: "",
      cvUrl: "",
      linkedinUrl: "",
      comment: "",
    },
    storeInLocalStorage: false,
    onSubmit: checkSubmission,
  });

  function checkSubmission() {
    if (submitting || submitted) return;

    const allFieldsValid = joinUsInputsState.every((input) => input.isValid);
    setIsTryingSubmit(true);

    if (allFieldsValid) {
      setSubmitting(true);

      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(true);
        emptyInputs();

        setTimeout(() => setSubmitted(false), 4000);
      }, 2000);
    }
  }

  return (
    <div className={s.joinUsWrapper}>
      <div className="container">
        <form className={s.joinUsForm} onSubmit={handleSubmit}>
          <h2>Submit Your Application</h2>

          <JoinUsInputs
            values={values}
            handleChange={handleChange}
            inputsState={joinUsInputsData}
            isTryingSubmit={isTryingSubmit}
            joinUsInputsState={joinUsInputsState}
            setJoinUsInputsState={setJoinUsInputsState}
            submitting={submitting}
            submitted={submitted}
          />
        </form>
      </div>
    </div>
  );
};
export default JoinUsForm;
