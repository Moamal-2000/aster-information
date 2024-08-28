import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import ScrollToTopIcon from "../Components/Shared/MiniComponents/ScrollToTopIcon/ScrollToTopIcon";
import SkipContentLink from "../Components/Shared/MiniComponents/SkipContentLink/SkipContentLink";
import { SCREEN_SIZES } from "../Data/variables";
import useGetResizeWindow from "../Hooks/Helper/useGetResizeWindow";
import s from "./RouteLayout.module.scss";

const RouteLayout = () => {
  const { windowWidth } = useGetResizeWindow();

  return (
    <div className="App">
      <SkipContentLink scrollTo="heroSection" />
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
