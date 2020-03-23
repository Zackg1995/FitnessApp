import caloriesReducer from "../../reducers/calories";
import calories from "../fixtures/calories";

test("Should set default state", () => {
  const state = caloriesReducer(undefined, { type: "@INIT" });
  expect(state).toEqual([]);
});

test("Remove expense by the id", () => {
  const action = {
    type: "REMOVEFOOD",
    id: calories[2].id
  };
  const state = caloriesReducer(calories, action);
  expect(state).toEqual([calories[0], calories[1]]);
});

test("should not remove food if id not found", () => {
  const action = {
    type: "REMOVEFOOD",
    id: "-1"
  };
  const state = caloriesReducer(calories, action);
  expect(state).toEqual(calories);
});

test("Should add food", () => {
  const calorie = {
    id: "109",
    description: "Rice",
    note: "",
    createdAt: 23000,
    calories: 100
  };
  const action = {
    type: "ADDFOOD",
    calorie
  };
  const state = caloriesReducer(calories, action);
  expect(state).toEqual([...calories, calorie]);
});

//Editing Calories Test case
test("Edit an expense", () => {
  const calorie = 1200;
  const action = {
    type: "EDIT_CALORIES",
    id: calories[1].id,
    updates: {
      calorie
    }
  };
  const state = caloriesReducer(calories, action);
  expect(state[1].calorie).toBe(calorie);
});

test("No editing to take place as no id found", () => {
  const calorie = 1200;
  const action = {
    type: "EDIT_CALORIES",
    id: "-1",
    updates: {
      calorie
    }
  };
  const state = caloriesReducer(calories, action);
  expect(state).toEqual(calories);
});
