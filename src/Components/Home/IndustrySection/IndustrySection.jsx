import AnimatedLine from "../../Shared/MiniComponents/AnimatedLine/AnimatedLine";
import IndustryContent from "./IndustryContent/IndustryContent";
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
      </div>
    </section>
  );
};
export default IndustrySection;
