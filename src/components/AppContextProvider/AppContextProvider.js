import React, { useState } from "react";
import { AppContext } from "../AppContext/AppContext.js";

import { gameStates } from "../../../utils/constants";

const AppContextProvider = ({ children }) => {
  const [levelDetails, setLevelDetails] = useState({});
  const [isDifficultyModalOpen, setDifficultyModalOpen] = useState(false);
  const [transitionDetails, setTransitionDetails] = useState({});
  const [gameState, setGameState] = useState(gameStates.pickDifficulty);
  const [moveCounts, setMoveCounts] = useState(0);
  const [lastGameDuration, setLastGameDuration] = useState(0);

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
        moveCounts,
        setMoveCounts,
        lastGameDuration,
        setLastGameDuration,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
