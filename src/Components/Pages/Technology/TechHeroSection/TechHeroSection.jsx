import { techPageBg } from "../../../../Assets/Images/Images";
import s from "./TechHeroSection.module.scss";

const TechHeroSection = () => {
  return (
    <section className={s.technology}>
      <img src={techPageBg} alt="Technology Page Background" />
      <h1>INNOVATIVE DATA-DRIVEN SOLUTIONS</h1>
    </section>
  );
};
export default TechHeroSection;
