import s from "./TimelineCard.module.scss";

const TimelineCard = ({ data: { year, title, description } }) => {
  return (
    <div className={s.timelineCard}>
      <h3 className={s.year}>{year}</h3>
      <p className={s.title}>{title}</p>
      <p className={s.description}>{description}</p>
    </div>
  );
};
export default TimelineCard;
