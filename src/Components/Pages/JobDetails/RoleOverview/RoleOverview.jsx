import Button from "../../../Shared/Buttons/Button/Button";
import HorizontalLine from "../../../Shared/MiniComponents/HorizontalLine/HorizontalLine";
import s from "./RoleOverview.module.scss";

const RoleOverview = ({ title, list, invertColors, showApplyButton }) => {
  const invertClass = invertColors ? s.invert : "";

  return (
    <section className={`${s.roleOverview} ${invertClass}`}>
      <div className="container" data-container>
        <h2>{title}</h2>
        <div className={s.lineWrapper}>
          <HorizontalLine
            delay="0.2s"
            transitionDuration="1.8s"
            animatedLineWidth="72px"
            initialX="200px"
            animateTo="calc(100% - 72px / 2)"
            lineColors={{
              lineColor: invertColors ? "var(--white)" : "var(--black)",
              VerticalLineColor: invertColors ? "var(--black)" : "var(--white)",
            }}
          />
        </div>

        <ul>
          {list.map(({ text, id }) => (
            <li key={id}>{text}</li>
          ))}
        </ul>

        {showApplyButton && (
          <Button
            text="Submit Application"
            path="/submit-application"
            invertColors={invertColors}
          />
        )}
      </div>
    </section>
  );
};
export default RoleOverview;
