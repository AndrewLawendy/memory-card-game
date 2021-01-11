import React from "react";

import styles from "./styles.scss";
import Card from "../Card/Card.jsx";

import allCards from "../../../utils/allCards.js";

const GameDeck = () => {
  return (
    <div className={styles.deckContainer}>
      <div className={styles.deck}>
        {allCards.map((card, index) => (
          <Card key={`${card.id}-${index}`} cardInfo={card} />
        ))}
      </div>
    </div>
  );
};

export default GameDeck;
