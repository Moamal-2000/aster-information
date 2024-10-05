import { memo, useRef } from "react";
import useHasAnimatedOnScroll from "src/Hooks/App/useHasAnimatedOnScroll";
import useOnScreen from "src/Hooks/Helper/useOnScreen";
import s from "./HorizontalLine.module.scss";

const HorizontalLine = ({
  delay = "0.2s",
  transitionDuration = "1.2s",
  animatedLineWidth,
  initialX,
  animateTo,
  lineColors,
}) => {
  const lineRef = useRef();
  const isElementVisible = useOnScreen(lineRef);
  const hasAnimated = useHasAnimatedOnScroll(isElementVisible);

  return (
    <div className={s.line} ref={lineRef}>
      <div
        className={s.verticalLine}
        style={{
          transitionDelay: delay,
          transitionDuration,
          width: animatedLineWidth,
          right: hasAnimated ? animateTo : initialX,
          backgroundColor: lineColors?.lineColor,
        }}
      />
    </div>
  );
};
export default memo(HorizontalLine);
