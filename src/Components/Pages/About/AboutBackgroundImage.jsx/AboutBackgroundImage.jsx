import { teamCollaborationImg } from "src/Assets/Images/Images";
import s from "./AboutBackgroundImage.module.scss";

const AboutBackgroundImage = () => {
  return (
    <>
      <div className={s.wrapper}>
        <img
          src={teamCollaborationImg}
          alt="Three individuals in an industrial setting: a man on the left speaking and gesturing, a girl in the middle holding a tablet, and a man on the right wearing a red and grey jacket."
          loading="lazy"
          className={s.backgroundImg}
        />
      </div>
    </>
  );
};
export default AboutBackgroundImage;
