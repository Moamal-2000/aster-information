import { socialMedia } from "src/Data/staticData";
import s from "./SocialMedia.module.scss";

const SocialMedia = () => {
  return (
    <ul className={s.socialMedia}>
      {socialMedia.map(({ id, link, icon, media }) => (
        <li key={id}>
          <a href={link} target="_blank" rel="noreferrer" title={media}>
            <img src={icon} alt={media + " Icon"} loading="lazy" />
          </a>
        </li>
      ))}
    </ul>
  );
};
export default SocialMedia;
