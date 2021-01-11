import React, { useState } from "react";

import styles from "./styles.scss";

import cardBack from "../../../assets/images/card-back.png";

const Card = ({ cardInfo: { imageSrc } }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`${styles.card} ${flipped ? styles.flipped : ""}`}
      onClick={() => {
        setFlipped(!flipped);
      }}
      role="presentation"
    >
      <div className={styles.cardContent}>
        <h4>Witch</h4>

        <div className={styles.cardImageContainer}>
          <img src={imageSrc} alt="unflipped card" />
        </div>
      </div>

      <div className={styles.cardBack}>
        <img src={cardBack} alt="Card Back" />
      </div>
    </div>
  );
};

export default Card;
