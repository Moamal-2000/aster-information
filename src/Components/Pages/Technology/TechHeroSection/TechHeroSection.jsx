import { techPageBg } from "src/Assets/Images/Images";
import s from "./TechHeroSection.module.scss";

const TechHeroSection = () => {
  return (
    <section className={s.technology}>
      <img
        className={s.technologyBg}
        src={techPageBg}
        alt="Geometric network of interconnected points forming a mesh-like structure on a white background."
      />
      <h1>INNOVATIVE DATA-DRIVEN SOLUTIONS</h1>
    </section>
  );
};
export default TechHeroSection;
