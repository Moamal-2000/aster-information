import {
  facebookLogo,
  instagramLogo,
  linkedinLogo,
  twitterLogo,
} from "src/Assets/Images/Images";
import s from "./FooterBottom.module.scss";

const FooterBottom = () => {
  return (
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
  );
};
export default FooterBottom;
