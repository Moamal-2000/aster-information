import { infoSectionBg } from "src/Assets/Images/Images";
import InfoSectionContent from "./InfoSectionContent/InfoSectionContent";
import s from "./InfoStatsSection.module.scss";

const InfoStatsSection = () => {
  return (
    <section className={s.infoSection}>
      <div className="container" data-container>
        <img
          src={infoSectionBg}
          alt="Info stats section image"
          loading="lazy"
          className={s.backgroundImg}
        />

        <InfoSectionContent />
      </div>
    </section>
  );
};
export default InfoStatsSection;
