import { useMemo } from "react";

const useLineStyles = ({
  lineHeight,
  yAxis,
  animateTo,
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
      top: hasAnimated ? animateTo : yAxis,
      height: animatedLineHeight,
      backgroundColor: lineColors?.animatedLineColor,
    }),
    [hasAnimated, animateTo, yAxis, lineColors?.animatedLineColor]
  );

  return { lineStyles, animatedLineStyles };
};
export default useLineStyles;
