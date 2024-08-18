import { homeBgBottom, homeBgTop } from "src/Assets/Images/Images";
import s from "./HomeBackground.module.scss";

const HomeBackground = () => {
  return (
    <div className={s.backgroundImage}>
      <img src={homeBgTop} className={s.top} alt="Hero Section Top Image" />
      <img
        src={homeBgBottom}
        className={s.bottom}
        alt="Hero Section Bottom Image"
      />
    </div>
  );
};
export default HomeBackground;
