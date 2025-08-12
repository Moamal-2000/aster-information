import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import GlobalContextProvider from "./Context/GlobalContext.jsx";
import "./Styles/_global.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalContextProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </GlobalContextProvider>
  </StrictMode>
);
