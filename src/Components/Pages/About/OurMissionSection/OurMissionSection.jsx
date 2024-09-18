import OurMissionContent from "./OurMissionContent/OurMissionContent";
import s from "./OurMissionSection.module.scss";

const OurMissionSection = () => {
  return (
    <section className={s.ourMissionSection}>
      <div className="container">
        <OurMissionContent />
      </div>
    </section>
  );
};
export default OurMissionSection;
