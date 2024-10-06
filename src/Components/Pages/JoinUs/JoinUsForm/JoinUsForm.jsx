import { useState } from "react";
import { joinUsInputsData } from "src/Data/staticData";
import useFormData from "src/Hooks/Helper/useFormData";
import s from "./JoinUsForm.module.scss";
import JoinUsInputs from "./JoinUsInputs/JoinUsInputs";

const JoinUsForm = () => {
  const [joinUsInputsState, setJoinUsInputsState] = useState(joinUsInputsData);
  const [isTryingSubmit, setIsTryingSubmit] = useState(false);
  const { values, handleChange, handleSubmit } = useFormData({
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
    setIsTryingSubmit(true);
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
          />
        </form>
      </div>
    </div>
  );
};
export default JoinUsForm;
