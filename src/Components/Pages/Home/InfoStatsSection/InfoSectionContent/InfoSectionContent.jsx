import { infoStatsData } from "src/Data/staticData";
import s from "./InfoSectionContent.module.scss";
import InfoSectionStat from "./InfoSectionStat/InfoSectionStat";

const InfoSectionContent = () => {
  return (
    <div className={s.content}>
      <h2>Aster Info In Numbers</h2>

      <div className={s.stats}>
        {infoStatsData.map((stat) => (
          <InfoSectionStat key={stat.id} stat={stat} />
        ))}
      </div>
    </div>
  );
};
export default InfoSectionContent;
