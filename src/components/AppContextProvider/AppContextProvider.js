import React, { useState } from "react";
import { AppContext } from "../AppContext/AppContext.js";

const AppContextProvider = ({ children }) => {
  const [level, setLevel] = useState("");
  const [isDifficultyModalOpen, setDifficultyModalOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        level,
        setLevel,
        isDifficultyModalOpen,
        setDifficultyModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
