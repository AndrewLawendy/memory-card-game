import React from "react";
import { Button } from "semantic-ui-react";

import DifficultyModal from "../DifficultyModal/DifficultyModal.jsx";

import styles from "./styles.scss";

const GameNav = () => (
  <div className={styles.nav}>
    <h1 className="title">Memory Card</h1>
    <div>
      <DifficultyModal />
      <Button circular color="red" icon="sync" title="Reset Game" />
    </div>
  </div>
);

export default GameNav;
