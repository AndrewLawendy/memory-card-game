import React, { useContext, useState, useEffect } from "react";

import { AppContext } from "../AppContext/AppContext.js";
import { gameStates } from "../../../utils/constants.js";

const GameTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [timerInterval, setTimerInterval] = useState();
  const { gameState, setLastGameDuration, paused } = useContext(AppContext);

  function tick() {
    setSeconds((seconds) => seconds + 1);
  }

  function play() {
    setTimerInterval(setInterval(tick, 1000));
  }

  function pause() {
    clearInterval(timerInterval);
  }

  useEffect(() => {
    switch (gameState) {
      case gameStates.gameStarted:
        paused ? pause() : play();
        break;

      case gameStates.pickDifficulty:
      default:
        setSeconds(0);
        pause();
        break;

      case gameStates.score:
        pause();
        setLastGameDuration(seconds);
    }
  }, [gameState, paused]);

  return <h2>{new Date(seconds * 1000).toISOString().substr(14, 5)}</h2>;
};

export default GameTimer;
