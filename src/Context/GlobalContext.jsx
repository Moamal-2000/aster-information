import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [currentPage, setCurrentPage] = useState("/home");

  const state = {
    isMobileNavActive,
    setIsMobileNavActive,
    isHeaderActive,
    setIsHeaderActive,
    currentPage,
    setCurrentPage,
  };

  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
};
export default GlobalContextProvider;

export const useGlobalContext = () => useContext(GlobalContext);
