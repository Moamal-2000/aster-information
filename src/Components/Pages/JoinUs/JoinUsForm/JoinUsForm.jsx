import useFormData from "../../../../Hooks/Helper/useFormData";
import s from "./JoinUsForm.module.scss";
import JoinUsInputs from "./JoinUsInputs/JoinUsInputs";

const JoinUsForm = () => {
  const { values, handleChange, handleSubmit } = useFormData({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      cvUrl: "",
      linkedinUrl: "",
      comment: "",
    },
    storeInLocalStorage: false,
    onSubmit: checkSubmission,
  });

  function checkSubmission(val) {
    console.log(val);
  }

  return (
    <div className={s.joinUsWrapper}>
      <div className="container">
        <form className={s.joinUsForm} onSubmit={handleSubmit}>
          <h2>Submit Your Application</h2>

          <JoinUsInputs values={values} handleChange={handleChange} />
        </form>
      </div>
    </div>
  );
};
export default JoinUsForm;
