import useLongLineProperties from "src/Hooks/App/useLongLineProperties";
import VerticalLine from "../../../../Shared/MiniComponents/VerticalLine/VerticalLine";
import s from "./IndustryContent.module.scss";

const IndustryContent = () => {
  const { lineHeight, initialY, animateTo, animatedLineHeight } =
    useLongLineProperties();

  return (
    <div className={s.wrapper}>
      <VerticalLine
        lineHeight={lineHeight}
        animatedLineHeight={animatedLineHeight}
        initialY={initialY}
        animateTo={animateTo}
      />

      <div className={s.content}>
        <h2 className={s.title}>INDUSTRY</h2>
        <p className={s.subTitle}>Our Partners</p>

        <p className={s.description}>
          Our partners play an integral role in our success, providing
          invaluable expertise and support. These alliances enrich our services,
          fueling innovation and delivering comprehensive solutions. Together,
          we pave the path to a future driven by smart, efficient, and
          transformative information management and technology solutions.
        </p>
      </div>
    </div>
  );
};
export default IndustryContent;
