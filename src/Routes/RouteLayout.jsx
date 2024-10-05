import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import ScrollToTopIcon from "../Components/Shared/MiniComponents/ScrollToTopIcon/ScrollToTopIcon";
import SkipContentLink from "../Components/Shared/MiniComponents/SkipContentLink/SkipContentLink";
import { useGlobalContext } from "../Context/GlobalContext";
import { SCREEN_SIZES } from "../Data/variables";
import useGetResizeWindow from "../Hooks/Helper/useGetResizeWindow";
import s from "./RouteLayout.module.scss";
import { PAGES_PATHS } from "./routes";

const RouteLayout = () => {
  const { windowWidth } = useGetResizeWindow();
  const location = useLocation();
  const { currentPage, setCurrentPage } = useGlobalContext();
  const isNotFoundPage = !PAGES_PATHS.includes(currentPage);

  useEffect(() => {
    setCurrentPage(location.pathname);

    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (isNotFoundPage) return <Outlet />;

  return (
    <div className="App">
      <SkipContentLink sectionId="heroSection" />
      {/* <Header /> */}
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
