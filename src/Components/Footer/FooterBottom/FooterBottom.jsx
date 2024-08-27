import { useMemo } from "react";
import SocialMedia from "../../Shared/MiniComponents/SocialMedia/SocialMedia";
import s from "./FooterBottom.module.scss";

const FooterBottom = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <section className={s.footerBottom}>
      <p className={s.copyright}>
        © {currentYear} by Aster Information Limited
      </p>
      <SocialMedia />
    </section>
  );
};
export default FooterBottom;
