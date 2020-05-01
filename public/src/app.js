import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetCalories } from "./actions/calories";
import { login, logout } from "./actions/auth";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "./firebase/firebase";
import { firebase } from "./firebase/firebase";
import Loading from "./components/Loading";
import { startSetExercise } from "./actions/exercise";

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

ReactDOM.render(<Loading />, document.getElementById("app"));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetCalories()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
      store.dispatch(startSetExercise()).then(() => {
        if (history.location.pathname === "/") {
          history.push("exercise");
        }
      });
    });

    console.log("login");
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
