import Services from "./Services/Services";
import ServicesIntro from "./ServicesIntro/ServicesIntro";
import s from "./ServicesSection.module.scss";

const ServicesSection = () => {
  return (
    <section className={s.servicesSection}>
      <div className="container">
        <ServicesIntro />
      </div>

      <Services />
    </section>
  );
};
export default ServicesSection;
