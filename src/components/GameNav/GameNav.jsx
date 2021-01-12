import React, { useContext } from "react";

import styles from "./styles.scss";

import { AppContext } from "../AppContext/AppContext.js";
import GameTimer from "../GameTimer/GameTimer.jsx";

const GameNav = () => {
  const { moveCounts } = useContext(AppContext);

  return (
    <div className={styles.nav}>
      <h2 className="title">Moves {moveCounts}</h2>
      <h1 className="title">Memory Card</h1>
      <GameTimer />
    </div>
  );
};

export default GameNav;
