import useLongLineProperties from "src/Hooks/App/useLongLineProperties";
import AnimatedLine from "../../../Shared/MiniComponents/AnimatedLine/AnimatedLine";
import AnimatedImage from "./AnimatedImage/AnimatedImage";
import s from "./VisionSection.module.scss";
import VisionSectionContent from "./VisionSectionContent/VisionSectionContent";

const VisionSection = () => {
  const { lineHeight, yAxis, animateTo } = useLongLineProperties();

  return (
    <section className={s.visionSection}>
      <div className="container" data-container>
        <div className={s.wrapper}>
          <div className={s.animatedLine}>
            <AnimatedLine
              lineHeight={lineHeight}
              yAxis={yAxis}
              animateTo={animateTo}
            />
          </div>
          <VisionSectionContent />
        </div>

        <AnimatedImage />
      </div>
    </section>
  );
};
export default VisionSection;
