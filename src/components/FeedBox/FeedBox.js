import React from "react";
import classes from "./FeedBox.module.css";
import PropTypes from 'prop-types'
function FeedBox({ children }) {
  return <div className={classes.feedBackWrapper}>{children}</div>;
}

export default FeedBox;


FeedBox.propTypes = {
  children:PropTypes.oneOfType([PropTypes.array,PropTypes.object]).isRequired
}