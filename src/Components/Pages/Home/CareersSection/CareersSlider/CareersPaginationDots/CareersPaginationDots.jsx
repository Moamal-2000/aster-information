import s from "./CareersPaginationDots.module.scss";

const CareersPaginationDots = ({ sliderLength, activeDot, setActiveSlide }) => {
  const activeClass = (index) => (index === activeDot ? s.active : "");

  function changeSlideByIndex(index) {
    setActiveSlide(index);
  }

  return (
    <div className={s.dots}>
      {Array.from({ length: sliderLength }).map((_, index) => (
        <button
          type="button"
          key={index}
          className={`${s.dot} ${activeClass(index + 1)}`}
          onClick={() => changeSlideByIndex(index + 1)}
          aria-label={`Change slide to slide number ${index + 1}`}
        ></button>
      ))}
    </div>
  );
};
export default CareersPaginationDots;
