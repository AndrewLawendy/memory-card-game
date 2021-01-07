import React from "react";

import styles from "./styles.scss";
import Card from "../Card/Card.jsx";

const GameDeck = () => {
  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <div className={styles.deckContainer}>
      <div className={styles.deck}>
        {cards.map((card) => (
          <Card key={card} />
        ))}
      </div>
    </div>
  );
};

export default GameDeck;
