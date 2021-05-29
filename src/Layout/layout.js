import React from "react";

import classes from "./layout.module.css";
import PropTypes from 'prop-types'
import {  withRouter } from 'react-router-dom'

function layout({ children }) {
  return <div className={classes.wrapper}>{children}</div>;
}

let Layout = withRouter(layout)
export default Layout;

Layout.propTypes = {
  children:PropTypes.oneOfType([PropTypes.array,PropTypes.object]).isRequired
}