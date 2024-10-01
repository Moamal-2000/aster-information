import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import ScrollToTopIcon from "../Components/Shared/MiniComponents/ScrollToTopIcon/ScrollToTopIcon";
import SkipContentLink from "../Components/Shared/MiniComponents/SkipContentLink/SkipContentLink";
import { SCREEN_SIZES } from "../Data/variables";
import { updateGlobalState } from "../Features/globalSlice";
import useGetResizeWindow from "../Hooks/Helper/useGetResizeWindow";
import s from "./RouteLayout.module.scss";

const RouteLayout = () => {
  const { windowWidth } = useGetResizeWindow();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      updateGlobalState({ key: "currentPage", value: location.pathname })
    );

    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <SkipContentLink sectionId="heroSection" />
      <Header />
      <Outlet />

      <div className={s.footerLayer}>
        <div className="container">
          <Footer />
        </div>
      </div>

      {windowWidth < SCREEN_SIZES.tablet && <ScrollToTopIcon />}
    </div>
  );
};
export default RouteLayout;
