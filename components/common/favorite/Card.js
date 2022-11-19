import React from "react";
import classes from "./Fav.module.css";

const Card = ({ cardImage }) => (
  <div className={classes.card}>
    <img src={cardImage} alt="cardImage" />
    <div></div>
  </div>
);

export default Card;
