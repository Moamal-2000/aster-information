import AnimatedLine from "../../Shared/MiniComponents/AnimatedLine/AnimatedLine";
import AnimatedImage from "./AnimatedImage/AnimatedImage";
import s from "./VisionSection.module.scss";
import VisionSectionContent from "./VisionSectionContent/VisionSectionContent";

const VisionSection = () => {
  return (
    <section className={s.visionSection}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.animatedLine}>
            <AnimatedLine lineHeight="470px" yAxis="150px" animateTo="70px" />
          </div>
          <VisionSectionContent />
        </div>

        <AnimatedImage />
      </div>
    </section>
  );
};
export default VisionSection;
