import s from "./JourneySection.module.scss";
import JourneySlider from "./JourneySlider/JourneySlider";

const JourneySection = () => {
  return (
    <section className={s.journeySection}>
      <div className="container">
        <h2>Our Journey So Far</h2>
      </div>

      <JourneySlider />
    </section>
  );
};
export default JourneySection;
