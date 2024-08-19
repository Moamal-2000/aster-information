import s from "./Footer.module.scss";
import FooterBottom from "./FooterBottom/FooterBottom";
import FooterInfoSection from "./FooterInfoSection/FooterInfoSection";
import FooterSubscribeSection from "./FooterSubscribeSection/FooterSubscribeSection";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerDetails}>
        <FooterInfoSection />
        <FooterSubscribeSection />
      </div>

      <FooterBottom />
    </footer>
  );
};
export default Footer;
