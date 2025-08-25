import { techPageBg } from "src/Assets/Images/Images";
import s from "./TechHeroSection.module.scss";

const TechHeroSection = () => {
  return (
    <section className={s.technology}>
      <img
        className={s.technologyBg}
        src={techPageBg}
        alt="Geometric network of interconnected points forming a mesh-like structure on a white background."
        height="1000"
      />
      <h1>INNOVATIVE DATA-DRIVEN SOLUTIONS</h1>

      <p className="container">
        We harness the power of cutting-edge AI technology to develop
        innovative, data-driven solutions. Our technology is designed to
        streamline information management, enhance business efficiency, and
        empower strategic decision-making in an increasingly digital world.
      </p>
    </section>
  );
};
export default TechHeroSection;
