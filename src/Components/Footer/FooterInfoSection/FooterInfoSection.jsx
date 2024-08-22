import { Link } from "react-router-dom";
import { WEBSITE_NAME } from "src/Data/variables";
import s from "./FooterInfoSection.module.scss";
import { navLinksData } from "src/Data/staticData";

const FooterInfoSection = () => {
  return (
    <section className={s.infoSection}>
      <Link to="/">{WEBSITE_NAME}</Link>

      <div className={s.wrapper}>
        <ul className={s.nav}>
          {navLinksData.map(({ id, path, text }) => (
            <li key={id}>
              <Link to={path}>{text}</Link>
            </li>
          ))}
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
