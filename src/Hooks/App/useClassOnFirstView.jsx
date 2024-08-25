import { useMemo } from "react";
import useOnScreen from "../Helper/useOnScreen";
import useHasAnimatedOnScroll from "./useHasAnimatedOnScroll";

const useClassOnFirstView = (ref, cssModule, className = "active") => {
  const isElementVisible = useOnScreen(ref);
  const hasAnimated = useHasAnimatedOnScroll(isElementVisible);

  const activeClass = useMemo(
    () => (hasAnimated ? cssModule[className] : ""),
    [hasAnimated, cssModule.active]
  );

  return activeClass;
};

export default useClassOnFirstView;
