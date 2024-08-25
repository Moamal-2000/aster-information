import { useRef } from "react";
import useHasAnimatedOnScroll from "src/Hooks/App/useHasAnimatedOnScroll";
import useOnScreen from "src/Hooks/Helper/useOnScreen";
import s from "./AnimatedLogo.module.scss";

const AnimatedLogo = ({ imgSrc, imgAlt, title, width, height, delay }) => {
  const logoRef = useRef();
  const isElementVisible = useOnScreen(logoRef);
  const hasAnimated = useHasAnimatedOnScroll(isElementVisible);
  const activeClass = hasAnimated ? s.active : "";

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
