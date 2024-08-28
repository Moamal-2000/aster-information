import { CURRENT_YEAR } from "src/Data/variables";
import SocialMedia from "../../Shared/MiniComponents/SocialMedia/SocialMedia";
import s from "./FooterBottom.module.scss";

const FooterBottom = () => {
  return (
    <section className={s.footerBottom}>
      <p className={s.copyright}>
        © {CURRENT_YEAR} by Aster Information Limited
      </p>
      <SocialMedia />
    </section>
  );
};
export default FooterBottom;
