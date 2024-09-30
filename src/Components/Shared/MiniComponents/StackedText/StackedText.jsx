import HorizontalLine from "../HorizontalLine/HorizontalLine";
import s from "./StackedText.module.scss";

const StackedText = ({ title, subTitle }) => {
  return (
    <div className={s.wrapper}>
      <p>{title}</p>
      <HorizontalLine />
      <p>{subTitle}</p>
    </div>
  );
};
export default StackedText;
