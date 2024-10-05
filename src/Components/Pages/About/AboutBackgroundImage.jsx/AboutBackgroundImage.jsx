import { teamCollaborationImg } from "src/Assets/Images/Images";
import useScrollActiveClass from "src/Hooks/App/useScrollActiveClass";
import s from "./AboutBackgroundImage.module.scss";

const AboutBackgroundImage = () => {
  const activeClass = useScrollActiveClass(s);

  return (
    <>
      <div className={`${s.wrapper} ${activeClass}`}>
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
