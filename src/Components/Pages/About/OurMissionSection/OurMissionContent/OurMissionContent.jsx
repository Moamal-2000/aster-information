import useLongLineProperties from "src/Hooks/App/useLongLineProperties";
import VerticalLine from "../../../../Shared/MiniComponents/VerticalLine/VerticalLine";
import s from "./OurMissionContent.module.scss";

const OurMissionContent = () => {
  const { lineHeight, initialY, animateTo, animatedLineHeight } =
    useLongLineProperties();

  return (
    <div className={s.wrapper}>
      <VerticalLine
        lineHeight={lineHeight}
        animatedLineHeight={animatedLineHeight}
        initialY={initialY}
        animateTo={animateTo}
        lineColors={{
          lineColor: "#707070",
          VerticalLineColor: "#000",
        }}
      />

      <div className={s.content}>
        <h2 className={s.title}>OUR MISSION</h2>
        <p className={s.subTitle}>Pioneering a New Data Frontier</p>

        <p className={s.description}>
          Our mission at Aster Information Limited is to redefine the landscape
          of data and information management. We strive to leverage cutting-edge
          AI technology and innovative strategies to offer unparalleled IT
          consultation and software development solutions. We're dedicated to
          empowering businesses, enhancing operational efficiency, and driving
          strategic growth in a data-driven world.
        </p>
      </div>
    </div>
  );
};
export default OurMissionContent;
