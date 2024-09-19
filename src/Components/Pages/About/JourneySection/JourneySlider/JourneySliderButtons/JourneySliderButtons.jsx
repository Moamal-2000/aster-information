import SvgIcon from "../../../../../Shared/MiniComponents/SvgIcon";
import s from "./JourneySliderButtons.module.scss";

const JourneySliderButtons = () => {
  return (
    <div className={s.sliderButtons}>
      <button type="button" className={s.prevButton}>
        <SvgIcon name="chevronLeft" />
      </button>

      <div className={s.line} />

      <button type="button" className={s.nextButton}>
        <SvgIcon name="chevronLeft" />
      </button>
    </div>
  );
};
export default JourneySliderButtons;
