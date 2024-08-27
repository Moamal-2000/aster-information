import { memo, useRef } from "react";
import useHasAnimatedOnScroll from "src/Hooks/App/useHasAnimatedOnScroll";
import useLineStyles from "src/Hooks/App/useLineStyles";
import useOnScreen from "src/Hooks/Helper/useOnScreen";
import s from "./AnimatedLine.module.scss";

const AnimatedLine = ({
  lineHeight,
  animatedLineHeight,
  yAxis,
  animateTo,
  delay,
  lineColors,
}) => {
  const lineRef = useRef();
  const [lineHeightValue, lineHeightUnit] = lineHeight.match(/\d+|.+/g);
  const rootMargin = `${+lineHeightValue - 150}${lineHeightUnit}`;
  const isElementVisible = useOnScreen(lineRef, { rootMargin, threshold: 1 });
  const hasAnimated = useHasAnimatedOnScroll(isElementVisible);

  const { lineStyles, animatedLineStyles } = useLineStyles({
    lineHeight,
    yAxis,
    animateTo,
    delay,
    lineColors,
    hasAnimated,
    animatedLineHeight,
  });

  return (
    <div className={s.line} ref={lineRef} style={lineStyles}>
      <div className={s.animatedLine} style={animatedLineStyles} />
    </div>
  );
};
export default memo(AnimatedLine);
