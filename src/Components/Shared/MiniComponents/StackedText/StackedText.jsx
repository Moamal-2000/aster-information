import s from "./StackedText.module.scss";

const StackedText = ({ title, subTitle }) => {
  return (
    <div className={s.wrapper}>
      <p>{title}</p>
      {/* Animated line here */}
      <p>{subTitle}</p>
    </div>
  );
};
export default StackedText;
