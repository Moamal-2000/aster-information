import { useRef } from "react";
import useHasAnimatedOnScroll from "src/Hooks/App/useHasAnimatedOnScroll";
import useOnScreen from "src/Hooks/Helper/useOnScreen";
import s from "./HorizontalAnimatedLine.module.scss";

const HorizontalAnimatedLine = ({ delay = "0.2s" }) => {
  const lineRef = useRef();
  const isElementVisible = useOnScreen(lineRef);
  const hasAnimated = useHasAnimatedOnScroll(isElementVisible);
  const activeClass = hasAnimated ? s.active : "";

  return (
    <div className={`${s.line} ${activeClass}`} ref={lineRef}>
      <div className={s.animatedLine} style={{ transitionDelay: `${delay}` }} />
    </div>
  );
};
export default HorizontalAnimatedLine;
