import React, { useState } from "react";
import { Button, Transition, Icon } from "semantic-ui-react";

import styles from "./styles.scss";

const DifficultyModal = () => {
  const [visible, setVisible] = useState(false);
  const [indicatorPosition, setIndicatorPosition] = useState(400);

  function updateIndicator({ offsetTop }) {
    setIndicatorPosition(offsetTop + 11);
  }

  return (
    <>
      <Button
        circular
        color="yellow"
        icon="sliders horizontal"
        title="Adjust Difficulty"
        onClick={() => {
          setVisible(true);
        }}
      />

      <Transition visible={visible} animation="drop" duration={800}>
        <div className={styles.modal}>
          <div className={styles.modalBody}>
            <h4>Choose your difficulty level...</h4>
            <ul>
              <li onMouseEnter={(e) => updateIndicator(e.target)}>Easy</li>
              <li onMouseEnter={(e) => updateIndicator(e.target)}>Medium</li>
              <li onMouseEnter={(e) => updateIndicator(e.target)}>Hard</li>
            </ul>
            <Icon
              style={{ top: indicatorPosition }}
              className={styles.levelChoice}
              name="hand point right outline"
            />
          </div>
        </div>
      </Transition>
    </>
  );
};

export default DifficultyModal;
