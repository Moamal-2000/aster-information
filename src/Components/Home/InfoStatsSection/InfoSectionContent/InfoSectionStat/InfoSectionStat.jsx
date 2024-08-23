import { useRef } from "react";
import useHasAnimatedOnScroll from "src/Hooks/App/useHasAnimatedOnScroll";
import useOnScreen from "src/Hooks/Helper/useOnScreen";
import HorizontalAnimatedLine from "../../../../Shared/MiniComponents/horizontalAnimatedLine/horizontalAnimatedLine";
import s from "./InfoSectionStat.module.scss";

const InfoSectionStat = ({ stat: { title, value, lineDelay } }) => {
  const lineRef = useRef();
  const isElementVisible = useOnScreen(lineRef);
  const hasAnimated = useHasAnimatedOnScroll(isElementVisible);
  const activeClass = hasAnimated ? s.active : "";

  return (
    <div className={s.stat}>
      <span className={activeClass} ref={lineRef}>
        {value}
      </span>
      <HorizontalAnimatedLine delay={lineDelay} />
      <h3>{title}</h3>
    </div>
  );
};
export default InfoSectionStat;
