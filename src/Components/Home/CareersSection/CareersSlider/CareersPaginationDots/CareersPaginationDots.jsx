import s from "./CareersPaginationDots.module.scss";

const CareersPaginationDots = ({
  sliderLength,
  activeDot,
  setActiveSlide,
}) => {
  const activeClass = (index) => (index === activeDot ? s.active : "");

  function handleChangeSlideIndex(index) {
    setActiveSlide(index);
  }

  return (
    <div className={s.dots}>
      {Array.from({ length: sliderLength }).map((_, index) => (
        <span
          key={index}
          className={`${s.dot} ${activeClass(index + 1)}`}
          onClick={() => handleChangeSlideIndex(index + 1)}
        />
      ))}
    </div>
  );
};
export default CareersPaginationDots;
