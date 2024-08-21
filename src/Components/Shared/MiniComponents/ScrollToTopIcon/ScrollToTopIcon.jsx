import { useState } from "react";
import { HIDE_SCROLL_TOP_MS } from "src/Data/variables";
import useEventListener from "src/Hooks/Helper/useEventListener";
import SvgIcon from "../SvgIcon";
import s from "./ScrollToTopIcon.module.scss";

const ScrollToTopIcon = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const activeClass = isScrolling ? s.active : "";
  let timerId;

  useEventListener(window, "scroll", () => {
    clearTimeout(timerId);
    setIsScrolling(true);
    timerId = setTimeout(() => setIsScrolling(false), HIDE_SCROLL_TOP_MS);
  });

  return (
    <button type="button" className={`${s.button} ${activeClass}`}>
      <SvgIcon name="arrowTop" />
    </button>
  );
};
export default ScrollToTopIcon;
