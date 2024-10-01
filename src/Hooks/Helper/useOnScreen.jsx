import { useEffect, useState } from "react";

function useOnScreen(ref, { rootMargin = "0px", threshold = 1 } = {}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin, threshold }
    );

    observer.observe(currentRef);

    return () => {
      if (!currentRef) return;
      observer.unobserve(currentRef);
    };
  }, [ref, rootMargin, threshold]);

  return isVisible;
}

export default useOnScreen;
