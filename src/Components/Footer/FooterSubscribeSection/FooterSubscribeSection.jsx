import s from "./FooterSubscribeSection.module.scss";

const FooterSubscribeSection = () => {
  function handleSubmitEmail(event) {
    event.preventDefault();
  }

  return (
    <section className={s.subscribeSection}>
      <h2>SUBSCRIBE</h2>
      <p>Sign up to receive Autono news and updates.</p>

      <form className={s.subEmailForm} onSubmit={handleSubmitEmail}>
        <label htmlFor="sub-email">Email *</label>
        <div className={s.input}>
          <input type="email" name="sub-email" id="sub-email" required />
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </section>
  );
};
export default FooterSubscribeSection;
