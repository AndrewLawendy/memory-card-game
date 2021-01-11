import React, { useContext } from "react";

import styles from "./styles.scss";

import { AppContext } from "../AppContext/AppContext.js";
import GameNav from "../GameNav/GameNav.jsx";
import GameDeck from "../GameDeck/GameDeck.jsx";

import { gameStates } from "../../../utils/constants.js";

const GameBoard = () => {
  const { gameState } = useContext(AppContext);

  return (
    <div className={styles.board}>
      <GameNav />
      {gameState === gameStates.gameStarted && <GameDeck />}
    </div>
  );
};

export default GameBoard;
