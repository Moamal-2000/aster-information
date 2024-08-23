import s from "./HorizontalAnimatedLine.module.scss";

const HorizontalAnimatedLine = () => {
  return (
    <div className={s.line}>
      <div className={s.animatedLine}></div>
    </div>
  );
};
export default HorizontalAnimatedLine;
