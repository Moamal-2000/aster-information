import { useMemo, useRef } from "react";
import useClassOnFirstView from "src/Hooks/App/useClassOnFirstView";
import HorizontalAnimatedLine from "../../../../Shared/MiniComponents/HorizontalAnimatedLine/HorizontalAnimatedLine";
import s from "./InfoSectionStat.module.scss";

const InfoSectionStat = ({ stat: { title, value, lineDelay } }) => {
  const lineRef = useRef();
  const delay = useMemo(
    () => `${(parseFloat(lineDelay) - 0.2).toFixed(1)}s`,
    [lineDelay]
  );

  const activeClass = useClassOnFirstView({
    elementRef: lineRef,
    cssModule: s,
  });

  return (
    <div className={s.stat}>
      <span
        className={activeClass}
        ref={lineRef}
        style={{ transitionDelay: delay }}
      >
        {value}
      </span>
      <HorizontalAnimatedLine delay={lineDelay} />
      <h3>{title}</h3>
    </div>
  );
};
export default InfoSectionStat;
