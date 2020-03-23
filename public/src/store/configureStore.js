import { createStore, combineReducers } from "redux";
import calorieReducer from "../reducers/calories";
import filterReducer from "../reducers/filters";

export default () => {
  const store = createStore(
    combineReducers({
      calories: calorieReducer,
      filters: filterReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
