import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import GlobalContextProvider from "./Context/GlobalContext.jsx";
import "./Styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   </StrictMode>
    <GlobalContextProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </GlobalContextProvider>
);
