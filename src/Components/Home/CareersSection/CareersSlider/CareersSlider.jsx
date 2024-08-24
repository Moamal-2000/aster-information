import { careersSliderData } from "src/Data/staticData";
import CareerSlide from "./CareerSlide/CareerSlide";
import s from "./CareersSlider.module.scss";

const CareersSlider = () => {
  return (
    <div className={s.slider}>
      {careersSliderData.map(({ id, title, location, description }) => (
        <CareerSlide
          key={id}
          title={title}
          location={location}
          description={description}
        />
      ))}

      {/* <CareersPaginationDots */}
    </div>
  );
};
export default CareersSlider;
