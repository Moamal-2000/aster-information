import s from "./InfoSectionContent.module.scss";

const InfoSectionContent = () => {
  return (
    <div className={s.content}>
      <h2>Aster Info In Numbers</h2>

      <div className={s.stats}>
        <div className={s.stat}>
          <span>5</span>

          {/* <horizontalAnimatedLine /> */}
          <div className={s.line}>
            <div className={s.animatedLine}></div>
          </div>

          <h3>EMPLOYEES</h3>
        </div>
      </div>
    </div>
  );
};
export default InfoSectionContent;
