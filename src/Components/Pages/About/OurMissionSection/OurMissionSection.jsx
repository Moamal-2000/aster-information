import { ourMissionSectionBg } from "src/Assets/Images/Images";
import OurMissionContent from "./OurMissionContent/OurMissionContent";
import s from "./OurMissionSection.module.scss";

const OurMissionSection = () => {
  return (
    <section className={s.ourMissionSection}>
      <div className="container" data-container>
        <OurMissionContent />

        <img
          src={ourMissionSectionBg}
          alt="A smiling and proud girl wearing a grey blazer over a red shirt, standing in front of industrial equipment."
          loading="lazy"
          className={s.ourMissionBg}
        />
      </div>
    </section>
  );
};
export default OurMissionSection;
