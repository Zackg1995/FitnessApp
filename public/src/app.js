import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetCalories } from "./actions/calories";
import getVisibleCalories from "./selectors/calories";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "./firebase/firebase";
import { firebase } from "./firebase/firebase";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let rendered = false;
const renderApp = () => {
  if (!rendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    rendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(startSetCalories()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });

    console.log("login");
  } else {
    renderApp();
    history.push("/");
  }
});
