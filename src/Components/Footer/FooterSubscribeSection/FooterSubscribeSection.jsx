import { useState } from "react";
import { SUBMIT_EMAIL_MESSAGE_MS } from "src/Data/variables";
import s from "./FooterSubscribeSection.module.scss";
import SubscribeEmail from "./SubscribeEmail/SubscribeEmail";

const FooterSubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [submitEmail, setSubmitEmail] = useState(false);
  const activeClass = submitEmail ? s.active : "";

  function handleSubmitEmail(event) {
    event.preventDefault();
    if (!isEmailValid) return;

    setLoadingSubmit(true);
    setTimeout(() => {
      setLoadingSubmit(false);
      setSubmitEmail(true);
      setEmail("");

      setTimeout(() => setSubmitEmail(false), SUBMIT_EMAIL_MESSAGE_MS);
    }, SUBMIT_EMAIL_MESSAGE_MS / 2);
  }

  return (
    <section className={s.subscribeSection}>
      <h2>SUBSCRIBE</h2>
      <p>Sign up to receive auto news and updates.</p>

      <form className={s.subEmailForm} onSubmit={handleSubmitEmail}>
        <label htmlFor="subEmail">Email *</label>

        <SubscribeEmail
          {...{ email, setEmail, isEmailValid, setIsEmailValid, loadingSubmit }}
        />

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
