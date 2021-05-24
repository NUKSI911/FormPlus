import React from "react";

import classes from "./layout.module.css";
import PropTypes from 'prop-types'

function Layout({ children }) {
  return <div className={classes.wrapper}>{children}</div>;
}

export default Layout;

Layout.propTypes = {
  children:PropTypes.oneOfType([PropTypes.array,PropTypes.object]).isRequired
}