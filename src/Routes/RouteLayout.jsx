import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const RouteLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};
export default RouteLayout;
