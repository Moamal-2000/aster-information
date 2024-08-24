import Button from "../../../../Shared/Buttons/Button/Button";
import s from "./CareerSlide.module.scss";

const CareerSlide = () => {
  return <div className={s.slide}>
  <h2 className={s.title}>INTEGRATION ENGINEER</h2>

  <p className={s.location}>
    <strong>Remote</strong>
  </p>

  <p className={s.description}>
    Seeking a detail-oriented Integration Engineer skilled in system
    architecture, proficient in multiple languages, and passionate about
    data-driven solutions.
  </p>

  <Button
    text="Apply Now"
    path="/electrical-engineer"
    invertColors={true}
  />
</div>
}
export default CareerSlide