import { useRef } from "react";
import useClassOnFirstView from "src/Hooks/App/useClassOnFirstView";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import s from "./StackedText.module.scss";

const StackedText = ({ title, subTitle }) => {
  const paragraphRef = useRef();
  const activeClass = useClassOnFirstView({
    elementRef: paragraphRef,
    cssModule: s,
  });

  return (
    <div className={s.wrapper}>
      <p>{title}</p>
      <HorizontalLine />
      <p className={activeClass} ref={paragraphRef}>
        {subTitle}
      </p>
    </div>
  );
};
export default StackedText;
