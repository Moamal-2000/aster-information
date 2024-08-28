import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SCROLL_TRIGGER_POINT, WEBSITE_NAME } from "src/Data/variables";
import useEventListener from "src/Hooks/Helper/useEventListener";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import s from "./Header.module.scss";
import MobileNav from "./MobileNav/MobileNav";
import NavIcon from "./NavIcon/NavIcon";

const Header = () => {
  const [activeClass, setActiveClass] = useState("");
  const scrollDebounceTimer = useRef();
  const headerRef = useRef();

  function handleScroll(event) {
    clearTimeout(scrollDebounceTimer.current);

    scrollDebounceTimer.current = setTimeout(
      () => updateHeaderActiveClass(event, setActiveClass),
      100
    );
  }

  useEventListener(window, "wheel", handleScroll);
  useEventListener(window, "touchmove", handleScroll);

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

function updateHeaderActiveClass(event, setActiveClass) {
  const hasScrolledBeyondTrigger = window.scrollY >= SCROLL_TRIGGER_POINT;
  const isScrollingDown = event.deltaY >= 0;

  setActiveClass(isScrollingDown && hasScrolledBeyondTrigger ? s.active : "");
}
