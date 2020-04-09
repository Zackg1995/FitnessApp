import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  startAddCalories,
  addFood,
  editCalories,
  removeFood,
} from "../../actions/calories";
import calories from "../fixtures/calories";
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

test("Should setup remove calories action object", () => {
  const action = removeFood({ id: "abc123" });
  expect(action).toEqual({
    type: "REMOVEFOOD",
    id: "abc123",
  });
});

test("Should edit calories", () => {
  const edit = editCalories("abc", { note: "note" });
  expect(edit).toEqual({
    type: "EDIT_CALORIES",
    id: "abc",
    updates: {
      note: "note",
    },
  });
});

test("Should setup add calories action object with values", () => {
  const action = addFood(calories[1]);
  expect(action).toEqual({
    type: "ADDFOOD",
    calorie: calories[1],
  });
});

test("Should add calories to the database storing it", (done) => {
  const store = createMockStore({});
  const calorieData = {
    description: "chicken",
    calories: 200,
    note: "Dinner",
    createdAt: 3000,
  };
  store.dispatch(startAddCalories(calorieData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADDFOOD",
      calorie: {
        id: expect.any(String),
        ...calorieData,
      },
    });

    database
      .ref(`calories/${actions[0].calorie.id}`)
      .once("value")
      .then((snapshot) => {
        expect(snapshot.val()).toEqual(calorieData);
        done();
      });

    done();
  });
});

// test("Should setup add food action object with default values", () => {
//   const action = addFood();
//   expect(action).toEqual({
//     type: "ADDFOOD",
//     calorie: {
//       description: "",
//       calories: 0,
//       createdAt: 0,
//       note: "",
//       id: expect.any(String),
//     },
//   });
// });
