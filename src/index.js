import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "./config/StoreConfig";
// import { Router } from "react-router";
import { Router } from "react-router-dom";
import ReactGA from 'react-ga'
import { createBrowserHistory } from 'history';
import { PersistGate } from 'redux-persist/integration/react'


let { persistor,store } = configureStore();

const history = createBrowserHistory();


history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <Router history={history} >
      <PersistGate  loading={null} persistor={persistor}>


        <App />
        {/* </Router> */}
        {/* </BrowserRouter> */}
        </PersistGate>
    </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
