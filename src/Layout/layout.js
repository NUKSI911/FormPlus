import React from "react";

import classes from "./layout.module.css";

function Layout({ children }) {
  return <div className={classes.wrapper}>{children}</div>;
}

export default Layout;
