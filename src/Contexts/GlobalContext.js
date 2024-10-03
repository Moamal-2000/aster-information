import { createContext, useContext } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const state = {};
  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
};
export default GlobalContextProvider;

export const useGlobalContext = useContext(GlobalContext);
