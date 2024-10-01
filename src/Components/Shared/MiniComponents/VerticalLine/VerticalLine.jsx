import { memo, useRef } from "react";
import useHasAnimatedOnScroll from "src/Hooks/App/useHasAnimatedOnScroll";
import useLineStyles from "src/Hooks/App/useLineStyles";
import useOnScreen from "src/Hooks/Helper/useOnScreen";
import s from "./VerticalLine.module.scss";

const VerticalLine = ({
  lineHeight,
  animatedLineHeight,
  initialY,
  animateTo,
  delay,
  lineColors,
  isPositioned = true,
}) => {
  const lineRef = useRef();
  const [lineHeightValue, lineHeightUnit] = lineHeight.match(/\d+|.+/g) || [];
  const rootMargin = `${+lineHeightValue - 150}${lineHeightUnit}`;
  const isElementVisible = useOnScreen(lineRef, { rootMargin, threshold: 1 });
  const hasAnimated = useHasAnimatedOnScroll(isElementVisible);

  const { lineStyles, animatedLineStyles } = useLineStyles({
    lineHeight,
    initialY,
    animateTo,
    delay,
    lineColors,
    hasAnimated,
    animatedLineHeight,
  });

  return (
    <div className={isPositioned ? s.lineContainer : ""}>
      <div className={s.line} ref={lineRef} style={lineStyles}>
        <div className={s.VerticalLine} style={animatedLineStyles} />
      </div>
    </div>
  );
};
export default memo(VerticalLine);
