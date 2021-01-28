import React, { useContext, useState, useEffect, useRef } from "react";

import styles from "./styles.scss";
import cardStyles from "../Card/styles.scss";

import allCards from "../../../utils/allCards.js";
import { gameStates } from "../../../utils/constants";

import { AppContext } from "../AppContext/AppContext.js";
import Card from "../Card/Card.jsx";
import PauseControls from "../PauseControls/PauseControls.jsx";

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
  const [gameCards, setGameCards] = useState([]);
  const [pairedCardsCount, setPairedCardsCount] = useState(0);
  const [flippedCards, setFlippedCards] = useState([]);
  const cardsElements = useRef([]);

  useEffect(() => {
    const shuffledCards = shuffle(allCards).slice(0, uniqueCardsLimit);
    setGameCards(shuffle([...shuffledCards, ...shuffledCards]));
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
        const newPairedCardsCount = pairedCardsCount + 1;
        setPairedCardsCount(newPairedCardsCount);

        if (newPairedCardsCount === uniqueCardsLimit) {
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
      const transitionDelay = Math.random() * (2.5 * 1) - 1;

      el.style.cssText = `transition: 2s ${transitionDelay}s; top: ${
        destinationOffsetTop - offsetTop
      }px; left: ${destinationOffsetLeft - offsetLeft}px;`;
      setTimeout(() => {
        el.classList.add(cardStyles.dazzling);
      }, transitionDelay * 1000);

      setTimeout(() => {
        el.removeAttribute("style");
      }, 3200);
    });
  }

  function appendRef(el) {
    cardsElements.current.push(el);
  }

  return (
    <>
      <div className={styles.deckContainer}>
        <div className={styles.deck}>
          <div className="dialog-border" />
          {gameCards.map((card, index) => (
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
      <PauseControls />
    </>
  );
};

export default GameDeck;
