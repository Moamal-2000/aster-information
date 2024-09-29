import s from "./HeroSection.module.scss";

const HeroSection = ({ titleLine1, titleLine2, description }) => {
  return (
    <section className={s.heroSection}>
      <h1>
        <span>{titleLine1}</span>
        <span>{titleLine2}</span>
      </h1>
      <p>{description}</p>
    </section>
  );
};
export default HeroSection;
