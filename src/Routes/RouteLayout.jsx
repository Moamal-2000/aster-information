import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import ScrollToTopIcon from "../Components/Shared/MiniComponents/ScrollToTopIcon/ScrollToTopIcon";

const RouteLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />

      <div className="container">
        <Footer />
      </div>

      <ScrollToTopIcon />
    </div>
  );
};
export default RouteLayout;
