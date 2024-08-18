import { useEffect, useRef, useState } from "react";
import useOnScreen from "src/Hooks/Helper/useOnScreen";
import s from "./AnimatedLine.module.scss";

const AnimatedLine = ({ lineHeight, yAxis, animateTo }) => {
  const lineRef = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [lineHeightValue, lineHeightUnit] = lineHeight.match(/\d+|.+/g);
  const rootMargin = +lineHeightValue - 150 + lineHeightUnit;
  const isVisible = useOnScreen(lineRef, { rootMargin, threshold: 1 });
  const topValue = hasAnimated ? animateTo : yAxis;

  useEffect(() => {
    if (isVisible && !hasAnimated) setHasAnimated(true);
  }, [isVisible, hasAnimated]);

  return (
    <div className={s.line} ref={lineRef} style={{ height: lineHeight }}>
      <div className={s.animatedLine} style={{ top: topValue }}></div>
    </div>
  );
};
export default AnimatedLine;
