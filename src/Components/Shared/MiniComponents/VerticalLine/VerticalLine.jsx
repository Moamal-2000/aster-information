import { memo, useRef } from "react";
import useHasAnimatedOnScroll from "src/Hooks/App/useHasAnimatedOnScroll";
import useLineStyles from "src/Hooks/App/useLineStyles";
import useOnScreen from "src/Hooks/Helper/useOnScreen";
import s from "./VerticalLine.module.scss";

const VerticalLine = ({
  lineHeight,
  VerticalLineHeight,
  initialY,
  animateTo,
  delay,
  lineColors,
  isPositioned = true,
}) => {
  const lineRef = useRef();
  const [lineHeightValue, lineHeightUnit] = lineHeight.match(/\d+|.+/g);
  const rootMargin = `${+lineHeightValue - 150}${lineHeightUnit}`;
  const isElementVisible = useOnScreen(lineRef, { rootMargin, threshold: 1 });
  const hasAnimated = useHasAnimatedOnScroll(isElementVisible);

  const { lineStyles, VerticalLineStyles } = useLineStyles({
    lineHeight,
    initialY,
    animateTo,
    delay,
    lineColors,
    hasAnimated,
    VerticalLineHeight,
  });

  return (
    <>
      {isPositioned && (
        <div className={s.lineContainer}>
          <div className={s.line} ref={lineRef} style={lineStyles}>
            <div className={s.VerticalLine} style={VerticalLineStyles} />
          </div>
        </div>
      )}

      {!isPositioned && (
        <div className={s.line} ref={lineRef} style={lineStyles}>
          <div className={s.VerticalLine} style={VerticalLineStyles} />
        </div>
      )}
    </>
  );
};
export default memo(VerticalLine);
