import { useState } from "react";
import { changeArrToPairs } from "src/Functions/helper";
import s from "./JourneySlider.module.scss";
import JourneySliderButtons from "./JourneySliderButtons/JourneySliderButtons";
import TimelineCard from "./TimelineCard/TimelineCard";

const JourneySlider = ({data}) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderData = changeArrToPairs(data);

  function handleNextSlide() {
    setSliderIndex((prevIndex) =>
      prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
    );
  }

  function handlePrevSlide() {
    setSliderIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
    );
  }

  return (
    <div className={s.journeySlider}>
      {sliderData.map((sliderData, index) => {
        const activeClass = index === sliderIndex ? s.active : "";
        const isEven = sliderIndex % 2 === 0;
        const animateDirectionClass = isEven ? s.goRight : s.goLeft;

        return (
          <div
            className={`${s.wrapper} ${activeClass}`}
            key={sliderData[0].year}
          >
            <div
              className={`${s.card} ${s.firstCard} ${animateDirectionClass}`}
            >
              <TimelineCard data={sliderData[0]} />
            </div>

            <JourneySliderButtons
              handleNextSlide={handleNextSlide}
              handlePrevSlide={handlePrevSlide}
              activeClassProp={activeClass}
            />

            <div
              className={`${s.card} ${s.secondCard} ${animateDirectionClass}`}
            >
              <TimelineCard data={sliderData[1]} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default JourneySlider;
