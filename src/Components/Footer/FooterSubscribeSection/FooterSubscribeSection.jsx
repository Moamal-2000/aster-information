import { useState } from "react";
import { regexPatterns } from "src/Data/variables";
import s from "./FooterSubscribeSection.module.scss";

const FooterSubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [submitEmail, setSubmitEmail] = useState(false);
  const validationClass = isEmailValid ? "" : s.invalid;
  const activeClass = submitEmail ? s.active : "";

  function handleSubmitEmail(event) {
    event.preventDefault();
    if (!isEmailValid) return;

    setLoadingSubmit(true);
    setTimeout(() => {
      setLoadingSubmit(false);
      setSubmitEmail(true);
      setEmail("");

      setTimeout(() => setSubmitEmail(false), 4000);
    }, 2000);
  }

  function handleEmailOnChange(event) {
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
            className={validationClass}
            type="email"
            value={email}
            onChange={handleEmailOnChange}
            name="sub-email"
            id="sub-email"
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

        <p
          className={`${s.submitMessage} ${activeClass}`}
          aria-hidden={submitEmail}
        >
          Thanks for submitting!
        </p>
      </form>
    </section>
  );
};
export default FooterSubscribeSection;
