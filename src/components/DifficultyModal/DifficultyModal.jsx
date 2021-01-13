import React, { useState, useContext, useEffect } from "react";
import { Transition, Icon } from "semantic-ui-react";

import styles from "./styles.scss";

import { AppContext } from "../AppContext/AppContext.js";
import { gameStates } from "../../../utils/constants.js";

const DifficultyModal = () => {
  const {
    isDifficultyModalOpen,
    setDifficultyModalOpen,
    setLevelDetails,
    setTransitionDetails,
  } = useContext(AppContext);
  const [indicatorPosition, setIndicatorPosition] = useState(400);

  function updateIndicator({ offsetTop }) {
    setIndicatorPosition(offsetTop + 11);
  }

  function chooseLevel(level, uniqueCardsLimit, idealDuration) {
    setLevelDetails({
      level,
      uniqueCardsLimit,
      idealDuration,
    });
    setDifficultyModalOpen(false);
    setTransitionDetails({
      isTransitionOpen: true,
      nextState: gameStates.gameStarted,
    });
  }

  useEffect(() => {
    setDifficultyModalOpen(true);
  }, []);

  return (
    <Transition visible={isDifficultyModalOpen} animation="fade" duration={800}>
      <div className={styles.modal}>
        <Transition
          visible={isDifficultyModalOpen}
          animation="drop"
          duration={800}
          transitionOnMount={true}
        >
          <div className={styles.modalBody}>
            <h4>Choose your difficulty level...</h4>
            <ul>
              <li
                onMouseEnter={(e) => updateIndicator(e.target)}
                onClick={() => {
                  chooseLevel("Easy", 3, 10);
                }}
                role="presentation"
              >
                Easy
              </li>
              <li
                onMouseEnter={(e) => updateIndicator(e.target)}
                onClick={() => {
                  chooseLevel("Medium", 6, 20);
                }}
                role="presentation"
              >
                Medium
              </li>
              <li
                onMouseEnter={(e) => updateIndicator(e.target)}
                onClick={() => {
                  chooseLevel("Hard", 9, 30);
                }}
                role="presentation"
              >
                Hard
              </li>
            </ul>
            <Icon
              style={{ top: indicatorPosition }}
              className={styles.levelChoice}
              name="hand point right outline"
            />
          </div>
        </Transition>
      </div>
    </Transition>
  );
};

export default DifficultyModal;
