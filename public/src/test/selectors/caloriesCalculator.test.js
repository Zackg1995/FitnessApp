import selectCalorieTotal from "../../selectors/caloriesCalculator";
import calories from "../fixtures/calories";

test("Return nothing if there are no calories inputted", () => {
  const res = selectCalorieTotal([]);
  expect(res).toBe(0);
});

test("Should see single calorie input", () => {
  const res = selectCalorieTotal([calories[0]]);
  expect(res).toBe(100);
});

test("Should add calories together", () => {
  const res = selectCalorieTotal(calories);
  expect(res).toBe(650);
});
