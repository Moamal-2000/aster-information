import { WEBSITE_NAME } from "src/Data/variables";
import Button from "../../Shared/Buttons/Button/Button";
import AnimatedLine from "../../Shared/MiniComponents/AnimatedLine/AnimatedLine";
import s from "./WhyUsSection.module.scss";

const WhyUsSection = () => {
  return (
    <section className={s.whyUsSection}>
      <div className={s.backgroundImg} />

      <div className="container">
        <div className={s.card}>
          <div className={s.animatedLine}>
            <AnimatedLine
              lineHeight="631px"
              yAxis="129px"
              animateTo="70px"
              lineColors={{
                lineColor: "#b4b4b4",
                animatedLineColor: "#fff",
              }}
            />
          </div>

          <div className={s.content}>
            <h2 className={s.title}>Why {WEBSITE_NAME}</h2>

            <p className={s.subTitle}>
              A different approach, using a new method of Information
              Management.
            </p>

            <p className={s.description}>
              Experience a distinct edge in Information Management and IT
              solutions. With advanced techniques and cutting-edge technology,
              we deliver tailored solutions that drive operational efficiency
              and strategic growth across industries.
            </p>

            <Button text="Read More" path="/about" invertColors={true} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyUsSection;
