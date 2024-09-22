import AnimatedLine from "../../../../Shared/MiniComponents/AnimatedLine/AnimatedLine";
import s from "./PartnersContent.module.scss";

const PartnersContent = () => {
  return (
    <div className={s.wrapper}>
      <AnimatedLine
        lineHeight="320px"
        animatedLineHeight="258px"
        initialY="150px"
        animateTo="60px"
      />

      <div className={s.content}>
        <h2 className={s.title}>PARTNERS</h2>
        <p className={s.description}>Our Valued Partners</p>
      </div>
    </div>
  );
};
export default PartnersContent;
