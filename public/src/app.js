import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addFood } from "./actions/calories";
import getVisibleCalories from "./selectors/calories";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(addFood({ description: "beef", calories: 250 }));
store.dispatch(
  addFood({ description: "Chicken", calories: 150, createdAt: 1000 })
);
store.dispatch(addFood({ description: "Lamb", calories: 400 }));

const state = store.getState();
const visibleCalories = getVisibleCalories(state.calories, state.filters);

console.log(visibleCalories);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
