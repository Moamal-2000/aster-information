import { socialMedia } from "src/Data/staticData";
import SvgIcon from "../SvgIcon";
import s from "./SocialMedia.module.scss";

const SocialMedia = () => {
  return (
    <ul className={s.socialMedia}>
      {socialMedia.map(({ id, link, media }) => (
        <li key={id}>
          <a href={link} target="_blank" rel="noreferrer" title={media}>
            <SvgIcon name={media.toLowerCase()} />
          </a>
        </li>
      ))}
    </ul>
  );
};
export default SocialMedia;
