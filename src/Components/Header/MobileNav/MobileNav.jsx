import { NavLink } from "react-router-dom";
import s from "./MobileNav.module.scss";

const MobileNav = () => {
  return (
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
  );
};
export default MobileNav;
