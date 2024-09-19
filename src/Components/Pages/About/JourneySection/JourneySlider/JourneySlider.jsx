import { useState } from "react";
import { journeySliderData } from "src/Data/staticData";
import s from "./JourneySlider.module.scss";
import JourneySliderButtons from "./JourneySliderButtons/JourneySliderButtons";
import TimelineCard from "./TimelineCard/TimelineCard";

const JourneySlider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  return (
    <div className={s.journeySlider}>
      {journeySliderData.map((sliderData, index) => {
        const activeClass = index === sliderIndex ? s.active : "";

        return (
          <div
            className={`${s.wrapper} ${activeClass}`}
            key={sliderData[0].year}
          >
            <TimelineCard data={sliderData[0]} />

            <JourneySliderButtons />

            <TimelineCard data={sliderData[1]} />
          </div>
        );
      })}
    </div>
  );
};
export default JourneySlider;
