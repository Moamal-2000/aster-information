import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./MobileNav.module.scss";

const MobileNav = () => {
  const { isMobileNavActive } = useSelector((state) => state.global);
  const activeClass = isMobileNavActive ? s.active : "";

  return (
    <nav className={`${s.nav} ${activeClass}`}>
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
