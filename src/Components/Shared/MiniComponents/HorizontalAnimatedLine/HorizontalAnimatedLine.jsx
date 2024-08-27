import { memo, useRef } from "react";
import useClassOnFirstView from "src/Hooks/App/useClassOnFirstView";
import s from "./HorizontalAnimatedLine.module.scss";

const HorizontalAnimatedLine = ({ delay = "0.2s" }) => {
  const lineRef = useRef();
  const activeClass = useClassOnFirstView({
    elementRef: lineRef,
    cssModule: s,
  });

  return (
    <div className={`${s.line} ${activeClass}`} ref={lineRef}>
      <div className={s.animatedLine} style={{ transitionDelay: delay }} />
    </div>
  );
};
export default memo(HorizontalAnimatedLine);
