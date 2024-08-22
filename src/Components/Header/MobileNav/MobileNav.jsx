import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { navLinksData } from "src/Data/staticData";
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
        {navLinksData.map(({ id, path, text }) => (
          <li key={id}>
            <NavLink to={path}>{text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default MobileNav;
