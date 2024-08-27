import { useDispatch, useSelector } from "react-redux";
import { updateGlobalState } from "src/Features/globalSlice";
import s from "./NavIcon.module.scss";

const NavIcon = () => {
  const { isMobileNavActive } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const activeClass = isMobileNavActive ? s.active : "";

  function toggleMobileNav() {
    dispatch(
      updateGlobalState({ key: "isMobileNavActive", value: !isMobileNavActive })
    );
  }

  return (
    <i
      className={`${s.navIcon} ${activeClass}`}
      onClick={toggleMobileNav}
      role="button"
      aria-pressed={isMobileNavActive}
    />
  );
};
export default NavIcon;
