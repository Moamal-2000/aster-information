import IndustryContent from "./IndustryContent/IndustryContent";
import IndustryLogos from "./IndustryLogos/IndustryLogos";
import s from "./IndustrySection.module.scss";

const IndustrySection = () => {
  return (
    <section className={s.industrySection}>
      <div className="container" data-container>
        <IndustryContent />
        <IndustryLogos />
      </div>
    </section>
  );
};
export default IndustrySection;
