import { useState } from "react";
import { journeySliderData } from "src/Data/staticData";
import s from "./JourneySlider.module.scss";
import JourneySliderButtons from "./JourneySliderButtons/JourneySliderButtons";
import TimelineCard from "./TimelineCard/TimelineCard";

const JourneySlider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  function handleNextSlide() {
    setSliderIndex((prevIndex) =>
      prevIndex === journeySliderData.length - 1 ? 0 : prevIndex + 1
    );
  }

  function handlePrevSlide() {
    setSliderIndex((prevIndex) =>
      prevIndex === 0 ? journeySliderData.length - 1 : prevIndex - 1
    );
  }

  return (
    <div className={s.journeySlider}>
      {journeySliderData.map((sliderData, index) => {
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
