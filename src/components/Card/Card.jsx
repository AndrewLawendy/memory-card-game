import React, { useState, forwardRef, useEffect } from "react";

import styles from "./styles.scss";

import cardBack from "../../../assets/images/card-back.png";

const Card = forwardRef(
  ({ cardInfo: { id, imageSrc }, evaluateCards }, ref) => {
    const [flipped, setFlipped] = useState(false);
    const [cardImageSrc, setCardImageSrc] = useState(imageSrc);

    function handleCardFlip() {
      if (!flipped) {
        if (!cardImageSrc) {
          setCardImageSrc(imageSrc);
        }
        setFlipped(true);
        evaluateCards(id, setFlipped);
      }
    }

    useEffect(() => {
      setTimeout(() => {
        if (!flipped) setCardImageSrc("");
      }, 3500);
    }, []);

    return (
      <div
        ref={ref}
        className={`${styles.card} ${flipped ? styles.flipped : ""}`}
        onClick={handleCardFlip}
        role="presentation"
      >
        <div className={styles.cardContent}>
          <div className={styles.cardImageContainer}>
            <img src={cardImageSrc} alt="Card Character" />
          </div>
        </div>

        <div className={styles.cardBack}>
          <img src={cardBack} alt="Card Back" />
        </div>
      </div>
    );
  }
);

export default Card;
