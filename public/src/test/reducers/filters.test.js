import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("should setup default values for filter", () => {
  const state = filtersReducer(undefined, { type: "@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("Sort by changes to calorie amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_CALORIE_AMOUNT" });
  expect(state.sortBy).toBe("Calorie Amount");
});

test("Sort by the date", () => {
  const curState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "Calorie Amount"
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducer(curState, action);
  expect(state.sortBy).toBe("Date");
});

test("Sort by text filter", () => {
  const text = "this is a filter";
  const action = {
    type: "SET_TEXT_FILTER",
    text
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test("Sort by start of month", () => {
  const startDate = moment();
  const action = {
    type: "SET_START_DATE",
    startDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test("Sort by end of month", () => {
  const endDate = moment();
  const action = {
    type: "SET_END_DATE",
    endDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
