import { useEffect, useRef } from "react";
import useEventListener from "src/Hooks/Helper/useEventListener";
import useGetResizeWindow from "src/Hooks/Helper/useGetResizeWindow";
import s from "./AnimatedImage.module.scss";

const AnimatedImage = () => {
  const visionImageRef = useRef();
  const { windowWidth } = useGetResizeWindow();

  useEventListener(window, "scroll", () => {
    if (windowWidth > 1300) moveImageOnScroll(90, 0, 900);
  });

  useEffect(() => {
    if (windowWidth < 1300)
      visionImageRef.current.style.backgroundPositionX = "center";
  }, [windowWidth]);

  function moveImageOnScroll(startValue, endValue, scrollRange) {
    const visionEleRect = visionImageRef.current.getBoundingClientRect();
    const distanceFromTop = visionEleRect.top - window.innerHeight;
    const newPositionX = Math.min(
      startValue,
      startValue + (distanceFromTop / scrollRange) * (startValue - endValue)
    );

    visionImageRef.current.style.backgroundPositionX = `${newPositionX}px`;
  }
  return (
    <div className={s.imgHolder}>
      <div className={s.img} ref={visionImageRef} />
    </div>
  );
};
export default AnimatedImage;
