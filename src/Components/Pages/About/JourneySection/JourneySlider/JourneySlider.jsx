import s from "./JourneySlider.module.scss";
import TimelineCard from "./TimelineCard/TimelineCard";

const JourneySlider = () => {
  return (
    <div className={s.journeySlider}>
      <TimelineCard />
      <TimelineCard />
    </div>
  );
};
export default JourneySlider;
