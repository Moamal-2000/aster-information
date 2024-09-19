import SvgIcon from "../../../../../Shared/MiniComponents/SvgIcon";
import s from "./JourneySliderButtons.module.scss";

const JourneySliderButtons = ({
  handleNextSlide,
  handlePrevSlide,
  activeClassProp,
}) => {
  const activeClass = activeClassProp ? s.active : "";

  return (
    <div className={s.sliderButtons}>
      <button
        type="button"
        className={s.prevButton}
        onClick={handlePrevSlide}
        aria-label="Previous timeline"
      >
        <SvgIcon name="chevronLeft" />
      </button>

      <div className={`${s.line} ${activeClass}`} />

      <button
        type="button"
        className={s.nextButton}
        onClick={handleNextSlide}
        aria-label="Next timeline"
      >
        <SvgIcon name="chevronLeft" />
      </button>
    </div>
  );
};
export default JourneySliderButtons;
