import { useEffect, useState } from "react";

const useHasAnimatedOnScroll = (isElementVisible) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isElementVisible && !hasAnimated) setHasAnimated(true);
  }, [isElementVisible, hasAnimated]);

  return hasAnimated;
};
export default useHasAnimatedOnScroll;
