import { useMemo } from "react";
import { SCREEN_SIZES } from "src/Data/variables";
import useGetResizeWindow from "src/Hooks/Helper/useGetResizeWindow";

const useMidLineProperties = () => {
  const { windowWidth } = useGetResizeWindow();
  const linePropertiesMemo = useMemo(() => {
    if (windowWidth >= SCREEN_SIZES.tablet) {
      return {
        lineHeight: "360px",
        initialY: "140px",
        animateTo: "55px",
        animatedLineHeight: "180px",
      };
    }

    return {
      lineHeight: "274px",
      initialY: "120px",
      animateTo: "46px",
      animatedLineHeight: "150px",
    };
  }, [windowWidth]);

  return linePropertiesMemo;
};
export default useMidLineProperties;
