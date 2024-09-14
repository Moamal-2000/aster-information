import { teamCollaborationImg } from "src/Assets/Images/Images";
import s from "./AboutBackgroundImage.module.scss";

const AboutBackgroundImage = () => {
  return (
    <>
      <div className={s.wrapper}>
        <img
          src={teamCollaborationImg}
          alt="Team Collaboration Image"
          loading="lazy"
          className={s.backgroundImg}
        />
      </div>
    </>
  );
};
export default AboutBackgroundImage;
