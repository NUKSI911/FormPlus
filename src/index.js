import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "./config/StoreConfig";
import { BrowserRouter } from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react'


let { persistor,store } = configureStore();

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <BrowserRouter  >
      <PersistGate  loading={null} persistor={persistor}>


        <App />
   
        </PersistGate>
    </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
