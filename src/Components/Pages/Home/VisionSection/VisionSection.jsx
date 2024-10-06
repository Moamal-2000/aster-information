import useLongLineProperties from "src/Hooks/App/useLongLineProperties";
import VerticalLine from "../../../Shared/MiniComponents/VerticalLine/VerticalLine";
import AnimatedImage from "./AnimatedImage/AnimatedImage";
import s from "./VisionSection.module.scss";
import VisionSectionContent from "./VisionSectionContent/VisionSectionContent";

const VisionSection = () => {
  const { lineHeight, initialY, animateTo } = useLongLineProperties();

  return (
    <section className={s.visionSection}>
      <div className="container" data-container>
        <div className={s.wrapper}>
          <VerticalLine
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
