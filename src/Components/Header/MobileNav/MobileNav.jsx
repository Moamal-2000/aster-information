import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { watchScrollState } from "src/Functions/componentsFunctions";
import s from "./MobileNav.module.scss";

const MobileNav = () => {
  const { isMobileNavActive } = useSelector((state) => state.global);
  const activeClass = isMobileNavActive ? s.active : "";

  useEffect(() => {
    watchScrollState(isMobileNavActive);
  }, [isMobileNavActive]);

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
