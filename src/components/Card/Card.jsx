import React from "react";

import styles from "./styles.scss";

import img from "../../../assets/images/cards/1.png";

const Card = () => {
  return (
    <div className={styles.card}>
      <img src={img} alt="unflipped card" />
    </div>
  );
};

export default Card;
