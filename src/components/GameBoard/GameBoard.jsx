import React from "react";

import styles from "./styles.scss";

import GameNav from "../GameNav/GameNav.jsx";
import GameDeck from "../GameDeck/GameDeck.jsx";

const GameBoard = () => (
  <div className={styles.board}>
    <GameNav />
    <GameDeck />
  </div>
);

export default GameBoard;
