import React, { useContext } from "react";

import styles from "./styles.scss";

import { AppContext } from "../AppContext/AppContext.js";
import GameNav from "../GameNav/GameNav.jsx";
import DifficultyModal from "../DifficultyModal/DifficultyModal.jsx";
import GameDeck from "../GameDeck/GameDeck.jsx";
import ScorePanel from "../ScorePanel/ScorePanel.jsx";

import { gameStates } from "../../../utils/constants.js";

const GameBoard = () => {
  const { gameState } = useContext(AppContext);

  return (
    <div className={styles.board}>
      <GameNav />
      {gameState === gameStates.pickDifficulty && <DifficultyModal />}
      {gameState === gameStates.gameStarted && <GameDeck />}
      {gameState === gameStates.score && <ScorePanel />}
    </div>
  );
};

export default GameBoard;
