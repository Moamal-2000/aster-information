import s from "./CareersSection.module.scss";
import CareersSectionContent from "./CareersSectionContent/CareersSectionContent";
import CareersSlider from "./CareersSlider/CareersSlider";

const CareersSection = () => {
  return (
    <section className={s.careersSection}>
      <div className="container" data-container>
        <CareersSectionContent />
        <CareersSlider />
      </div>
    </section>
  );
};
export default CareersSection;
