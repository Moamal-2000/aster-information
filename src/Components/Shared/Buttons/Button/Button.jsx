import { Link } from "react-router-dom";
import SvgIcon from "../../MiniComponents/SvgIcon";
import s from "./Button.module.scss";

const Button = ({ text, path, invertColors }) => {
  const invertClass = invertColors ? s.invert : "";

  return (
    <Link to={path} className={`${s.button} ${invertClass}`}>
      <span>{text}</span>

      <div className={s.arrowHolder} aria-hidden="true">
        <SvgIcon name="arrowRight" />
      </div>
    </Link>
  );
};
export default Button;
