import React, { useContext, useState, useEffect } from "react";
import { Transition, Grid } from "semantic-ui-react";

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
    <div className={`${styles.nav} title`}>
      <Grid columns="equal" verticalAlign="middle">
        <Grid.Column>
          <h2>Moves {moveCounts}</h2>
        </Grid.Column>

        <Grid.Column textAlign="center">
          <Transition animation="jiggle" duration={1500} visible={animate}>
            <h1>Memory Card</h1>
          </Transition>
        </Grid.Column>

        <Grid.Column textAlign="right">
          <GameTimer />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default GameNav;
