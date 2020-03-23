import { createStore, combineReducers } from "redux";
import uuid from "uuid";
//adding food

const addFood = ({
  description = "",
  note = "",
  calories = 0,
  createdAt = 0
} = {}) => ({
  type: "ADDFOOD",
  calorie: {
    id: uuid(),
    description,
    note,
    calories,
    createdAt
  }
});

const removeFood = ({ id } = {}) => ({
  type: "REMOVEFOOD",
  id
});

const editCalories = (id, updates) => ({
  type: "EDIT_CALORIES",
  id,
  updates
});

const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

const sortByCalorieAmount = () => ({
  type: "SORT_BY_CALORIE_AMOUNT"
});

const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});

const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});

const calorieReducerDefaultState = [];

const calorieReducer = (state = calorieReducerDefaultState, action) => {
  switch (action.type) {
    case "ADDFOOD":
      return state.concat(action.calorie);
    case "REMOVEFOOD":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_CALORIES":
      return state.map(calories => {
        if (calories.id === action.id) {
          return {
            ...calories,
            ...action.updates
          };
        } else {
          return calories;
        }
      });
    default:
      return state;
  }
};

const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_CALORIE_AMOUNT":
      return {
        ...state,
        sortBy: "Calorie Amount"
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "Date"
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

const getVisibleCalories = (calories, { text, sortBy, startDate, endDate }) => {
  return calories
    .filter(calorie => {
      const startDateMatch =
        typeof startDate !== "number" || calorie.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || calorie.createdAt <= endDate;
      const textMatch = calorie.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "calories") {
        return a.calories < b.calories ? 1 : -1;
      }
    });
};

const store = createStore(
  combineReducers({
    calories: calorieReducer,
    filters: filterReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleCalories = getVisibleCalories(state.calories, state.filters);
  console.log(visibleCalories);
});

const foodOne = store.dispatch(
  addFood({ description: "chicken", calories: 100, createdAt: -11000 })
);
const foodTwo = store.dispatch(
  addFood({ description: "beef", calories: 184, createdAt: -100 })
);

//store.dispatch(setTextFilter("beef"));

//store.dispatch(addFood({ description: "beef", calories: 250 }));
/*
store.dispatch(removeFood({ id: foodOne.calorie.id }));

store.dispatch(editCalories(foodOne.calorie.id, { calories: 900 }));




store.dispatch(sortByDate()); */

store.dispatch(sortByCalorieAmount());

//store.dispatch(setStartDate(-2000));
/*
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));
store.dispatch(setEndDate());*/

const demoState = {
  calories: [
    {
      id: "desc",
      description: "Chicken",
      note: "100g of Chicken",
      calorieAmount: 284,
      createAt: 0
    }
  ],
  filters: {
    text: "Food",
    sortBy: "calorieAmount",
    startDate: undefined,
    endDate: undefined
  }
};
