import { useEffect, useRef, useState } from "react";
import { careersSliderData } from "src/Data/staticData";
import { CAREERS_SLIDER_SWITCH_TIME } from "src/Data/variables";
import useEventListener from "src/Hooks/Helper/useEventListener";
import CareerSlide from "./CareerSlide/CareerSlide";
import CareersPaginationDots from "./CareersPaginationDots/CareersPaginationDots";
import s from "./CareersSlider.module.scss";

const CareersSlider = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const sliderRef = useRef();
  const timerIdRef = useRef();
  const isMouseLeave = useRef(false);

  useEventListener(sliderRef, "mousemove", () => {
    clearTimeout(timerIdRef.current);
    isMouseLeave.current = false;
  });

  useEventListener(sliderRef, "mouseleave", () => {
    handleSlideSwitching();
    isMouseLeave.current = true;
  });

  function handleSlideSwitching() {
    timerIdRef.current = setTimeout(() => {
      setActiveSlide((currentSlide) =>
        currentSlide < careersSliderData.length ? ++currentSlide : 1
      );
    }, CAREERS_SLIDER_SWITCH_TIME);
  }

  useEffect(() => {
    if (isMouseLeave.current) handleSlideSwitching();

    return () => {
      clearTimeout(timerIdRef.current);
      if (!timerIdRef.current) handleSlideSwitching();
    };
  }, [activeSlide]);

  return (
    <div className={s.slider} ref={sliderRef}>
      <div className={s.slideSpace} />

      {careersSliderData.map(({ id, title, location, description }) => (
        <CareerSlide
          key={id}
          title={title}
          location={location}
          description={description}
          activeSlider={id === activeSlide}
        />
      ))}

      <CareersPaginationDots
        sliderLength={careersSliderData.length}
        activeDot={activeSlide}
        setActiveSlide={setActiveSlide}
      />
    </div>
  );
};
export default CareersSlider;
