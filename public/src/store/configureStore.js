import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import calorieReducer from "../reducers/calories";
import filterReducer from "../reducers/filters";
import authReducer from "../reducers/auth";
import exerciseReducer from "../reducers/exercise";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      calories: calorieReducer,
      exercise: exerciseReducer,
      filters: filterReducer,
      auth: authReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
