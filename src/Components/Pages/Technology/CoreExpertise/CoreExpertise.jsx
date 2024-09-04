import { coreExpertiseBg } from "src/Assets/Images/Images";
import s from "./CoreExpertise.module.scss";
import CoreExpertiseContent from "./CoreExpertiseContent/CoreExpertiseContent";

const CoreExpertise = () => {
  return (
    <section className={s.coreExpertise}>
      <div className="container" data-container>
        <CoreExpertiseContent />
      </div>

      <img className={s.coreExpertiseBg} src={coreExpertiseBg} alt="" />
    </section>
  );
};
export default CoreExpertise;
