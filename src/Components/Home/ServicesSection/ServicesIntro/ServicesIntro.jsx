import AnimatedLine from "../../../Shared/MiniComponents/AnimatedLine/AnimatedLine";
import s from "./ServicesIntro.module.scss";

const ServicesIntro = () => {
  return (
    <div className={s.servicesIntro}>
      <AnimatedLine
        lineHeight="200px"
        yAxis="150px"
        animateTo="40px"
        lineColors={{
          lineColor: "#707070",
          animatedLineColor: "#000",
        }}
      />

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
