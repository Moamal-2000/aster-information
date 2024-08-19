import { useEffect, useRef, useState } from "react";
import useLineStyles from "src/Hooks/App/useLineStyles";
import useOnScreen from "src/Hooks/Helper/useOnScreen";
import s from "./AnimatedLine.module.scss";

const AnimatedLine = ({ lineHeight, yAxis, animateTo, lineColors }) => {
  const lineRef = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [lineHeightValue, lineHeightUnit] = lineHeight.match(/\d+|.+/g);
  const rootMargin = `${+lineHeightValue - 150}${lineHeightUnit}`;
  const isVisible = useOnScreen(lineRef, { rootMargin, threshold: 1 });

  const { lineStyles, animatedLineStyles } = useLineStyles({
    lineHeight,
    yAxis,
    animateTo,
    lineColors,
    hasAnimated,
  });

  useEffect(() => {
    if (isVisible && !hasAnimated) setHasAnimated(true);
  }, [isVisible, hasAnimated]);

  return (
    <div className={s.line} ref={lineRef} style={lineStyles}>
      <div className={s.animatedLine} style={animatedLineStyles} />
    </div>
  );
};
export default AnimatedLine;
