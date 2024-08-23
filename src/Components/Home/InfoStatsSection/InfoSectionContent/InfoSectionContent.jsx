import { infoStatsData } from "src/Data/staticData";
import HorizontalAnimatedLine from "../../../Shared/MiniComponents/horizontalAnimatedLine/horizontalAnimatedLine";
import s from "./InfoSectionContent.module.scss";

const InfoSectionContent = () => {
  return (
    <div className={s.content}>
      <h2>Aster Info In Numbers</h2>

      <div className={s.stats}>
        {infoStatsData.map(({ id, title, value }) => (
          <div className={s.stat} key={id}>
            <span>{value}</span>
            <HorizontalAnimatedLine />
            <h3>{title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default InfoSectionContent;
