import { Outlet } from "react-router-dom";

const RouteLayout = () => {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
};
export default RouteLayout;
