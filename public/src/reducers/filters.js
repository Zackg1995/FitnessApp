import moment from "moment";

const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month"),
};

export default (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_CALORIE_AMOUNT":
      return {
        ...state,
        sortBy: "Calorie Amount",
      };
    case "SORT_BY_CALORIE_BURNT":
      return {
        ...state,
        sortBy: "Calorie Burnt",
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "Date",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};
