import { useMemo } from "react";
import { SCREEN_SIZES } from "src/Data/variables";
import useGetResizeWindow from "src/Hooks/Helper/useGetResizeWindow";

const useLongLineProperties = () => {
  const { windowWidth } = useGetResizeWindow();
  const linePropertiesMemo = useMemo(() => {
    if (windowWidth >= SCREEN_SIZES.tablet) {
      return {
        lineHeight: "470px",
        initialY: "150px",
        animateTo: "70px",
        animatedLineHeight: "129px",
      };
    }

    return {
      lineHeight: "380px",
      initialY: "120px",
      animateTo: "46px",
      animatedLineHeight: "102px",
    };
  }, [windowWidth]);

  return linePropertiesMemo;
};
export default useLongLineProperties;
