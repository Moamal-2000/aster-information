import About from "../Components/Pages/About/About";
import Careers from "../Components/Pages/Careers/Careers";
import Home from "../Components/Pages/Home/Home";
import JobDetails from "../Components/Pages/JobDetails/JobDetails";
import JoinUs from "../Components/Pages/JoinUs/JoinUs";
import PageNotFound from "../Components/Pages/PageNotFound/PageNotFound";
import Technology from "../Components/Pages/Technology/Technology";

export const ROUTES_CONFIG = [
  { path: "*", element: <PageNotFound /> },
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/technology", element: <Technology /> },
  { path: "/about", element: <About /> },
  { path: "/careers", element: <Careers /> },
  { path: "/electrical-engineer", element: <JobDetails /> },
  { path: "/submit-your-application", element: <JoinUs /> },
];
