import { useMemo } from "react";
import useOnScreen from "../Helper/useOnScreen";
import useHasAnimatedOnScroll from "./useHasAnimatedOnScroll";

const useClassOnFirstView = ({
  elementRef,
  cssModule,
  option,
  className = "active",
}) => {
  const isElementVisible = useOnScreen(elementRef, option);
  const hasAnimated = useHasAnimatedOnScroll(isElementVisible);

  const activeClass = useMemo(
    () => (hasAnimated ? cssModule[className] : ""),
    [hasAnimated, cssModule.active]
  );

  // console.log(cssModule);
  // console.log(cssModule.active);

  return activeClass;
};

export default useClassOnFirstView;
