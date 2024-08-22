import { WEBSITE_NAME } from "src/Data/variables";
import s from "./WhyUsSection.module.scss";

const WhyUsSection = () => {
  return (
    <section className={s.whyUsSection}>
      <div className={s.backgroundImg} />

      <div className="container">
        <h2 className={s.title}>Why {WEBSITE_NAME}</h2>

        <p className={s.subTitle}>
          A different approach, using a new method of Information Management.
        </p>

        <p className={s.description}>
          Experience a distinct edge in Information Management and IT solutions.
          With advanced techniques and cutting-edge technology, we deliver
          tailored solutions that drive operational efficiency and strategic
          growth across industries.
        </p>

        <button type="button">Read More</button>
      </div>
    </section>
  );
};
export default WhyUsSection;
