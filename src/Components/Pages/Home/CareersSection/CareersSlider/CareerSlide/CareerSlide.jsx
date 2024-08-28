import Button from "../../../../../Shared/Buttons/Button/Button";
import s from "./CareerSlide.module.scss";

const CareerSlide = ({ title, location, description, activeSlider }) => {
  const activeClass = activeSlider ? s.active : "";

  return (
    <div className={`${s.slide} ${activeClass}`}>
      <h2 className={s.title}>{title}</h2>

      <p className={s.location}>
        <strong>{location}</strong>
      </p>

      <p className={s.description}>{description}</p>

      <Button
        text="Apply Now"
        path="/electrical-engineer"
        invertColors={true}
      />
    </div>
  );
};
export default CareerSlide;
