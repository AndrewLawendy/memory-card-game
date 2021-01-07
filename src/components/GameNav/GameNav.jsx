import React, { useContext } from "react";
import { Button } from "semantic-ui-react";

import styles from "./styles.scss";

import { AppContext } from "../AppContext/AppContext.js";

const GameNav = () => {
  const { setDifficultyModalOpen } = useContext(AppContext);

  return (
    <div className={styles.nav}>
      <h1 className="title">Memory Card</h1>
      <div>
        <Button
          circular
          color="yellow"
          icon="sliders horizontal"
          title="Adjust Difficulty"
          onClick={() => {
            setDifficultyModalOpen(true);
          }}
        />
        <Button circular color="red" icon="sync" title="Reset Game" />
      </div>
    </div>
  );
};

export default GameNav;
