import React from "react";
import classes from "./Card.module.css";
import PropTypes from 'prop-types'
function Card({ data }) {
  return (
    <div className={classes.cardWrapper}>
      <div className={classes.cardContent}>
        <h1 className={classes.contentTitle}>{data.name}</h1>
        <p className={classes.cardDesc}>{data.description}</p>
      </div>
      <div className={classes.linkWrapper}>
        <a className={classes.cardLink} href={data.link} target='blank' >
          Use Template
        </a>
      </div>
    </div>
  );
}

export default Card;

Card.defaultProps = {
  data:[]
}

Card.propTypes = {
  data:PropTypes.array.isRequired
}