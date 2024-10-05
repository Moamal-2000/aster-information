import HorizontalLine from "../../../Shared/MiniComponents/HorizontalLine/HorizontalLine";
import s from "./RoleOverview.module.scss";

const RoleOverview = ({ title, list, invertColor }) => {
  const invertClass = invertColor ? s.invert : "";

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
              lineColor: invertColor ? "var(--white)" : "var(--black)",
              VerticalLineColor: invertColor ? "var(--black)" : "var(--white)",
            }}
          />
        </div>

        <ul>
          {list.map(({ text, id }) => (
            <li key={id}>{text}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default RoleOverview;
