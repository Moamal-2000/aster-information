import SocialMedia from "../../Shared/MiniComponents/SocialMedia/SocialMedia";
import s from "./FooterBottom.module.scss";

const FooterBottom = () => {
  return (
    <section className={s.footerBottom}>
      <p className={s.copyright}>© 2024 by Aster Information Limited</p>
      <SocialMedia />
    </section>
  );
};
export default FooterBottom;
