import { useEffect, useRef } from "react";
import useEventListener from "src/Hooks/Helper/useEventListener";
import useGetResizeWindow from "src/Hooks/Helper/useGetResizeWindow";
import AnimatedLine from "../../Shared/MiniComponents/AnimatedLine/AnimatedLine";
import s from "./VisionSection.module.scss";

const VisionSection = () => {
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
    <section className={s.visionSection}>
      <div className="container">
        <div className={s.wrapper}>
          <AnimatedLine lineHeight="470px" yAxis="150px" animateTo="70px" />

          <div className={s.content}>
            <h2 className={s.title}>VISION</h2>
            <p className={s.subTitle}>
              Driving Innovation in Information Management
            </p>
            <p className={s.description}>
              At Aster Information Limited, we're committed to revolutionizing
              the way businesses manage data and IT solutions. By harnessing the
              power of AI, we aim to deliver services that redefine efficiency
              and innovation. We believe in a future where strategic information
              management propels businesses to new heights, and we're at the
              forefront of making that future a reality.
            </p>
          </div>
        </div>

        <div className={s.imgHolder}>
          <div className={s.img} ref={visionImageRef}></div>
        </div>
      </div>
    </section>
  );
};
export default VisionSection;
