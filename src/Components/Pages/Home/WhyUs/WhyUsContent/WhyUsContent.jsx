import { WEBSITE_NAME } from "src/Data/variables";
import Button from "../../../../Shared/Buttons/Button/Button";
import s from "./WhyUsContent.module.scss";

const WhyUsContent = () => {
  return (
    <div className={s.content}>
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

      <Button text="Read more about us" path="/about" invertColors={true} />
    </div>
  );
};
export default WhyUsContent;
