import AnimatedLine from "../../Shared/MiniComponents/AnimatedLine/AnimatedLine";
import IndustryContent from "./IndustryContent/IndustryContent";
import IndustryLogos from "./IndustryLogos/IndustryLogos";
import s from "./IndustrySection.module.scss";

const IndustrySection = () => {
  return (
    <section className={s.industrySection}>
      <div className="container" data-container>
        <div className={s.animatedLine}>
          <AnimatedLine
            lineHeight="444px"
            animatedLineHeight="86px"
            yAxis="100px"
            animateTo="60px"
          />
        </div>
        <IndustryContent />

        <IndustryLogos />
      </div>
    </section>
  );
};
export default IndustrySection;
