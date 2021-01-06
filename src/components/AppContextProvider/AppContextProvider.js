import React from "react";
import { AppContext } from "../AppContext/AppContext.js";

const AppContextProvider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
