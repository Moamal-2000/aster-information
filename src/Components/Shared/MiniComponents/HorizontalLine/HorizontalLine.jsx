import { memo, useRef } from "react";
import useClassOnFirstView from "src/Hooks/App/useClassOnFirstView";
import s from "./HorizontalLine.module.scss";

const HorizontalLine = ({ delay = "0.2s" }) => {
  const lineRef = useRef();
  const activeClass = useClassOnFirstView({
    elementRef: lineRef,
    cssModule: s,
  });

  return (
    <div className={`${s.line} ${activeClass}`} ref={lineRef}>
      <div className={s.VerticalLine} style={{ transitionDelay: delay }} />
    </div>
  );
};
export default memo(HorizontalLine);
