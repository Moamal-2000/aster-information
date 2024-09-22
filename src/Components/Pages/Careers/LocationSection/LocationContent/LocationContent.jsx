import useLongLineProperties from "src/Hooks/App/useLongLineProperties";
import AnimatedLine from "../../../../Shared/MiniComponents/AnimatedLine/AnimatedLine";
import s from "./LocationContent.module.scss";

const LocationContent = () => {
  const { lineHeight, initialY, animateTo, animatedLineHeight } =
    useLongLineProperties();

  return (
    <div className={s.wrapper}>
      <AnimatedLine
        lineHeight={lineHeight}
        animatedLineHeight={animatedLineHeight}
        initialY={initialY}
        animateTo={animateTo}
        lineColors={{
          lineColor: "#707070",
          animatedLineColor: "#000",
        }}
      />

      <div className={s.content}>
        <h2 className={s.title}>LOCATION</h2>
        <p className={s.subTitle}>Embracing Remote Possibilities</p>
        <p className={s.description}>
          We're a global team, united by technology. With Aster Information
          Limited, geographic boundaries blur as we collaborate, innovate, and
          create from wherever we are. Welcome to a company truly without
          borders, where every day is a journey into the future of remote work
          and data management.
        </p>
      </div>
    </div>
  );
};
export default LocationContent;
