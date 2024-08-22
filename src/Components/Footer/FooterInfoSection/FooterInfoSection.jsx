import { Link } from "react-router-dom";
import { WEBSITE_NAME } from "src/Data/variables";
import s from "./FooterInfoSection.module.scss";

const FooterInfoSection = () => {
  return (
    <section className={s.infoSection}>
      <Link to="/">{WEBSITE_NAME}</Link>

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
            Suite 4, 2nd Floor, The West Wing, Montarik House, 3 Bedlam Court,
            GX1 1 1AA, Gibraltar
          </p>
        </div>
      </div>
    </section>
  );
};
export default FooterInfoSection;
