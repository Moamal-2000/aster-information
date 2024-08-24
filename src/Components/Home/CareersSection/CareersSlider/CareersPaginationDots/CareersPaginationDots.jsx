import s from "./CareersPaginationDots.module.scss";

const CareersPaginationDots = ({ sliderLength, activeDot }) => {
  const activeClass = (index) => (index === activeDot ? s.active : "");

  return (
    <div className={s.dots}>
      {Array.from({ length: sliderLength }).map((_, index) => (
        <span key={index} className={`${s.dot} ${activeClass(index + 1)}`} />
      ))}
    </div>
  );
};
export default CareersPaginationDots;
