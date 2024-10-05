import { useState } from "react";
import useEventListener from "src/Hooks/Helper/useEventListener";

const useScrollActiveClass = (cssModule, className = "active") => {
  const [shouldShow, setShouldShow] = useState(false);
  const activeClass = shouldShow ? cssModule[className] : "";

  useEventListener(
    window,
    "scroll",
    () => {
      const pageHeight = document.documentElement.offsetHeight;
      const isAtVeryBottom =
        window.scrollY + window.innerHeight + 100 >= pageHeight;
      const isAtVeryTop = window.scrollY <= 0;

      setShouldShow(!(isAtVeryBottom || isAtVeryTop));
    },
    []
  );

  return activeClass;
};
export default useScrollActiveClass;
