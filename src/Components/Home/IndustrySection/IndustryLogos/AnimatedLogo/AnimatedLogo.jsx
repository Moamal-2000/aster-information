import { useRef } from "react";
import useClassOnFirstView from "src/Hooks/App/useClassOnFirstView";
import s from "./AnimatedLogo.module.scss";

const AnimatedLogo = ({ imgSrc, imgAlt, title, width, height, delay }) => {
  const logoRef = useRef();
  const activeClass = useClassOnFirstView({
    elementRef: logoRef,
    cssModule: s,
  });

  return (
    <div className={s.wrapper}>
      <div
        className={`${s.logoHolder} ${activeClass}`}
        ref={logoRef}
        style={{ transitionDelay: delay }}
      >
        <img src={imgSrc} alt={imgAlt} style={{ width, height }} />
      </div>

      <h2>{title}</h2>
    </div>
  );
};
export default AnimatedLogo;
