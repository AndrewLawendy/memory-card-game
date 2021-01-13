import React, { useContext } from "react";
import { Transition, Grid, Button, Icon } from "semantic-ui-react";

import styles from "./styles.scss";

import { AppContext } from "../AppContext/AppContext.js";
import { gameStates } from "../../../utils/constants.js";

const ScorePanel = () => {
  const {
    levelDetails: { uniqueCardsLimit, idealDuration },
    moveCounts,
    setMoveCounts,
    lastGameDuration,
    setLastGameDuration,
    setTransitionDetails,
  } = useContext(AppContext);

  const perfectScore = 500;
  let movesDiff = moveCounts - uniqueCardsLimit * 2;
  let durationDiff = lastGameDuration - idealDuration;

  if (movesDiff < 0) movesDiff = 0;
  if (durationDiff < 0) durationDiff = 0;

  let score = perfectScore - movesDiff * 10 - durationDiff * 20;
  if (score < 0) score = 0;

  function replay() {
    setTransitionDetails({
      isTransitionOpen: true,
      nextState: gameStates.pickDifficulty,
    });

    setTimeout(() => {
      setMoveCounts(0);
      setLastGameDuration(0);
    }, 600);
  }

  return (
    <Transition visible={true} animation="fade" duration={800}>
      <div className={styles.modal}>
        <Transition
          visible={true}
          animation="drop"
          duration={800}
          transitionOnMount={true}
        >
          <div className={styles.modalBody}>
            <Grid columns="equal" verticalAlign="middle">
              <Grid.Column textAlign="center">
                <h2 className="title">Moves</h2>
                <span className={styles.result}>{moveCounts}</span>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <h2 className="title">Duration</h2>
                <span className={styles.result}>
                  {new Date(lastGameDuration * 1000)
                    .toISOString()
                    .substr(14, 5)}
                </span>
              </Grid.Column>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <h2 className="title">Your Score</h2>
                  <span className={styles.result}>{score}</span>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Button
                    color="red"
                    size="massive"
                    className={styles.replayBtn}
                    onClick={replay}
                  >
                    Replay
                    <Icon name="sync alternate" />
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </Transition>
      </div>
    </Transition>
  );
};

export default ScorePanel;
