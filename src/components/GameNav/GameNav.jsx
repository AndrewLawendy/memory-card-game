import React from "react";
import { Button } from "semantic-ui-react";

import styles from "./styles.scss";

const GameNav = () => (
  <div className={styles.nav}>
    <h1 className="title">Memory Card</h1>
    <Button circular color="red" icon="sync" title="Reset Game" />
  </div>
);

export default GameNav;
