import { useMemo } from "react";

const useLineStyles = ({
  lineHeight,
  initialY,
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
      top: hasAnimated ? animateTo : initialY,
      height: animatedLineHeight,
      backgroundColor: lineColors?.animatedLineColor,
    }),
    [hasAnimated, animateTo, initialY, lineColors?.animatedLineColor]
  );

  return { lineStyles, animatedLineStyles };
};
export default useLineStyles;
