import { useCallback, useRef, useState } from "react";
import { useGlobalContext } from "src/Context/GlobalContext";
import { HIDE_SCROLL_TOP_MS } from "src/Data/variables";
import { scrollToTop } from "src/Functions/componentsFunctions";
import useEventListener from "src/Hooks/Helper/useEventListener";
import s from "./ScrollToTopIcon.module.scss";

const ScrollToTopIcon = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const activeClass = isScrolling ? s.active : "";
  const scrollDebounceTimer = useRef();
  const { setIsHeaderActive } = useGlobalContext();

  const handleScrollBtnAppearance = useCallback(() => {
    clearTimeout(scrollDebounceTimer.current);
    setIsScrolling(true);

    scrollDebounceTimer.current = setTimeout(() => {
      setIsScrolling(false);
    }, HIDE_SCROLL_TOP_MS);
  }, [isScrolling]);

  function handleClickScrollBtn() {
    setIsHeaderActive(false);
    scrollToTop();
  }

  useEventListener(window, "scroll", handleScrollBtnAppearance);

  return (
    <button
      type="button"
      className={`${s.button} ${activeClass}`}
      onClick={handleClickScrollBtn}
      aria-label="Scroll to top"
    />
  );
};
export default ScrollToTopIcon;
