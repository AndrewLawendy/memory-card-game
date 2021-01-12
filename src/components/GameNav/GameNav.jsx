import React, { useContext, useState, useEffect } from "react";
import { Transition } from "semantic-ui-react";

import styles from "./styles.scss";

import { AppContext } from "../AppContext/AppContext.js";
import GameTimer from "../GameTimer/GameTimer.jsx";

const GameNav = () => {
  const { moveCounts, gameState } = useContext(AppContext);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(!animate);
  }, [gameState]);

  return (
    <div className={styles.nav}>
      <h2 className="title">Moves {moveCounts}</h2>
      <Transition animation="jiggle" duration={1500} visible={animate}>
        <h1 className="title">Memory Card</h1>
      </Transition>
      <GameTimer />
    </div>
  );
};

export default GameNav;
