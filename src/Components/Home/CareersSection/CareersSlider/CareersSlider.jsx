import { useState } from "react";
import { careersSliderData } from "src/Data/staticData";
import CareerSlide from "./CareerSlide/CareerSlide";
import s from "./CareersSlider.module.scss";

const CareersSlider = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <div className={s.slider}>
      {careersSliderData.map(({ id, title, location, description }) => (
        <CareerSlide
          key={id}
          title={title}
          location={location}
          description={description}
          activeSlider={id === activeSlide}
        />
      ))}

      <div className={s.slideSpace} />

      {/* <CareersPaginationDots */}
    </div>
  );
};
export default CareersSlider;
