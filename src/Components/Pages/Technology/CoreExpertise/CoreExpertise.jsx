import { coreExpertiseBg } from "src/Assets/Images/Images";
import s from "./CoreExpertise.module.scss";
import CoreExpertiseContent from "./CoreExpertiseContent/CoreExpertiseContent";

const CoreExpertise = () => {
  return (
    <section className={s.coreExpertise}>
      <div className="container" data-container>
        <CoreExpertiseContent />
      </div>

      <img
        className={s.coreExpertiseBg}
        src={coreExpertiseBg}
        alt="Dark background with white, blurred text resembling computer code or a data dump."
        width="734px"
        height="894px"
        loading="lazy"
      />
    </section>
  );
};
export default CoreExpertise;
