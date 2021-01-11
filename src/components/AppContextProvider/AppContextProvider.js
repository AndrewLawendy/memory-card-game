import React, { useState } from "react";
import { AppContext } from "../AppContext/AppContext.js";

import { gameStates } from "../../../utils/constants";

const AppContextProvider = ({ children }) => {
  const [levelDetails, setLevelDetails] = useState({});
  const [isDifficultyModalOpen, setDifficultyModalOpen] = useState(false);
  const [transitionDetails, setTransitionDetails] = useState({});
  const [gameState, setGameState] = useState(gameStates.pickDifficulty);

  return (
    <AppContext.Provider
      value={{
        levelDetails,
        setLevelDetails,
        isDifficultyModalOpen,
        setDifficultyModalOpen,
        transitionDetails,
        setTransitionDetails,
        gameState,
        setGameState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
