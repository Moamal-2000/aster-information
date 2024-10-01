import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { HIDE_SCROLL_TOP_MS } from "src/Data/variables";
import { updateGlobalState } from "src/Features/globalSlice";
import { scrollToTop } from "src/Functions/componentsFunctions";
import useEventListener from "src/Hooks/Helper/useEventListener";
import s from "./ScrollToTopIcon.module.scss";

const ScrollToTopIcon = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const activeClass = isScrolling ? s.active : "";
  const scrollDebounceTimer = useRef();
  const dispatch = useDispatch();

  function handleScrollBtnAppearance() {
    clearTimeout(scrollDebounceTimer.current);
    setIsScrolling(true);

    scrollDebounceTimer.current = setTimeout(() => {
      setIsScrolling(false);
    }, HIDE_SCROLL_TOP_MS);
  }

  function handleClickScrollBtn() {
    dispatch(updateGlobalState({ key: "isHeaderActive", value: false }));
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
