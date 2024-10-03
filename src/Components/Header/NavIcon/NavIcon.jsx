import { useGlobalContext } from "src/Context/GlobalContext";
import s from "./NavIcon.module.scss";

const NavIcon = () => {
  const { isMobileNavActive, setIsMobileNavActive } = useGlobalContext();
  const activeClass = isMobileNavActive ? s.active : "";

  function toggleMobileNav() {
    setIsMobileNavActive((prev) => !prev);
  }

  return (
    <i
      className={`${s.navIcon} ${activeClass}`}
      onClick={toggleMobileNav}
      role="button"
      aria-pressed={isMobileNavActive}
      aria-label="Toggle mobile navigation"
    />
  );
};
export default NavIcon;
