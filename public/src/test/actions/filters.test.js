import {
  setStartDate,
  setEndDate,
  sortByDate,
  sortByCalorieAmount,
  setTextFilter
} from "../../actions/filters";
import moment from "moment";

test("Generate set start date obj", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("Generate end date obj", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});

test("Allow for sorting by date", () => {
  const action = sortByDate("Date");
  expect(action).toEqual({
    type: "SORT_BY_DATE"
  });
});

test("Sorting of calorie amount", () => {
  const action = sortByCalorieAmount("Calorie");
  expect(action).toEqual({
    type: "SORT_BY_CALORIE_AMOUNT"
  });
});

test("Generate set text filter obj, text value", () => {
  const text = "Test Input";
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text
  });
});

test("Should generate text filter obj with default values", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});
