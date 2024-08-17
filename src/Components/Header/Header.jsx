import { Link } from "react-router-dom";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <Link to="/">
        <SvgIcon name="mainIcon" />
        <span>ASTER INFORMATION</span>
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/technology">Technology</Link>
            <Link to="/about">About</Link>
            <Link to="/careers">Careers</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
