import Partners from "./Partners/Partners";
import PartnersContent from "./PartnersContent/PartnersContent";
import s from "./PartnersSection.module.scss";

const PartnersSection = () => {
  return (
    <section className={s.partnersSection}>
      <div className="container">
        <PartnersContent />
        <Partners />
      </div>
    </section>
  );
};
export default PartnersSection;
