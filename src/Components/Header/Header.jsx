import { Link } from "react-router-dom";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import s from "./Header.module.scss";
import MobileNav from "./MobileNav/MobileNav";
import NavIcon from "./NavIcon/NavIcon";

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <Link to="/">
          <SvgIcon name="mainIcon" />
          <span>ASTER INFORMATION</span>
        </Link>

        <MobileNav />
        <NavIcon />
      </div>
    </header>
  );
};
export default Header;
