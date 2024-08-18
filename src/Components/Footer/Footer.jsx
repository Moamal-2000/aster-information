import { Link } from "react-router-dom";
import {
  facebookLogo,
  instagramLogo,
  linkedinLogo,
  twitterLogo,
} from "src/Assets/Images/Images";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerDetails}>
        <section className={s.infoSection}>
          <Link to="/">ASTER INFORMATION</Link>

          <div className={s.wrapper}>
            <ul className={s.nav}>
              <li>
                <Link to="/technology">Technology</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
            </ul>

            <div className={s.details}>
              <span>Tel: +‭1 (949) 682-9479‬</span>
              <a href="mailto:info@asterinformation.com">
                info@asterinformation.com
              </a>
              <p>
                Suite 4, 2nd Floor, The West Wing, Montarik House, 3 Bedlam
                Court, GX1 1 1AA, Gibraltar
              </p>
            </div>
          </div>
        </section>

        <section className={s.subscribeSection}>
          <h2>SUBSCRIBE</h2>
          <p>Sign up to receive Autono news and updates.</p>

          <form className={s.subEmailForm}>
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
