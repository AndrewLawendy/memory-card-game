import React from "react";

import styles from "./styles.scss";

import GameNav from "../GameNav/GameNav.jsx";

const GameBoard = () => (
  <div className={styles.board}>
    <GameNav />
  </div>
);

export default GameBoard;
