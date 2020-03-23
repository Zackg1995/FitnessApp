import selectCalories from "../../selectors/calories";
import moment from "moment";
import calories from "../fixtures/calories";

test("Filter by text value", () => {
  const filters = {
    text: "e",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = selectCalories(calories, filters);
  expect(result).toEqual([calories[0], calories[1]]);
});

test("Filtering of start date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined
  };
  const result = selectCalories(calories, filters);
  expect(result).toEqual([calories[2], calories[0]]);
});

test("Filtering of end date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0).add(2, "days")
  };
  const result = selectCalories(calories, filters);
  expect(result).toEqual([calories[0], calories[1]]);
});

test("sort by date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = selectCalories(calories, filters);
  expect(result).toEqual([calories[2], calories[0], calories[1]]);
});

test("sort by calories", () => {
  const filters = {
    text: "",
    sortBy: "calories",
    startDate: undefined,
    endDate: undefined
  };
  const result = selectCalories(calories, filters);
  expect(result).toEqual([calories[0], calories[1], calories[2]]);
});
