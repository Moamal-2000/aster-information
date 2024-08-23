import { infoStatsData } from "src/Data/staticData";
import s from "./InfoSectionContent.module.scss";

const InfoSectionContent = () => {
  return (
    <div className={s.content}>
      <h2>Aster Info In Numbers</h2>

      <div className={s.stats}>
        {infoStatsData.map(({ id, title, value }) => (
          <div className={s.stat} key={id}>
            <span>{value}</span>
            {/* <horizontalAnimatedLine /> */}
            <div className={s.line}>
              <div className={s.animatedLine}></div>
            </div>
            <h3>{title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default InfoSectionContent;
