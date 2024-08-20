import useLineProperties from "src/Hooks/App/useLineProperties";
import AnimatedLine from "../../../Shared/MiniComponents/AnimatedLine/AnimatedLine";
import s from "./ServicesIntro.module.scss";

const ServicesIntro = () => {
  const { lineHeight, yAxis, animateTo, animatedLineHeight } =
    useLineProperties();

  return (
    <div className={s.servicesIntro}>
      <div className={s.animatedLine}>
        <AnimatedLine
          lineHeight={lineHeight}
          animatedLineHeight={animatedLineHeight}
          yAxis={yAxis}
          animateTo={animateTo}
          lineColors={{
            lineColor: "#707070",
            animatedLineColor: "#000",
          }}
        />
      </div>

      <div className={s.content}>
        <h2>SERVICES</h2>

        <p>
          We Deliver Exceptional Information Management Solutions Across
          Industries
        </p>
      </div>
    </div>
  );
};
export default ServicesIntro;
