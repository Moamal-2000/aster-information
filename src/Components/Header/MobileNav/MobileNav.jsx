import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { navLinksData } from "src/Data/staticData";
import { updateGlobalState } from "src/Features/globalSlice";
import { watchScrollState } from "src/Functions/componentsFunctions";
import s from "./MobileNav.module.scss";

const MobileNav = () => {
  const { isMobileNavActive } = useSelector((state) => state.global);
  const activeClass = isMobileNavActive ? s.active : "";
  const dispatch = useDispatch();

  function closeMobileNav() {
    dispatch(updateGlobalState({ key: "isMobileNavActive", value: false }));
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
