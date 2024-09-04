import useLongLineProperties from "src/Hooks/App/useLongLineProperties";
import AnimatedLine from "../../../Shared/MiniComponents/AnimatedLine/AnimatedLine";
import AnimatedImage from "./AnimatedImage/AnimatedImage";
import s from "./VisionSection.module.scss";
import VisionSectionContent from "./VisionSectionContent/VisionSectionContent";

const VisionSection = () => {
  const { lineHeight, initialY, animateTo } = useLongLineProperties();

  return (
    <section className={s.visionSection}>
      <div className="container" data-container>
        <div className={s.wrapper}>
          <AnimatedLine
            lineHeight={lineHeight}
            initialY={initialY}
            animateTo={animateTo}
          />
          <VisionSectionContent />
        </div>

        <AnimatedImage />
      </div>
    </section>
  );
};
export default VisionSection;
