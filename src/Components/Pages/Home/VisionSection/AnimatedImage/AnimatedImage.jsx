import { useRef } from "react";
import { visionSectionBg } from "src/Assets/Images/Images";
import useEventListener from "src/Hooks/Helper/useEventListener";
import s from "./AnimatedImage.module.scss";

const AnimatedImage = () => {
  const visionImageRef = useRef();

  useEventListener(window, "scroll", () => {
    moveImageOnScroll(50, 0, 1300);
  });

  function moveImageOnScroll(startValue, endValue, scrollRange) {
    const distanceFromTop = visionImageRef.current.offsetTop - window.scrollY;
    const newPositionX = Math.min(
      startValue,
      startValue + (distanceFromTop / scrollRange) * (startValue - endValue)
    );

    visionImageRef.current.style.objectPosition = `${newPositionX}px`;
  }

  return (
    <div className={s.imgHolder}>
      <img
        src={visionSectionBg}
        alt="Vision section background image"
        loading="lazy"
        className={s.img}
        ref={visionImageRef}
      />
    </div>
  );
};
export default AnimatedImage;
