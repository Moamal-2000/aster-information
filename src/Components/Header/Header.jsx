import { Link, NavLink } from "react-router-dom";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <Link to="/">
        <SvgIcon name="mainIcon" />
        <span>ASTER INFORMATION</span>
      </Link>

      <nav className={s.nav}>
        <ul>
          <li>
            <NavLink to="/technology">Technology</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/careers">Careers</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
