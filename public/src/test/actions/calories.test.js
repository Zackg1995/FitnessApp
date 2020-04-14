import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  startAddCalories,
  addFood,
  editCalories,
  startEditCalories,
  removeFood,
  setCalories,
  startSetCalories,
  startRemoveCalories,
} from "../../actions/calories";
import calories from "../fixtures/calories";
import database from "../../firebase/firebase";

const uid = "testuid";
const defaultState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const caloriesData = {};
  calories.forEach(({ id, description, note, createdAt, calories }) => {
    caloriesData[id] = { description, note, createdAt, calories };
  });
  database
    .ref(`users/${uid}/calories`)
    .set(caloriesData)
    .then(() => done());
});

test("Should setup remove calories action object", () => {
  const action = removeFood({ id: "abc123" });
  expect(action).toEqual({
    type: "REMOVEFOOD",
    id: "abc123",
  });
});

test("remove calories in firebase", (done) => {
  const store = createMockStore(defaultState);
  const id = calories[2].id;
  store
    .dispatch(startRemoveCalories({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "REMOVEFOOD",
        id,
      });
      return database.ref(`users/${uid}/calories/${id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
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

test("should edit calories in FB", (done) => {
  const store = createMockStore(defaultState);
  const id = calories[1].id;
  const updates = { description: "beef" };
  store
    .dispatch(startEditCalories(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "EDIT_CALORIES",
        id,
        updates,
      });
      return database.ref(`users/${uid}/calories/${id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val().description).toBe(updates.description);
      done();
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
  const store = createMockStore(defaultState);
  const calorieData = {
    description: "",
    calories: 0,
    note: "",
    createdAt: 0,
  };
  store
    .dispatch(startAddCalories())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADDFOOD",
        calorie: {
          id: expect.any(String),
          ...calorieData,
        },
      });
      return database
        .ref(`users/${uid}/calories/${actions[0].calorie.id}`)
        .once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(calorieData);
      done();
    });
});

test("should setup set calories obj with data", () => {
  const action = setCalories(calories);
  expect(action).toEqual({
    type: "SET_CALORIES",
    calories,
  });
});

test("should fetch data", (done) => {
  const store = createMockStore(defaultState);
  store.dispatch(startSetCalories()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_CALORIES",
      calories,
    });
    done();
  });
});
