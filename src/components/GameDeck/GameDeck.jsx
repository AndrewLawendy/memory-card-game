import React, { useContext, useState, useEffect, useRef } from "react";

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
  const [flippedCards, setFlippedCards] = useState([]);
  const cardsElements = useRef([]);

  useEffect(() => {
    const shuffledCards = shuffle(allCards).slice(0, uniqueCardsLimit);
    setPairedCards(shuffle([...shuffledCards, ...shuffledCards]));
    setTimeout(animateShuffle, 100);
  }, []);

  function evaluateCards(cardId, setFlipped) {
    const cardsToEvaluate = [...flippedCards, { cardId, setFlipped }];
    setFlippedCards(cardsToEvaluate);

    if (cardsToEvaluate.length == 2) {
      setMoveCounts(moveCounts + 1);
      const [firstCard, secondCard] = cardsToEvaluate;
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

      setFlippedCards([]);
    }
  }

  function animateShuffle() {
    const allCardsLength = uniqueCardsLimit * 2;
    const newDestinations = shuffle(
      Array.from({ length: allCardsLength }, (_, idx) => idx)
    ).map((order) => {
      const { offsetTop, offsetLeft } = cardsElements.current[order];
      return {
        destinationOffsetTop: offsetTop,
        destinationOffsetLeft: offsetLeft,
      };
    });

    cardsElements.current.forEach((el, idx) => {
      const { destinationOffsetTop, destinationOffsetLeft } = newDestinations[
        idx
      ];
      const { offsetTop, offsetLeft } = el;

      el.style.cssText = `transition: .5s; top: ${
        destinationOffsetTop - offsetTop
      }px; left: ${destinationOffsetLeft - offsetLeft}px`;

      setTimeout(() => {
        el.removeAttribute("style");
      }, 500);
    });
  }

  function appendRef(el) {
    cardsElements.current.push(el);
  }

  return (
    <div className={styles.deckContainer}>
      <div className={styles.deck}>
        <div className="dialog-border" />
        {pairedCards.map((card, index) => (
          <Card
            ref={appendRef}
            key={`${card.id}-${index}`}
            cardInfo={card}
            evaluateCards={evaluateCards}
          />
        ))}
        <div className="dialog-border invert" />
      </div>
    </div>
  );
};

export default GameDeck;
