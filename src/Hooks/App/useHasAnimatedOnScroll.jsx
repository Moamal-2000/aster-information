import { useEffect, useState } from "react";

const useHasAnimatedOnScroll = (isElementVisible) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isElementVisible && !hasAnimated) setHasAnimated(true);
  }, [isElementVisible]);

  return hasAnimated;
};
export default useHasAnimatedOnScroll;
