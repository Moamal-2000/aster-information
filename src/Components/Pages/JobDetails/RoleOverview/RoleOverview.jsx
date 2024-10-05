import HorizontalLine from "../../../Shared/MiniComponents/HorizontalLine/HorizontalLine";
import s from "./RoleOverview.module.scss";

const RoleOverview = ({ title, list, invertColor }) => {
  const invertClass = invertColor ? s.invert : "";

  return (
    <section className={`${s.roleOverview} ${invertClass}`}>
      <h2>{title}</h2>
      <HorizontalLine
        delay="0.2s"
        animatedLineWidth="100%"
        initialX="0"
        animateTo="100%"
        lineColors={{
          lineColor: invertColor ? "var(--white)" : "var(--black)",
        }}
      />
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};
export default RoleOverview;
