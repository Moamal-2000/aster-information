import s from "./AnimatedLogo.module.scss";

const AnimatedLogo = ({ imgSrc, imgAlt, title }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.logoHolder}>
        <img src={imgSrc} alt={imgAlt} />
      </div>

      <h2>{title}</h2>
    </div>
  );
};
export default AnimatedLogo;
