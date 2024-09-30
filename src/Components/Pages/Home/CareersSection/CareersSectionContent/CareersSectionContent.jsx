import useMidLineProperties from "src/Hooks/App/useMidLineProperties";
import Button from "../../../../Shared/Buttons/Button/Button";
import VerticalLine from "../../../../Shared/MiniComponents/VerticalLine/VerticalLine";
import s from "./CareersSectionContent.module.scss";

const CareersSectionContent = () => {
  const { lineHeight, initialY, animateTo, VerticalLineHeight } =
    useMidLineProperties();

  return (
    <div className={s.wrapper}>
      <VerticalLine
        lineHeight={lineHeight}
        VerticalLineHeight={VerticalLineHeight}
        initialY={initialY}
        animateTo={animateTo}
      />

      <div className={s.content}>
        <h2 className={s.title}>Careers</h2>

        <p className={s.subTitle}>
          We’re looking for innovative talent to join our team. See all
          positions and submit your CV.
        </p>

        <Button path="/careers" text="Openings" invertColors={true} />
      </div>
    </div>
  );
};
export default CareersSectionContent;
