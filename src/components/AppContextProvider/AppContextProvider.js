import React, { useState } from "react";
import { AppContext } from "../AppContext/AppContext.js";

const AppContextProvider = ({ children }) => {
  const [levelDetails, setLevelDetails] = useState({});
  const [isDifficultyModalOpen, setDifficultyModalOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        levelDetails,
        setLevelDetails,
        isDifficultyModalOpen,
        setDifficultyModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
