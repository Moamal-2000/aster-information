import s from "./FeatureOverview.module.scss";
import FeatureOverviewContent from "./FeatureOverviewContent/FeatureOverviewContent";

const FeatureOverview = () => {
  return (
    <section className={s.featureOverview}>
      <FeatureOverviewContent />
    </section>
  );
};
export default FeatureOverview;
