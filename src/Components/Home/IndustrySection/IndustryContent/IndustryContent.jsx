import AnimatedLine from "../../../Shared/MiniComponents/AnimatedLine/AnimatedLine";
import s from "./IndustryContent.module.scss";

const IndustryContent = () => {
  return (
    <div className={s.content}>
      <div className={s.animatedLine}>
        <AnimatedLine
          lineHeight="444px"
          animatedLineHeight="86px"
          yAxis="100px"
          animateTo="60px"
        />
      </div>

      <h2 className={s.title}>INDUSTRY</h2>
      <p className={s.subTitle}>Our Partners</p>

      <p className={s.description}>
        Our partners play an integral role in our success, providing invaluable
        expertise and support. These alliances enrich our services, fueling
        innovation and delivering comprehensive solutions. Together, we pave the
        path to a future driven by smart, efficient, and transformative
        information management and technology solutions.
      </p>
    </div>
  );
};
export default IndustryContent;
