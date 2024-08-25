import { whyUsSectionBg } from "src/Assets/Images/Images";
import WhyUsCard from "./WhyUsCard/WhyUsCard";
import s from "./WhyUsSection.module.scss";

const WhyUsSection = () => {
  return (
    <section className={s.whyUsSection}>
      <img
        src={whyUsSectionBg}
        alt="Why-us section background image"
        loading="lazy"
        className={s.backgroundImg}
      />

      <div className="container">
        <WhyUsCard />
      </div>
    </section>
  );
};
export default WhyUsSection;
