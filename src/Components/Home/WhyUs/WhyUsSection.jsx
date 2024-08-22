import AnimatedLine from "../../Shared/MiniComponents/AnimatedLine/AnimatedLine";
import WhyUsContent from "./WhyUsContent/WhyUsContent";
import s from "./WhyUsSection.module.scss";

const WhyUsSection = () => {
  return (
    <section className={s.whyUsSection}>
      <div className={s.backgroundImg} />

      <div className="container">
        <div className={s.card}>
          <div className={s.animatedLine}>
            <AnimatedLine
              lineHeight="505px"
              yAxis="150px"
              animateTo="60px"
              lineColors={{
                lineColor: "#b4b4b4",
                animatedLineColor: "#fff",
              }}
            />
          </div>

          <WhyUsContent />
        </div>
      </div>
    </section>
  );
};
export default WhyUsSection;
