import s from "./AnimatedLogo.module.scss"

const AnimatedLogo = ({ imgSrc, imgAlt }) => {
  return (
    <div className={s.logoHolder}>
      <img src={imgSrc} alt={imgAlt} />
    </div>
  )
}
export default AnimatedLogo