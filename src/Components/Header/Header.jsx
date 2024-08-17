import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { updateGlobalState } from "../../Features/globalSlice";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import s from "./Header.module.scss";

const Header = () => {
  const { isMobileNavActive } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const activeClass = isMobileNavActive ? s.active : "";

  function toggleMobileNav() {
    dispatch(
      updateGlobalState({ key: "isMobileNavActive", value: !isMobileNavActive })
    );
  }
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

        <i
          className={`${s.navIcon} ${activeClass}`}
          onClick={toggleMobileNav}
        />
      </div>
    </header>
  );
};
export default Header;
