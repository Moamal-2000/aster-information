import s from "./TimelineCard.module.scss";

const TimelineCard = () => {
  return (
    <div className={s.timelineCard}>
      <h3 className={s.year}>2016</h3>
      <p className={s.title}>SAN FRANCISCO HQ OPENS</p>
      <p className={s.description}>
        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and
        make changes to the font.
      </p>
    </div>
  );
};
export default TimelineCard;
