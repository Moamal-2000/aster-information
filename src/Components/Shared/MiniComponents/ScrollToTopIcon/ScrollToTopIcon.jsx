import { useState } from "react";
import { HIDE_SCROLL_TOP_MS } from "src/Data/variables";
import { scrollToTop } from "src/Functions/componentsFunctions";
import useEventListener from "src/Hooks/Helper/useEventListener";
import s from "./ScrollToTopIcon.module.scss";

const ScrollToTopIcon = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const activeClass = isScrolling ? s.active : "";
  let timerId;

  function handleScrollBtnAppearance() {
    clearTimeout(timerId);
    setIsScrolling(true);
    timerId = setTimeout(() => setIsScrolling(false), HIDE_SCROLL_TOP_MS);
  }

  useEventListener(window, "scroll", handleScrollBtnAppearance);

  return (
    <button
      type="button"
      className={`${s.button} ${activeClass}`}
      onClick={scrollToTop}
    ></button>
  );
};
export default ScrollToTopIcon;
