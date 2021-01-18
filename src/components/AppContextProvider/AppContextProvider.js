import React, { useState } from "react";
import { AppContext } from "../AppContext/AppContext.js";

import { gameStates } from "../../../utils/constants";

const AppContextProvider = ({ children }) => {
  const [levelDetails, setLevelDetails] = useState({});
  const [transitionDetails, setTransitionDetails] = useState({});
  const [gameState, setGameState] = useState(gameStates.pickDifficulty);
  const [moveCounts, setMoveCounts] = useState(0);
  const [lastGameDuration, setLastGameDuration] = useState(0);
  const [paused, setPaused] = useState(false);

  return (
    <AppContext.Provider
      value={{
        levelDetails,
        setLevelDetails,
        transitionDetails,
        setTransitionDetails,
        gameState,
        setGameState,
        moveCounts,
        setMoveCounts,
        lastGameDuration,
        setLastGameDuration,
        paused,
        setPaused,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
