import { Link, NavLink } from "react-router-dom";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import s from "./Header.module.scss";
import NavIcon from "./NavIcon/NavIcon";

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
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

        <NavIcon />
      </div>
    </header>
  );
};
export default Header;
