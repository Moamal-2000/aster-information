import { infoSectionBg } from "src/Assets/Images/Images";
import InfoSectionContent from "./InfoSectionContent/InfoSectionContent";
import s from "./InfoStatsSection.module.scss";

const InfoStatsSection = () => {
  return (
    <section className={s.infoSection}>
      <img
        src={infoSectionBg}
        alt="Info stats section image"
        loading="lazy"
        className={s.backgroundImg}
      />

      <div className="container" data-container>
        <InfoSectionContent />
      </div>
    </section>
  );
};
export default InfoStatsSection;
