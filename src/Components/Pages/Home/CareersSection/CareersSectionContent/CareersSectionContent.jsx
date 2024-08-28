import useMidLineProperties from "src/Hooks/App/useMidLineProperties";
import Button from "../../../../Shared/Buttons/Button/Button";
import AnimatedLine from "../../../../Shared/MiniComponents/AnimatedLine/AnimatedLine";
import s from "./CareersSectionContent.module.scss";

const CareersSectionContent = () => {
  const { lineHeight, yAxis, animateTo, animatedLineHeight } =
    useMidLineProperties();

  return (
    <div className={s.content}>
      <div className={s.animatedLine}>
        <AnimatedLine
          lineHeight={lineHeight}
          animatedLineHeight={animatedLineHeight}
          yAxis={yAxis}
          animateTo={animateTo}
        />
      </div>

      <h2 className={s.title}>Careers</h2>

      <p className={s.subTitle}>
        We’re looking for innovative talent to join our team. See all positions
        and submit your CV.
      </p>

      <Button path="/careers" text="Openings" invertColors={true} />
    </div>
  );
};
export default CareersSectionContent;
