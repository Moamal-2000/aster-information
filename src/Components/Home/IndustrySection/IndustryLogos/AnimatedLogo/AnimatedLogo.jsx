import s from "./AnimatedLogo.module.scss";

const AnimatedLogo = ({ imgSrc, imgAlt, title, width, height }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.logoHolder}>
        <img src={imgSrc} alt={imgAlt} style={{ width, height }} />
      </div>

      <h2>{title}</h2>
    </div>
  );
};
export default AnimatedLogo;
