import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalContextProvider from "./Context/GlobalContext.jsx";
import "./Styles/_global.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </StrictMode>
);
