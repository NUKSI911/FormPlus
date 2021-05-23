import React from "react";
import classes from "./FeedBox.module.css";

function FeedBox({ children }) {
  return <div className={classes.feedBackWrapper}>{children}</div>;
}

export default FeedBox;
