import React from "react";
import { AppContext } from "../appContext/AppContext.js";

const AppContextProvider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
