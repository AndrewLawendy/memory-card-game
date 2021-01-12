import React, { useContext, useState, useEffect } from "react";

import styles from "./styles.scss";

import allCards from "../../../utils/allCards.js";
import { gameStates } from "../../../utils/constants";

import { AppContext } from "../AppContext/AppContext.js";
import Card from "../Card/Card.jsx";

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
    moveCounts,
    setMoveCounts,
    setTransitionDetails,
  } = useContext(AppContext);
  const [pairedCards, setPairedCards] = useState([]);
  const [paired, setPaired] = useState(1);

  useEffect(() => {
    const shuffledCards = shuffle(allCards).slice(0, uniqueCardsLimit);
    setPairedCards(shuffle([...shuffledCards, ...shuffledCards]));
  }, []);

  const flippedCards = [];

  function evaluateCards(cardId, setFlipped) {
    flippedCards.push({ cardId, setFlipped });

    if (flippedCards.length == 2) {
      setMoveCounts(moveCounts + 1);
      const [firstCard, secondCard] = flippedCards;
      if (firstCard.cardId !== secondCard.cardId) {
        setTimeout(() => {
          firstCard.setFlipped(false);
          secondCard.setFlipped(false);
        }, 600);
      } else {
        setPaired((paired) => paired + 1);

        if (paired === uniqueCardsLimit) {
          setTimeout(() => {
            setTransitionDetails({
              isTransitionOpen: true,
              nextState: gameStates.score,
            });
          }, 1500);
        }
      }

      flippedCards.length = 0;
    }
  }

  return (
    <div className={styles.deckContainer}>
      <div className={styles.deck}>
        {pairedCards.map((card, index) => (
          <Card
            key={`${card.id}-${index}`}
            cardInfo={card}
            evaluateCards={evaluateCards}
          />
        ))}
      </div>
    </div>
  );
};

export default GameDeck;
