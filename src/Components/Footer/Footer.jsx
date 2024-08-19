import {
  facebookLogo,
  instagramLogo,
  linkedinLogo,
  twitterLogo,
} from "src/Assets/Images/Images";
import s from "./Footer.module.scss";
import FooterInfoSection from "./FooterInfoSection/FooterInfoSection";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerDetails}>
        <FooterInfoSection />

        <section className={s.subscribeSection}>
          <h2>SUBSCRIBE</h2>
          <p>Sign up to receive Autono news and updates.</p>

          <form
            className={s.subEmailForm}
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor="sub-email">Email *</label>
            <div className={s.input}>
              <input type="email" name="sub-email" id="sub-email" required />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </section>
      </div>

      <section className={s.footerBottom}>
        <p className={s.copyright}>© 2023 by Aster Information Limited</p>

        <ul className={s.socialMedia}>
          <li>
            <a href="#">
              <img src={linkedinLogo} alt="LinkedIn logo" />
            </a>
          </li>

          <li>
            <a href="#">
              <img src={facebookLogo} alt="Facebook logo" />
            </a>
          </li>

          <li>
            <a href="#">
              <img src={twitterLogo} alt="Twitter logo" />
            </a>
          </li>

          <li>
            <a href="#">
              <img src={instagramLogo} alt="Instagram logo" />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};
export default Footer;
