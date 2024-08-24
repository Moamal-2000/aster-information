import CareerSlide from "./CareerSlide/CareerSlide";
import s from "./CareersSlider.module.scss";

const CareersSlider = () => {
  return (
    <div className={s.slider}>
      <CareerSlide />

      {/* <CareersPaginationDots */}
    </div>
  );
};
export default CareersSlider;
