import React, { useContext, useState, useEffect } from "react";

import { AppContext } from "../AppContext/AppContext.js";
import { gameStates } from "../../../utils/constants.js";

const GameTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [timerInterval, setTimerInterval] = useState();
  const { gameState, setLastGameDuration } = useContext(AppContext);

  function tick() {
    setSeconds((seconds) => seconds + 1);
  }

  useEffect(() => {
    if (gameState === gameStates.gameStarted) {
      setTimerInterval(setInterval(tick, 1000));
    } else {
      clearInterval(timerInterval);
      setLastGameDuration(seconds);
    }
  }, [gameState]);

  return (
    <h2 className="title">
      {new Date(seconds * 1000).toISOString().substr(14, 5)}
    </h2>
  );
};

export default GameTimer;
