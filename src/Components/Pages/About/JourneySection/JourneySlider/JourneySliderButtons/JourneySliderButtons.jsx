import SvgIcon from "../../../../../Shared/MiniComponents/SvgIcon";
import s from "./JourneySliderButtons.module.scss";

const JourneySliderButtons = ({ handleNextSlide, handlePrevSlide }) => {
  return (
    <div className={s.sliderButtons}>
      <button type="button" className={s.prevButton} onClick={handlePrevSlide}>
        <SvgIcon name="chevronLeft" />
      </button>

      <div className={s.line} />

      <button type="button" className={s.nextButton} onClick={handleNextSlide}>
        <SvgIcon name="chevronLeft" />
      </button>
    </div>
  );
};
export default JourneySliderButtons;
