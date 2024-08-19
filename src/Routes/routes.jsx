import About from "../Components/About/About";
import Careers from "../Components/Careers/Careers";
import Home from "../Components/Home/Home";
import Technology from "../Components/Technology/Technology";

export const ROUTES_CONFIG = [
  { path: "*", element: <PageNotFound /> },
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/technology", element: <Technology /> },
  { path: "/about", element: <About /> },
  { path: "/careers", element: <Careers /> },
];
