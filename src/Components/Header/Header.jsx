import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "src/Context/GlobalContext";
import { SCROLL_TRIGGER_POINT, WEBSITE_NAME } from "src/Data/variables";
import useEventListener from "src/Hooks/Helper/useEventListener";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import s from "./Header.module.scss";
import MobileNav from "./MobileNav/MobileNav";
import NavIcon from "./NavIcon/NavIcon";

const Header = () => {
  const { isHeaderActive, setIsHeaderActive } = useGlobalContext();
  const scrollDebounceTimer = useRef();
  const headerRef = useRef();
  const touchStartY = useRef(0);
  const activeClass = isHeaderActive ? s.active : "";

  function handleScroll(event) {
    clearTimeout(scrollDebounceTimer.current);

    scrollDebounceTimer.current = setTimeout(() => {
      updateHeaderActiveClass(event);
    }, 20);
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

  function updateHeaderActiveClass(event) {
    const hasScrolledBeyondTrigger = window.scrollY >= SCROLL_TRIGGER_POINT;
    const isScrollingDown = event.deltaY >= 0;

    setIsHeaderActive(isScrollingDown && hasScrolledBeyondTrigger);
  }

  useEventListener(window, "wheel", handleScroll);
  useEventListener(window, "touchstart", handleTouchStart);
  useEventListener(window, "touchmove", handleTouchMove);

  return (
    <header className={`${s.header} ${activeClass}`} ref={headerRef}>
      <div className="container">
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
