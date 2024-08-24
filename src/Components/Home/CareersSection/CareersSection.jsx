import s from "./CareersSection.module.scss";
import CareersSectionContent from "./CareersSectionContent/CareersSectionContent";

const CareersSection = () => {
  return (
    <section className={s.careersSection}>
      <div className="container" data-container>
        <CareersSectionContent />
      </div>
    </section>
  );
};
export default CareersSection;
