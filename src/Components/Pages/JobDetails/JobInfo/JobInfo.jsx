import StackedText from "../../../Shared/MiniComponents/StackedText/StackedText";
import s from "./JobInfo.module.scss";

const JobInfo = () => {
  return (
    <div className={s.jobInfo}>
      <StackedText title="LOCATION" subTitle="San Francisco" />
      <StackedText title="EMPLOYMENT TYPE" subTitle="Permanent" />
    </div>
  );
};
export default JobInfo;
