import { coreExpertiseBg } from "src/Assets/Images/Images";
import s from "./FeatureOverview.module.scss";
import FeatureOverviewContent from "./FeatureOverviewContent/FeatureOverviewContent";

const FeatureOverview = () => {
  return (
    <section className={s.featureOverview}>
      <div className="container" data-container>
        <FeatureOverviewContent />
      </div>

      <img className={s.coreExpertiseBg} src={coreExpertiseBg} alt="" />
    </section>
  );
};
export default FeatureOverview;
