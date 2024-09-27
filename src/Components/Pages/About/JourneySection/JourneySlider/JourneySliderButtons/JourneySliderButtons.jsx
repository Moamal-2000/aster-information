import SvgIcon from "../../../../../Shared/MiniComponents/SvgIcon";
import s from "./JourneySliderButtons.module.scss";

const JourneySliderButtons = ({
  handleNextSlide,
  handlePrevSlide,
  activeClassProp,
}) => {
  const activeClass = activeClassProp ? s.active : "";
  const isFocusable = activeClassProp ? "0" : "-1";

  return (
    <div className={`${s.sliderButtons} ${activeClass}`}>
      <button
        type="button"
        className={s.prevButton}
        onClick={handlePrevSlide}
        aria-label="Previous timeline"
        tabIndex={isFocusable}
      >
        <SvgIcon name="chevronLeft" />
      </button>

      <div className={`${s.line} ${activeClass}`} />

      <button
        type="button"
        className={s.nextButton}
        onClick={handleNextSlide}
        aria-label="Next timeline"
        tabIndex={isFocusable}
      >
        <SvgIcon name="chevronLeft" />
      </button>
    </div>
  );
};
export default JourneySliderButtons;
