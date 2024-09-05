import { useRef } from "react";
import useClassOnFirstView from "src/Hooks/App/useClassOnFirstView";
import s from "./DataSecurityStack.module.scss";

const DataSecurityStack = ({ title, children }) => {
  const stackRef = useRef();
  const activeClass = useClassOnFirstView({
    elementRef: stackRef,
    cssModule: s,
  });

  return (
    <div className={s.stackContent} ref={stackRef}>
      <h2 className={activeClass}>{title}</h2>
      <p className={activeClass}>{children}</p>
    </div>
  );
};
export default DataSecurityStack;
