import s from "./SkipContentLink.module.scss";

const SkipContentLink = ({ sectionId }) => {
  return (
    <a href={`#${sectionId}`} className={s.skipContent}>
      Skip to main content
    </a>
  );
};

export default SkipContentLink;
