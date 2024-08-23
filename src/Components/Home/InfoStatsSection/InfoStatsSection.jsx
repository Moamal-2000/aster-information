import InfoSectionContent from "./InfoSectionContent/InfoSectionContent";
import s from "./InfoStatsSection.module.scss";

const InfoStatsSection = () => {
  return (
    <section className={s.infoSection}>
      <div className={s.backgroundImg} />

      <div className="container" data-container>
        <InfoSectionContent />
      </div>
    </section>
  );
};
export default InfoStatsSection;
