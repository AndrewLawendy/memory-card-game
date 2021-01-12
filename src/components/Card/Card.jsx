import React, { useState } from "react";

import styles from "./styles.scss";

import cardBack from "../../../assets/images/card-back.png";

const Card = ({ cardInfo: { id, imageSrc }, evaluateCards }) => {
  const [flipped, setFlipped] = useState(false);
  const [cardImageSrc, setCardImageSrc] = useState("");

  return (
    <div
      className={`${styles.card} ${flipped ? styles.flipped : ""}`}
      onClick={() => {
        if (!flipped) {
          if (!cardImageSrc) {
            setCardImageSrc(imageSrc);
          } else {
            setFlipped(true);
          }
          evaluateCards(id, setFlipped);
        }
      }}
      role="presentation"
    >
      <div className={styles.cardContent}>
        {/* <h4>Witch</h4> */}

        <div className={styles.cardImageContainer}>
          <img
            src={cardImageSrc}
            alt="Unflipped Card"
            onLoad={() => {
              setFlipped(true);
            }}
          />
        </div>
      </div>

      <div className={styles.cardBack}>
        <img src={cardBack} alt="Card Back" />
      </div>
    </div>
  );
};

export default Card;
