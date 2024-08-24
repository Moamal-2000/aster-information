import { useEffect, useState } from "react";
import { careersSliderData } from "src/Data/staticData";
import { CAREERS_SLIDER_SWITCH_TIME } from "src/Data/variables";
import CareerSlide from "./CareerSlide/CareerSlide";
import CareersPaginationDots from "./CareersPaginationDots/CareersPaginationDots";
import s from "./CareersSlider.module.scss";

const CareersSlider = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setActiveSlide((currentSlide) =>
        activeSlide < careersSliderData.length ? currentSlide + 1 : 1
      );
    }, CAREERS_SLIDER_SWITCH_TIME);

    return () => clearTimeout(timerId);
  }, [activeSlide]);

  return (
    <div className={s.slider}>
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
