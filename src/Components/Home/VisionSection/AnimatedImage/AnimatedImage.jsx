import { useEffect, useRef } from "react";
import { visionSectionBg } from "src/Assets/Images/Images";
import useEventListener from "src/Hooks/Helper/useEventListener";
import useGetResizeWindow from "src/Hooks/Helper/useGetResizeWindow";
import s from "./AnimatedImage.module.scss";

const AnimatedImage = () => {
  const visionImageRef = useRef();
  const { windowWidth } = useGetResizeWindow();

  useEventListener(window, "scroll", () => {
    if (windowWidth > 1300 && windowWidth < 1550) moveImageOnScroll(90, 0, 900);
  });

  useEffect(() => {
    if (windowWidth < 1300 || windowWidth > 1550)
      visionImageRef.current.style.objectPosition = "center";
  }, [windowWidth]);

  function moveImageOnScroll(startValue, endValue, scrollRange) {
    const visionEleRect = visionImageRef.current.getBoundingClientRect();
    const distanceFromTop = visionEleRect.top - window.innerHeight;
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
