import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "src/Context/GlobalContext";
import { navLinksData } from "src/Data/staticData";
import { watchScrollState } from "src/Functions/componentsFunctions";
import s from "./MobileNav.module.scss";

const MobileNav = () => {
  const { isMobileNavActive, setIsMobileNavActive } = useGlobalContext();
  const activeClass = isMobileNavActive ? s.active : "";

  function closeMobileNav() {
    setIsMobileNavActive(false);
  }

  useEffect(() => {
    watchScrollState(isMobileNavActive);
  }, [isMobileNavActive]);

  return (
    <nav className={`${s.nav} ${activeClass}`}>
      <ul>
        {navLinksData.map(({ id, path, text }) => (
          <li key={id}>
            <NavLink to={path} onClick={closeMobileNav}>
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default MobileNav;
