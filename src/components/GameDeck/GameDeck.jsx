import React, { useContext } from "react";

import styles from "./styles.scss";
import Card from "../Card/Card.jsx";

import { AppContext } from "../AppContext/AppContext.js";

import allCards from "../../../utils/allCards.js";

function shuffle(arr) {
  arr.forEach((_item, idx) => {
    const j = ~~(Math.random() * arr.length);
    [arr[idx], arr[j]] = [arr[j], arr[idx]];
  });

  return arr;
}

const GameDeck = () => {
  const {
    levelDetails: { uniqueCardsLimit },
  } = useContext(AppContext);

  const shuffledCards = shuffle(allCards).slice(0, uniqueCardsLimit);
  const pairedCards = shuffle([...shuffledCards, ...shuffledCards]);

  return (
    <div className={styles.deckContainer}>
      <div className={styles.deck}>
        {pairedCards.map((card, index) => (
          <Card key={`${card.id}-${index}`} cardInfo={card} />
        ))}
      </div>
    </div>
  );
};

export default GameDeck;
