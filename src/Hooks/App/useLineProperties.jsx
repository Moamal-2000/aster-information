import { useMemo } from "react";
import { SCREEN_SIZES } from "src/Data/variables";
import useGetResizeWindow from "src/Hooks/Helper/useGetResizeWindow";

const useLineProperties = () => {
  const { windowWidth } = useGetResizeWindow();
  const linePropertiesMemo = useMemo(() => {
    if (windowWidth >= SCREEN_SIZES.tablet) {
      return {
        lineHeight: "194px",
        yAxis: "130px",
        animateTo: "65px",
        animatedLineHeight: "129px",
      };
    }

    return {
      lineHeight: "160px",
      yAxis: "100px",
      animateTo: "58px",
      animatedLineHeight: "102px",
    };
  }, [windowWidth]);

  return linePropertiesMemo;
};
export default useLineProperties;