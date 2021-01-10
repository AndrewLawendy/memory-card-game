import React from "react";

import styles from "./styles.scss";

import cardBack from "../../../assets/images/cards/card-back.png";
import img from "../../../assets/images/cards/1.png";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h4>Witch</h4>

        <div className={styles.cardImageContainer}>
          <img src={img} alt="unflipped card" />
        </div>
      </div>

      <div className={styles.cardBack}>
        <img src={cardBack} alt="Card Back" />
      </div>
    </div>
  );
};

export default Card;
