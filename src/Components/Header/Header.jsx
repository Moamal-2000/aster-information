import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SCROLL_TRIGGER_POINT, WEBSITE_NAME } from "src/Data/variables";
import { updateGlobalState } from "src/Features/globalSlice";
import useEventListener from "src/Hooks/Helper/useEventListener";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import s from "./Header.module.scss";
import MobileNav from "./MobileNav/MobileNav";
import NavIcon from "./NavIcon/NavIcon";

const Header = () => {
  const { isHeaderActive } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const scrollDebounceTimer = useRef();
  const headerRef = useRef();
  const touchStartY = useRef(0);
  const activeClass = isHeaderActive ? s.active : "";

  function handleScroll(event) {
    clearTimeout(scrollDebounceTimer.current);

    scrollDebounceTimer.current = setTimeout(() => {
      updateHeaderActiveClass(event, dispatch);
    }, 50);
  }

  function handleTouchStart(event) {
    touchStartY.current = event.touches[0].clientY;
  }

  function handleTouchMove(event) {
    const touchCurrentY = event.touches[0].clientY;
    const isScrollingDown = touchCurrentY < touchStartY.current;

    const syntheticEvent = {
      deltaY: isScrollingDown ? 1 : -1,
    };

    handleScroll(syntheticEvent);
  }

  useEventListener(window, "wheel", handleScroll);
  useEventListener(window, "touchstart", handleTouchStart);
  useEventListener(window, "touchmove", handleTouchMove);

  return (
    <header className={`${s.header} ${activeClass}`} ref={headerRef}>
      <div className={s.container}>
        <Link to="/" aria-label="Home page">
          <SvgIcon name="mainIcon" />
          <span>{WEBSITE_NAME}</span>
        </Link>

        <MobileNav />
        <NavIcon />
      </div>
    </header>
  );
};

export default Header;

function updateHeaderActiveClass(event, dispatch) {
  const hasScrolledBeyondTrigger = window.scrollY >= SCROLL_TRIGGER_POINT;
  const isScrollingDown = event.deltaY >= 0;

  dispatch(
    updateGlobalState({
      key: "isHeaderActive",
      value: isScrollingDown && hasScrolledBeyondTrigger,
    })
  );
}
