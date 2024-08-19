import ServicesIntro from "./ServicesIntro/ServicesIntro";
import s from "./ServicesSection.module.scss";

const ServicesSection = () => {
  return (
    <section className={s.servicesSection}>
      <ServicesIntro />
    </section>
  );
};
export default ServicesSection;
