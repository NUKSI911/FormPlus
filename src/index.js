import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { storeConfig } from "./config/StoreConfig";
// import { Router } from "react-router";
import { Router } from "react-router-dom";
import ReactGA from 'react-ga'
import { createBrowserHistory } from 'history';

let store = storeConfig();

const history = createBrowserHistory();
ReactGA.initialize(process.env.REACT_APP_GA)


history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

ReactDOM.render(
  <React.StrictMode>
    <Router history={history} >
      <Provider store={store}>
        {/* <BrowserRouter> */}
        {/* <Router> */}

        <App />
        {/* </Router> */}
        {/* </BrowserRouter> */}
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
