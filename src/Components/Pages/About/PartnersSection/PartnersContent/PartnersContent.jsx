import VerticalLine from "../../../../Shared/MiniComponents/VerticalLine/VerticalLine";
import s from "./PartnersContent.module.scss";

const PartnersContent = () => {
  return (
    <div className={s.wrapper}>
      <VerticalLine
        lineHeight="105px"
        VerticalLineHeight="43px"
        initialY="90px"
        animateTo="62px"
      />

      <div className={s.content}>
        <h2 className={s.title}>PARTNERS</h2>
        <p className={s.description}>Our Valued Partners</p>
      </div>
    </div>
  );
};
export default PartnersContent;
