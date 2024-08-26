import { useState } from "react";
import { regexPatterns } from "src/Data/variables";
import s from "./FooterSubscribeSection.module.scss";

const FooterSubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const ValidationClass = isEmailValid ? "" : s.invalid;

  function handleSubmitEmail(event) {
    event.preventDefault();
  }

  function handleEmail(event) {
    const value = event.target.value;
    const isValid = regexPatterns.email.test(value);
    setEmail(value);
    setIsEmailValid(isValid);
  }

  return (
    <section className={s.subscribeSection}>
      <h2>SUBSCRIBE</h2>
      <p>Sign up to receive Autono news and updates.</p>

      <form className={s.subEmailForm} onSubmit={handleSubmitEmail}>
        <label htmlFor="sub-email">Email *</label>

        <div className={s.input}>
          <input
            className={ValidationClass}
            type="email"
            value={email}
            onChange={handleEmail}
            name="sub-email"
            id="sub-email"
            required
          />
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </section>
  );
};
export default FooterSubscribeSection;
