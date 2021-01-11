import React, { useEffect, useContext } from "react";
import { Transition } from "semantic-ui-react";

import { AppContext } from "../AppContext/AppContext.js";

import styles from "./styles.scss";

const TransitionScreen = () => {
  const {
    transitionDetails: { isTransitionOpen = false, nextState },
    setTransitionDetails,
    setGameState,
  } = useContext(AppContext);

  useEffect(() => {
    if (isTransitionOpen) {
      setTimeout(() => {
        setTransitionDetails({ isTransitionOpen: false });
        setGameState(nextState);
      }, 700);
    }
  }, [isTransitionOpen]);

  return (
    <Transition visible={isTransitionOpen} animation="fade" duration={600}>
      <div className={styles.transitionScreen}></div>
    </Transition>
  );
};

export default TransitionScreen;
