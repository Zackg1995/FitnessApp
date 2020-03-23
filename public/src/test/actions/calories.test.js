import { addFood, editCalories, removeFood } from "../../actions/calories";

test("Should setup remove calories action object", () => {
  const action = removeFood({ id: "abc123" });
  expect(action).toEqual({
    type: "REMOVEFOOD",
    id: "abc123"
  });
});

test("Should edit calories", () => {
  const edit = editCalories("abc", { note: "note" });
  expect(edit).toEqual({
    type: "EDIT_CALORIES",
    id: "abc",
    updates: {
      note: "note"
    }
  });
});

test("Should setup add calories action object with values", () => {
  const foodData = {
    description: "chicken",
    calories: 100,
    createdAt: 1000,
    note: "Dinner"
  };
  const action = addFood(foodData);
  expect(action).toEqual({
    type: "ADDFOOD",
    calorie: {
      ...foodData,
      id: expect.any(String)
    }
  });
});

test("Should setup add food action object with default values", () => {
  const action = addFood();
  expect(action).toEqual({
    type: "ADDFOOD",
    calorie: {
      description: "",
      calories: 0,
      createdAt: 0,
      note: "",
      id: expect.any(String)
    }
  });
});
