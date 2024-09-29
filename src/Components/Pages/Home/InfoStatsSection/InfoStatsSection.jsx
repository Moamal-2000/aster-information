import { infoSectionBg } from "src/Assets/Images/Images";
import InfoSectionContent from "./InfoSectionContent/InfoSectionContent";
import s from "./InfoStatsSection.module.scss";

const InfoStatsSection = () => {
  return (
    <section className={s.infoSection}>
      <img
        src={infoSectionBg}
        alt="Human hand and robotic hand engaged in a handshake, symbolizing collaboration between humans and machines."
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
