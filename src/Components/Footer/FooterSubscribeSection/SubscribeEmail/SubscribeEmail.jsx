import { regexPatterns } from "src/Data/variables";
import s from "./SubscribeEmail.module.scss";

const SubscribeEmail = ({
  setEmail,
  isEmailValid,
  setIsEmailValid,
  loadingSubmit,
  email,
}) => {
  const invalidClass = isEmailValid ? "" : s.invalid;

  function handleEmailOnChange(event) {
    const value = event.target.value;
    const isValid = regexPatterns.email.test(value);

    setEmail(value);
    setIsEmailValid(isValid);
  }

  return (
    <div className={s.input}>
      <input
        className={invalidClass}
        type="email"
        value={email}
        onChange={handleEmailOnChange}
        name="subEmail"
        id="subEmail"
        required
      />
      <button
        type="submit"
        disabled={loadingSubmit}
        aria-disabled={loadingSubmit}
      >
        Subscribe
      </button>
    </div>
  );
};
export default SubscribeEmail;
