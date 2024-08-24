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
  let timerId;

  useEventListener(sliderRef, "mouseenter", () => {
    clearTimeout(timerId);
  });

  useEventListener(sliderRef, "mouseleave", handleSlideSwitching);

  function handleSlideSwitching() {
    timerId = setTimeout(() => {
      setActiveSlide((currentSlide) =>
        activeSlide < careersSliderData.length ? ++currentSlide : 1
      );
    }, CAREERS_SLIDER_SWITCH_TIME);
  }

  useEffect(() => {
    handleSlideSwitching();

    return () => clearTimeout(timerId);
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
