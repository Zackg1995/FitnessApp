import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import calorieReducer from "../reducers/calories";
import filterReducer from "../reducers/filters";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      calories: calorieReducer,
      filters: filterReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
