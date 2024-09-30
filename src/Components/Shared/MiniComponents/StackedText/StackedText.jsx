import { useMemo, useRef } from "react";
import useClassOnFirstView from "src/Hooks/App/useClassOnFirstView";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import s from "./StackedText.module.scss";

const StackedText = ({ title, subTitle }) => {
  const paragraphRef = useRef();
  const activeClass = useClassOnFirstView({
    elementRef: paragraphRef,
    cssModule: s,
  });

  const initialX = useMemo(() => "calc(96px / 2)", []);
  const animatedTo = useMemo(
    () => (activeClass ? "50%" : initialX),
    [activeClass]
  );

  return (
    <div className={s.wrapper}>
      <p>{title}</p>

      <HorizontalLine
        animatedLineWidth="96px"
        initialX={initialX}
        animateTo={animatedTo}
      />

      <p className={activeClass} ref={paragraphRef}>
        {subTitle}
      </p>
    </div>
  );
};
export default StackedText;
