import { Link } from "react-router-dom";
import SvgIcon from "../../MiniComponents/SvgIcon";
import s from "./Button.module.scss";

const Button = ({ text, path }) => {
  return (
    <Link to={path} className={s.button}>
      <span>{text}</span>

      <div className={s.arrowHolder}>
        <SvgIcon name="arrowRight" />
      </div>
    </Link>
  );
};
export default Button;
