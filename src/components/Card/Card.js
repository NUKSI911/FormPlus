import React from "react";
import classes from "./Card.module.css";
function Card({ data }) {
  return (
    <div className={classes.cardWrapper}>
      <div className={classes.cardContent}>
        <h1>{data.name}</h1>
        <p className={classes.cardDesc}>{data.description}</p>
      </div>
      <div className={classes.linkWrapper}>
        <a className={classes.cardLink} href={data.link} target='blank'>
          Use Template
        </a>
      </div>
    </div>
  );
}

export default Card;
