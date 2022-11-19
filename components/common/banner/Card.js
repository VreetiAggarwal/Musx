import React from "react";
import classes from "./Discover.module.css";

const Card = ({ cardImage }) => (
  <div className={classes.card}>
    <img src={cardImage} alt="cardImage" />
  </div>
);

export default Card;
