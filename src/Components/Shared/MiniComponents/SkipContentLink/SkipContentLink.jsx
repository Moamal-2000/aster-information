import s from "./SkipContentLink.module.scss";

const SkipContentLink = ({ scrollTo }) => {
  return (
    <a href={`#${scrollTo}`} className={s.skipContent}>
      Skip to main content
    </a>
  );
};

export default SkipContentLink;
