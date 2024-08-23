import { useMemo } from "react";

const useLineStyles = ({
  lineHeight,
  yAxis,
  animateTo,
  delay,
  lineColors,
  hasAnimated,
  animatedLineHeight,
}) => {
  const lineStyles = useMemo(
    () => ({
      height: lineHeight,
      backgroundColor: lineColors?.lineColor,
    }),
    [lineHeight, lineColors?.lineColor]
  );

  const animatedLineStyles = useMemo(
    () => ({
      transitionDelay: delay || ".3s",
      top: hasAnimated ? animateTo : yAxis,
      height: animatedLineHeight,
      backgroundColor: lineColors?.animatedLineColor,
    }),
    [hasAnimated, animateTo, yAxis, lineColors?.animatedLineColor]
  );

  return { lineStyles, animatedLineStyles };
};
export default useLineStyles;
