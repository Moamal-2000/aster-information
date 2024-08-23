import WhyUsCard from "./WhyUsCard/WhyUsCard";
import s from "./WhyUsSection.module.scss";

const WhyUsSection = () => {
  return (
    <section className={s.whyUsSection}>
      <div className={s.backgroundImg} />

      <div className="container">
        <WhyUsCard />
      </div>
    </section>
  );
};
export default WhyUsSection;
