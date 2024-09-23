import useLongLineProperties from "src/Hooks/App/useLongLineProperties";
import AnimatedLine from "../../../../Shared/MiniComponents/AnimatedLine/AnimatedLine";
import s from "./JobsSectionContent.module.scss";

const JobsSectionContent = () => {
  const { lineHeight, initialY, animateTo, animatedLineHeight } =
    useLongLineProperties();

  return (
    <div className={s.wrapper}>
      <AnimatedLine
        lineHeight={lineHeight}
        animatedLineHeight={animatedLineHeight}
        initialY={initialY}
        animateTo={animateTo}
      />

      <div className={s.content}>
        <h2 className={s.title}>JOB OPENINGS</h2>
        <p className={s.subTitle}>
          Shaping the Future of Information Management
        </p>
        <p className={s.description}>
          Embrace the opportunity to redefine the boundaries of data and
          technology with Aster Information Limited. Each role in our team is
          pivotal in crafting innovative, AI-infused solutions that
          fundamentally transform businesses and drive strategic growth. Be part
          of our journey as we pioneer a new era of Information Management.
        </p>
      </div>
    </div>
  );
};
export default JobsSectionContent;
