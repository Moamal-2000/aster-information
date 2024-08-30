import { useEffect, useRef } from "react";
import { visionSectionBg } from "src/Assets/Images/Images";
import { SCREEN_SIZES } from "src/Data/variables";
import useEventListener from "src/Hooks/Helper/useEventListener";
import useGetResizeWindow from "src/Hooks/Helper/useGetResizeWindow";
import s from "./AnimatedImage.module.scss";

const AnimatedImage = () => {
  const visionImageRef = useRef();
  const { windowWidth } = useGetResizeWindow();

  useEventListener(window, "scroll", () => {
    const isMobileScreen = windowWidth < SCREEN_SIZES.smaller;
    if (isMobileScreen) visionImageRef.current.style.objectPosition = "center";
    else moveImageOnScroll(90, 0, 1000);
  });

  useEffect(() => {
    const isMobileScreen = windowWidth < SCREEN_SIZES.smaller;
    if (isMobileScreen) visionImageRef.current.style.objectPosition = "center";
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
