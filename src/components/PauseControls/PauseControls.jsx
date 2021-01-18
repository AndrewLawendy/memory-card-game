import React, { useEffect, useContext } from "react";
import { Transition, Button } from "semantic-ui-react";

import { AppContext } from "../AppContext/AppContext.js";
import { gameStates } from "../../../utils/constants.js";

import styles from "./styles.scss";

const PauseControls = () => {
  const {
    paused,
    setPaused,
    setTransitionDetails,
    setGameState,
    setMoveCounts,
  } = useContext(AppContext);

  function handleSpaceBarPress(event) {
    if (event.code === "Space") {
      event.preventDefault();
      setPaused((paused) => !paused);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleSpaceBarPress);

    return () => {
      window.removeEventListener("keydown", handleSpaceBarPress);
      setPaused(false);
    };
  }, []);

  function goToMainMenu() {
    setTimeout(() => {
      setMoveCounts(0);
    }, 350);

    setTransitionDetails({
      isTransitionOpen: true,
      nextState: gameStates.pickDifficulty,
    });

    setPaused(false);
  }

  function resetGame() {
    setTimeout(() => {
      setGameState(gameStates.pickDifficulty);
      setMoveCounts(0);
    }, 350);

    setTransitionDetails({
      isTransitionOpen: true,
      nextState: gameStates.gameStarted,
    });

    setPaused(false);
  }

  return (
    <Transition visible={paused} animation="fade" duration={800}>
      <div className={styles.modal}>
        <Transition
          visible={paused}
          animation="drop"
          duration={800}
          transitionOnMount={true}
        >
          <div>
            <h1 className="title">Paused</h1>
            <div>
              <Button size="massive" color="olive" onClick={goToMainMenu}>
                Main Menu
              </Button>
              <Button size="massive" color="yellow" onClick={resetGame}>
                Reset Game
              </Button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  );
};

export default PauseControls;
