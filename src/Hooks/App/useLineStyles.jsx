import { useMemo } from "react";

const useLineStyles = ({
  lineHeight,
  initialY,
  animateTo,
  delay,
  lineColors,
  hasAnimated,
  VerticalLineHeight,
}) => {
  const lineStyles = useMemo(
    () => ({
      height: lineHeight,
      backgroundColor: lineColors?.lineColor,
    }),
    [lineHeight, lineColors?.lineColor]
  );

  const VerticalLineStyles = useMemo(
    () => ({
      transitionDelay: delay || ".3s",
      top: hasAnimated ? animateTo : initialY,
      height: VerticalLineHeight,
      backgroundColor: lineColors?.VerticalLineColor,
    }),
    [hasAnimated, animateTo, initialY, lineColors?.VerticalLineColor]
  );

  return { lineStyles, VerticalLineStyles };
};
export default useLineStyles;
